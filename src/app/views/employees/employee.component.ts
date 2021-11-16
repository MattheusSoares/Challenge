import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  filterToggle = false;
  displayedColumns = [
    'select',
    'id',
    'firstName',
    'email',
    'actions'
  ];
  // exampleDatabase: ContactsService | null;
  // dataSource: ExampleDataSource | null;
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<Employee>(true, []);
  id: number;
  disableCheckbox: boolean;
  //contacts: Contacts | null;
  employees: Employee[] = [];
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public contactsService: ContactsService,
    public employeeService: EmployeeService,
    private snackBar: MatSnackBar,
    private route: Router
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
  }
  refresh() {
    this.loadData();
  }

  getEmployers() {
    this.dataSource.data = [];

    this.employeeService.getAll().subscribe(colaboradores => {
      this.employees = colaboradores;
      this.dataSource.data = this.employees;
      // console.log("dataSource.data: ", this.dataSource.data);
      // console.log("dataSource: ", this.dataSource);
    });

  }

  onClickRoute(event){
    // console.log("event: ", event)
    this.route.navigate([`/employee/detalhes/` + event.id]);
  }

  addNew() {
    console.log("selection: ", this.selection.selected)
    // let tempDirection;
    // if (localStorage.getItem('isRtl') === 'true') {
    //   tempDirection = 'rtl';
    // } else {
    //   tempDirection = 'ltr';
    // }
    // const dialogRef = this.dialog.open(EmployeeFormComponent, {
    //   data: {
    //     contacts: this.contacts,
    //     action: 'add'
    //   },
    //   direction: tempDirection
    // });
    // this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
    //   if (result === 1) {
    //     // After dialog is closed we're doing frontend updates
    //     // For add we're just pushing a new row inside DataServicex
    //     this.exampleDatabase.dataChange.value.unshift(
    //       this.contactsService.getDialogData()
    //     );
    //     this.refreshTable();
    //     this.showNotification(
    //       'snackbar-success',
    //       'Add Record Successfully...!!!',
    //       'bottom',
    //       'center'
    //     );
    //   }
    // });
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

  countSeleted(){
    console.log("selection: ", this.selection);
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    // this.isAllSelected()
    //   ? this.selection.clear() && checkSelectionBool = true
    //   : this.dataSource.data.forEach((row) =>
    //       this.selection.select(row)
    //     );
    if(this.isAllSelected){
      this.selection.clear();
      this.checkSelectionBool = true
    } else{
      this.dataSource.data.forEach((row) =>
            this.selection.select(row));
    }

  }

  checkSelectionBool: boolean;
  
  removeSelectedRows() {
    // const totalSelect = this.selection.selected.length;
    // this.selection.selected.forEach((item) => {
    //   const index: number = this.dataSource.data.findIndex(
    //     (d) => d === item
    //   );
    //   // console.log(this.dataSource.renderedData.findIndex((d) => d === item));
    //   this.exampleDatabase.dataChange.value.splice(index, 1);
    //   this.refreshTable();
    //   this.selection = new SelectionModel<Employee>(true, []);
    // });
    // this.showNotification(
    //   'snackbar-danger',
    //   totalSelect + ' Record Delete Successfully...!!!',
    //   'bottom',
    //   'center'
    // );
  }
  public loadData() {
    this.getEmployers();

    // console.log("datasource: ", this.dataSource);
    this.subs.sink = fromEvent(this.filter.nativeElement, 'keyup')
      // .debounceTime(150)
      // .distinctUntilChanged()
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

  checkSelection(){
    if(this.selection.selected.length >= 2)
      this.disableCheckbox = true; 
    else
      this.disableCheckbox = false; 
  }

  onClickSearch() {
    debugger
    let id = this.selection.selected[0].id;
    let id2 = this.selection.selected[1].id;
    this.route.navigate([`/employee/comparacao/` + id + '/' + id2]);
  }

  isValidSelect() : boolean{
    
    if(this.selection.selected.length >= 2 ){
      return true
    } else {
      return false
    }
  }
}

