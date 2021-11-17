import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProcessEmployeeAttribute } from 'src/app/core/models/process-employee-attribubtes.model';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeService } from 'src/app/core/service/employee.service';
import { EmployeeAttributeService } from 'src/app/core/service/employee.attribute.service';
import { AttributeService } from 'src/app/core/service/attribute.service';
import { Attribute } from 'src/app/core/models/attribute.model';
import { FormControl } from '@angular/forms';
import { CategoryService } from 'src/app/core/service/category.service';
import { TypeService } from 'src/app/core/service/type.service';
import { Category } from 'src/app/core/models/category.model';
import { EmployeeType } from 'src/app/core/models/type.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-comparacao',
  templateUrl: './employee-comparacao.component.html',
  styleUrls: ['./employee-comparacao.component.scss']
})
export class EmployeeComparacaoComponent implements OnInit {

  ehMaiorA: boolean;
  ehMaior10A: boolean;
  ehMaiorB: boolean;
  ehMaior10B: boolean;

  idColaborador1 = '775c83ee-aa7e-4047-b737-191a1065cda5';
  idColaborador2 = '6abf8b22-4149-4cf4-a41e-52012869f433';

  employeeList: Employee[] = [];

  employee1: Employee = new Employee();
  employee2: Employee = new Employee();

  requestBodyEmployeeProcess1 = { employeeId: "", attributeIds: [] };
  requestBodyEmployeeProcess2 = { employeeId: "", attributeIds: [] };

  categoriesForm = new FormControl();
  typesForm = new FormControl();
  attributesForm = new FormControl();

  categories: Category[] = [];
  types: EmployeeType[] = [];
  attributes: Attribute[] = [];

  atributosFiltro = [
  ];
  attributesList: Attribute[] = [];


  processDataEmployeeA: ProcessEmployeeAttribute;
  processDataEmployeeB: ProcessEmployeeAttribute;


  colaboradorAtributos: any[] = []
  displayedColumns: string[] = [
    'atributo',
    'mColaboradorA',
    'm10ColaboradorA',
    'mColaboradorB',
    'm10ColaboradorB'
  ];
  dataSource = new MatTableDataSource<any>(this.colaboradorAtributos);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private employeeService: EmployeeService,
    private employeeAttributeService: EmployeeAttributeService,
    private attributeService: AttributeService,
    public categoryService: CategoryService,
    public typeService: TypeService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.idColaborador1= this.route.snapshot.paramMap.get('id');
    this.idColaborador2= this.route.snapshot.paramMap.get('id2');
    console.log(this.idColaborador1);
    console.log(this.idColaborador2);
    this.dataSource.data = this.colaboradorAtributos
    console.log("dataSource: ", this.dataSource.data);
    this.getEmployees(this.idColaborador1, this.idColaborador2);
    this.getCategoria();
    this.loadData();
  }


  loadData() {

    this.attributeService.getAll().subscribe({
      next: att => {
        this.attributesList = att;
        this.requestBodyEmployeeProcess1.employeeId = this.idColaborador1;
        this.requestBodyEmployeeProcess1.attributeIds = this.atributosFiltro;
        this.employeeAttributeService.getByEmployeeProcessAttributes(this.requestBodyEmployeeProcess1).subscribe({
          next: process => {
            this.processDataEmployeeA = process;
            console.log("processData1: ", this.processDataEmployeeA);
            this.requestBodyEmployeeProcess2.employeeId = this.idColaborador2;
            this.requestBodyEmployeeProcess2.attributeIds = this.atributosFiltro;
            this.employeeAttributeService.getByEmployeeProcessAttributes(this.requestBodyEmployeeProcess2).subscribe({
              next: process => {
                this.processDataEmployeeB = process;
                console.log("processData2: ", this.processDataEmployeeB);
                this.buildDataSource();
              },
              error: err => console.log(err)
            });
          },
          error: err => console.log(err)
        });
      
      }});

  }

  buildDataSource() {

    const colaboradorAtributos = this.atributosFiltro.map(id => ({
      atributo: this.attributesList.find(el => el.id === id).description,
      //COLABORADOR A
      mColaboradorA: Math.round(this.processDataEmployeeA.processedEmployeeAttributes.find(el => el.attributeId == id).averageScore * 10) / 10,
      maiorMA: this.ehMaiorMediaGeralA(id),
      m10ColaboradorA: Math.round(this.processDataEmployeeA.processedEmployeeAttributes.find(el => el.attributeId == id).averageScoreLast10 * 10) / 10,
      maiorM10A: this.ehMaiorMediaGeral10A(id),
      //COLABORADOR B
      mColaboradorB: Math.round(this.processDataEmployeeB.processedEmployeeAttributes.find(el => el.attributeId == id).averageScore * 10) / 10,
      maiorMB: this.ehMaiorMediaGeralB(id),
      m10ColaboradorB: Math.round(this.processDataEmployeeB.processedEmployeeAttributes.find(el => el.attributeId == id).averageScoreLast10 * 10) / 10,
      maiorM10B: this.ehMaiorMediaGeral10B(id),

    }));

    console.log("colaboradorAtributos: ", colaboradorAtributos)
    this.dataSource.data = colaboradorAtributos;
  }

  ehMaiorMediaGeralA(id): boolean {
    if ((this.processDataEmployeeA.processedEmployeeAttributes.find(el => el.attributeId == id).averageScore) > (this.processDataEmployeeB.processedEmployeeAttributes.find(el => el.attributeId == id).averageScore)) {
      return true;
    } else {
      return false
    }
  }

  ehMaiorMediaGeralB(id): boolean {
    if ((this.processDataEmployeeB.processedEmployeeAttributes.find(el => el.attributeId == id).averageScore) > (this.processDataEmployeeA.processedEmployeeAttributes.find(el => el.attributeId == id).averageScore)) {
      return true;
    } else {
      return false
    }
  }

  ehMaiorMediaGeral10A(id): boolean {
    if ((this.processDataEmployeeA.processedEmployeeAttributes.find(el => el.attributeId == id).averageScoreLast10) > (this.processDataEmployeeB.processedEmployeeAttributes.find(el => el.attributeId == id).averageScoreLast10)) {
      return true;
    } else {
      return false
    }
  }

  ehMaiorMediaGeral10B(id): boolean {
    if ((this.processDataEmployeeB.processedEmployeeAttributes.find(el => el.attributeId == id).averageScoreLast10) > (this.processDataEmployeeA.processedEmployeeAttributes.find(el => el.attributeId == id).averageScoreLast10)) {
      return true;
    } else {
      return false
    }
  }

  getAttributes() {
    this.attributeService.getAllArray(this.typesForm.value).subscribe(att => {
      this.attributes = att;
      console.log("Attributes ", this.attributes);
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
    });
  }

  getEmployees(employeeId1, employeeId2) {
    this.employeeService.getById(employeeId2).subscribe({
      next: employee => {
        this.employee2 = employee;
      },
      error: err => console.log(err)
    });

    this.employeeService.getById(employeeId1).subscribe({
      next: employee => {
        this.employee1 = employee;
      },
      error: err => console.log(err)
    });
  }

  onClickSearchType() {
    this.getTypes();
  }

  onClickSearchAttributes() {
    this.getAttributes();
  }

  onClickSearch() {
    this.atributosFiltro = this.attributesForm.value;
    this.loadData();
  }
}

