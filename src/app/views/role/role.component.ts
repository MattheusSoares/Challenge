import { Component, ElementRef, OnInit, Type, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/core/models/category.model';
import { EmployeeType } from 'src/app/core/models/type.model';
import { Employee } from 'src/app/core/models/employee.model';
import { Role } from 'src/app/core/models/role.model';
import { CategoryService } from 'src/app/core/service/category.service';
import { EmployeeService } from 'src/app/core/service/employee.service';
import { RolesService } from 'src/app/core/service/roles.service';
import { TypeService } from 'src/app/core/service/type.service';
import { AttributeService } from 'src/app/core/service/attribute.service';
import { Attribute } from 'src/app/core/models/attribute.model';
import { EmployeeAttributeService } from 'src/app/core/service/employee-attribute.service';
import { ProcessAttribute } from 'src/app/core/models/process-attributes.model';
import { ProcessRoleAttribute } from 'src/app/core/models/process-role-attributes';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  employees: Employee[] = [];
  roles: Role[] = [];
  categories: Category[] = [];
  types: EmployeeType[] = [];
  attributes: Attribute[] = [];
  processRoleAttributes: ProcessRoleAttribute = new ProcessRoleAttribute();
  requestBodyProcess = { employeeRoleId: "", attributeIds: [] };

  // disable toggle variables 
  disableType = new FormControl(false);
  disableAttributes = new FormControl(false);

  //forms
  categoriesForm = new FormControl();
  typesForm = new FormControl();
  attributesForm = new FormControl();
  roleForm = new FormControl();

  roleDefault: Role;

  constructor(
    public dialog: MatDialog,
    public employeeService: EmployeeService,
    public roleService: RolesService,
    public categoryService: CategoryService,
    public attributeService: AttributeService,
    public employeeAttributeService: EmployeeAttributeService,
    public typeService: TypeService,
    private snackBar: MatSnackBar,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.getRoles();
      this.dataSource.data = [];
      this.employeeService.getByEmployeeRoleId(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(colaboradores => {
        this.employees = colaboradores;
        this.dataSource.data = this.employees;
      });
    }
    this.getRoles();
    this.getCategoria();
  }

  public polarAreaChartLabels: string[] = [];
  public polarAreaChartData: number[] = [];
  public polarAreaChartData2: number[] = [];
  public polarAreaChartData3: number[] = [];
  public polarAreaLegend = true;
  public ploarChartColors: any[] = [
    {
      backgroundColor: ['#60A3F6', '#7C59E7', '#DD6811', '#5BCFA5', '#FF23FC', '#00b050']
    }
  ];

  public polarAreaChartType = 'polarArea';
  public polarChartOptions: any = {
    animation: false,
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontColor: '#9aa0ac'
      }
    }
  };

  displayedColumns = [
    'pathPhoto',
    'firstName',
    'email',
    'details'
  ];

  dataSource = new MatTableDataSource<any>();

  getEmployees() {
    this.dataSource.data = [];
    this.employeeService.getByEmployeeRoleId(this.roleForm.value.id).subscribe(colaboradores => {
      this.employees = colaboradores;
      this.dataSource.data = this.employees;
    });
  }

  getRoles() {
    this.roleService.getAll().subscribe(roles => {
      this.roles = roles;
      if (this.activatedRoute.snapshot.paramMap.get('id')) {
        this.roleDefault = this.roles.find(el => el.id === this.activatedRoute.snapshot.paramMap.get('id'));
        this.roleForm.setValue(this.roleDefault);
      }
    });
  }

  getCategoria() {
    this.attributes = [];
    this.types = [];
    this.categoryService.getAll().subscribe(cat => {
      this.categories = cat;
    });
  }

  getTypes() {
    this.attributes = [];
    this.typeService.getAllArray(this.categoriesForm.value).subscribe(types => {
      this.types = types;
      console.log("Types: ", this.types);
      this.disableType.setValue(true);
    });
  }

  getByEmployeeRoleProcessAttributes() {
    this.polarAreaChartData = [];
    this.polarAreaChartLabels = [];
    this.requestBodyProcess.employeeRoleId = this.roleForm.value.id;
    this.requestBodyProcess.attributeIds = this.attributesForm.value;
    this.employeeAttributeService.getByEmployeeRoleProcessAttributes(this.requestBodyProcess).subscribe(processData => {
      this.processRoleAttributes = processData;
      let data = [];
      let data2 = [];
      let data3 = [];
      let labels = [];
      this.processRoleAttributes.processedEmployeeRoleAttributes.forEach(item => {
        data.push(Math.round(item?.averageScore * 10) / 10);
        data2.push(Math.round(item?.averageScoreLast5 * 10) / 10);
        data3.push(Math.round(item?.averageScoreLast10 * 10) / 10);
        labels.push(this.attributes.find(el => el.id === item.attributeId).description);
      })
      this.polarAreaChartData = data;
      this.polarAreaChartData2 = data2;
      this.polarAreaChartData3 = data3;
      this.polarAreaChartLabels = labels;
      console.log("ProcessData: ", this.processRoleAttributes);
    });
  }

  getAttributes() {
    this.attributeService.getAllArray(this.typesForm.value).subscribe(att => {
      this.attributes = att;
      console.log("Attributes ", this.attributes);
      this.disableAttributes.setValue(true);
    });
  }

  onClickSearchType() {
    this.getTypes();
  }

  onClickSearchAttributes() {
    this.getAttributes();
  }

  onClickSearch() {
    this.getEmployees()
    this.getByEmployeeRoleProcessAttributes();
  }

  onClickRoute(event) {
    this.route.navigate([`/employee/detalhes/` + event.id]);
  }

  isValid(): boolean {
    if (this.roleForm.value && this.typesForm.value && this.attributesForm.value && this.categoriesForm.value) {
      if (this.typesForm.value.length > 0 && this.attributesForm.value.length > 0 && this.categoriesForm.value.length > 0)
        return true
    } else {
      return false
    }
  }

  isOptionDisabled(opt: any) : boolean{
    if(this.attributesForm.value){
      return this.attributesForm.value.length >= 6 && !this.attributesForm.value.find(el => el == opt)
    }
    
  }
}

