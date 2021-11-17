import {Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatMenuTrigger } from '@angular/material/menu';
import { SelectionModel } from '@angular/cdk/collections';
import { UnsubscribeOnDestroyAdapter } from '../../shared/UnsubscribeOnDestroyAdapter';
import { Contacts } from '../contacts/contacts.model';
import { EmployeeFormComponent } from './form/form.component';
import { EmployeeDeleteComponent } from './delete/delete.component';
import { ContactsService } from '../contacts/contacts.service';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeService } from 'src/app/core/service/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/core/models/category.model';
import { EmployeeType } from 'src/app/core/models/type.model';
import { AttributeService } from 'src/app/core/service/attribute.service';
import { CategoryService } from 'src/app/core/service/category.service';
import { TypeService } from 'src/app/core/service/type.service';
import { Attribute } from 'src/app/core/models/attribute.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit {
  filterToggle = false;
  displayedColumns = [
    'select',
    'pathPhoto',
    'firstName',
    'email',
    'actions'
  ];
  employeeForm: FormGroup;

  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<Employee>(true, []);
  id: number;
  disableCheckbox: boolean;
  employees: Employee[] = [];

  categories: Category[] = [];
  types: EmployeeType[] = [];
  attributes: Attribute[] = [];
  
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public contactsService: ContactsService,
    public employeeService: EmployeeService,
    private snackBar: MatSnackBar,
    private route: Router,
    private formBuilder: FormBuilder,
    private attributeService: AttributeService,
    public categoryService: CategoryService,
    public typeService: TypeService,
  ) {
    super();
  }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;
  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };

  ngOnInit() {
    this.loadData();
    this.disableCheckbox = false;
    this.initForm();
    this.addFilter();
    this.getCategorias(0);
  }
  refresh() {
    this.loadData();
  }

  getEmployers() {
    this.dataSource.data = [];
    this.employeeService.getAll().subscribe(colaboradores => {
      this.employees = colaboradores;
      this.dataSource.data = this.employees;
    });

  }

  onClickRoute(event) {
    this.route.navigate([`/employee/detalhes/` + event.id]);
  }

  initForm() {
    this.employeeForm = this.formBuilder.group({
      filters: this.formBuilder.array([])
    });
  }

  detailsCall(row) {
    console.log("selection: ", this.selection);
    console.log("row: ", row);
    let tempDirection;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    this.dialog.open(EmployeeFormComponent, {
      data: {
        action: this.selection.selected
      },
      direction: tempDirection,
      height: '70%',
      width: '35%'
    });
  }
  toggleStar(row) {
    // console.log(row);
  }

  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  countSeleted() {
    console.log("selection: ", this.selection);
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
  
    if (this.isAllSelected) {
      this.selection.clear();
      this.checkSelectionBool = true
    } else {
      this.dataSource.data.forEach((row) =>
        this.selection.select(row));
    }

  }

  checkSelectionBool: boolean;

  public loadData() {
    this.getEmployers();

    this.subs.sink = fromEvent(this.filter.nativeElement, 'keyup')
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
  showNotification(colorName, text, placementFrom, placementAlign) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName
    });
  }

  checkSelection() {
    if (this.selection.selected.length >= 2)
      this.disableCheckbox = true;
    else
      this.disableCheckbox = false;
  }

  onClickSearch() {
    let id = this.selection.selected[0].id;
    let id2 = this.selection.selected[1].id;
    this.route.navigate([`/employee/comparacao/` + id + '/' + id2]);
  }

  isValidSelect(): boolean {

    if (this.selection.selected.length >= 2) {
      return true
    } else {
      return false
    }
  }

  get filtersArray(): FormArray {
    return this.employeeForm.get('filters') as FormArray;
  }

  addFilter() {
    const formArray = this.employeeForm.get('filters') as FormArray;
    formArray.push(new FormGroup({
      category: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      attribute: new FormControl('', Validators.required),
      employeeSearchComparison: new FormControl('', Validators.required),
      value: new FormControl('', Validators.required),
      typesArray: new FormControl(''),
      attributesArray: new FormControl('')
    }));
  }

  deleteFilter(_, index) {
    const formArray = this.employeeForm.get('filters') as FormArray;
    formArray.removeAt(index);
  }

  getAttributes(i, id) {
    this.attributeService.getAllArray([id]).subscribe(att => {
      this.attributes = att;
      const array = this.employeeForm.get('filters') as FormArray
      array.controls[i].get("attributesArray").setValue(this.attributes);
      console.log(array.controls[i].get("attributesArray").value);
    });
  }

  getCategorias(i) {
    this.filtersArray.controls[i].get("typesArray").setValue(null);
    this.filtersArray.controls[i].get("attributesArray").setValue(null);
    this.categoryService.getAll().subscribe(cat => {
      this.categories = cat;
    });
  }

  getTypes(i, id) {
    this.filtersArray.controls[i].get("attributesArray").setValue(null);
    this.typeService.getAllArray([id]).subscribe(types => {
      this.types = types;
      const array = this.employeeForm.get('filters') as FormArray
      array.controls[i].get("typesArray").setValue(this.types);
      console.log(array.controls[i].get("typesArray").value);
    });
  }
  
  onClickSearchType(i) {
    const array = this.employeeForm.get("filters") as FormArray
    console.log(array.controls[i].get('category').value)
    this.getTypes(i, array.controls[i].get('category').value);
  }

  onClickSearchAttribute(i) {
    const array = this.employeeForm.get("filters") as FormArray
    console.log(array.controls[i].get('type').value)
    this.getAttributes(i, array.controls[i].get('type').value);
  }

  onClickSearchFilter() {

    const response = {
      searchItems: this.filtersArray.value.map(o => ({
        value: o.value,
        attributeId: o.attribute,
        employeeSearchComparison: o.employeeSearchComparison
      }))
    };

    console.log(response)
    this.employeeService.getFilteredEmployees(response).subscribe(employees => {
      this.employees = employees
      this.dataSource.data = this.employees;
    });
  }
}

