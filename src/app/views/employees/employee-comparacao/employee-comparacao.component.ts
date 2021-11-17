import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProcessEmployeeAttribute } from 'src/app/core/models/process-employee-attribubtes.model';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeService } from 'src/app/core/service/employee.service';
import { EmployeeAttributeService } from 'src/app/core/service/employee.attribute.service';
import { AttributeService } from 'src/app/core/service/attribute.service';
import { Attribute } from 'src/app/core/models/attribute.model';

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

  atributosFiltro = [
    "06e6dbc6-3605-431e-94a9-8452457765b2",
    "8a97f6e5-653a-42e5-af81-95e9f441a29b",
    "d2b5998d-f452-4d50-a585-e34168604582",
    "29613273-2957-454d-83bb-34c1da4aac14"
  ];
  attributesList: Attribute[] = [];


  processDataEmployeeA: ProcessEmployeeAttribute;
  processDataEmployeeB: ProcessEmployeeAttribute;


  colaboradorAtributos: any[] = [
    {
      atributo: 'C#',
      mColaboradorA: 10.0,
      maiorMA: true,
      m10ColaboradorA: 8.9,
      maiorM10A: true,
      mColaboradorB: 8,
      maiorMB: false,
      m10ColaboradorB: 8.2,
      maiorM10B: false
    },
    {
      atributo: 'Java',
      mColaboradorA: 9.3,
      maiorMA: true,
      m10ColaboradorA: 8.8,
      maiorM10A: true,
      mColaboradorB: 8.5,
      maiorMB: false,
      m10ColaboradorB: 8.0,
      maiorM10B: false
    },
    {
      atributo: 'Angular',
      mColaboradorA: 7.5,
      maiorMA: false,
      m10ColaboradorA: 8.5,
      maiorM10A: false,
      mColaboradorB: 9.0,
      maiorMB: true,
      m10ColaboradorB: 9.6,
      maiorM10B: true
    },
    {
      atributo: 'React',
      mColaboradorA: 10.0,
      maiorMA: true,
      m10ColaboradorA: 9.8,
      maiorM10A: true,
      mColaboradorB: 7.0,
      maiorMB: false,
      m10ColaboradorB: 7.0,
      maiorM10B: false
    }
  ]
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
    private attributeService: AttributeService
  ) { }
  ngOnInit() {
    this.dataSource.data = this.colaboradorAtributos
    console.log("dataSource: ", this.dataSource.data);
    this.loadData();
  }


  loadData() {

    this.attributeService.getAll().subscribe({
      next: att => {
        this.attributesList = att;
        console.log("atributos: ", this.attributesList);
        this.employeeService.getById(this.idColaborador1).subscribe({
          next: employee => {
            this.employee1 = employee;
            this.requestBodyEmployeeProcess1.employeeId = this.idColaborador1;
            this.requestBodyEmployeeProcess1.attributeIds = this.atributosFiltro;
            this.employeeAttributeService.getByEmployeeProcessAttributes(this.requestBodyEmployeeProcess1).subscribe({
              next: process => {
                this.processDataEmployeeA = process;
                console.log("processData1: ", this.processDataEmployeeA);
                this.employeeService.getById(this.idColaborador2).subscribe({
                  next: employee => {
                    this.employee2 = employee;
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
              },
              error: err => console.log(err)
            });
          },
          error: err => console.log(err)
        });
      },
      error: err => console.log(err)
    });

  }

  buildDataSource() {

    const colaboradorAtributos = this.atributosFiltro.map(id => ({
      atributo: this.attributesList.find(el => el.id === id).description,
      //COLABORADOR A
      mColaboradorA: Math.round(this.processDataEmployeeA.processedEmployeeAttributes.find(el => el.attributeId == id).averageScore * 10)/10,
      maiorMA: this.ehMaiorMediaGeralA(id),
      m10ColaboradorA: Math.round(this.processDataEmployeeA.processedEmployeeAttributes.find(el => el.attributeId == id).averageScoreLast10 * 10)/10,
      maiorM10A: this.ehMaiorMediaGeral10A(id),
      //COLABORADOR B
      mColaboradorB: Math.round(this.processDataEmployeeB.processedEmployeeAttributes.find(el => el.attributeId == id).averageScore * 10)/10,
      maiorMB: this.ehMaiorMediaGeralB(id),
      m10ColaboradorB: Math.round(this.processDataEmployeeB.processedEmployeeAttributes.find(el => el.attributeId == id).averageScoreLast10 * 10)/10,
      maiorM10B: this.ehMaiorMediaGeral10B(id),

    }));

    console.log("colaboradorAtributos: ", colaboradorAtributos)
    this.dataSource.data = colaboradorAtributos;
  }

  ehMaiorMediaGeralA(id) : boolean{
    if((this.processDataEmployeeA.processedEmployeeAttributes.find(el => el.attributeId == id).averageScore) > (this.processDataEmployeeB.processedEmployeeAttributes.find(el => el.attributeId == id).averageScore)){
      return true;
    } else{
      return false
    }
  }

  ehMaiorMediaGeralB(id) : boolean{
    if((this.processDataEmployeeB.processedEmployeeAttributes.find(el => el.attributeId == id).averageScore) > (this.processDataEmployeeA.processedEmployeeAttributes.find(el => el.attributeId == id).averageScore)){
      return true;
    } else{
      return false
    }
  }

  ehMaiorMediaGeral10A(id) : boolean{
    if((this.processDataEmployeeA.processedEmployeeAttributes.find(el => el.attributeId == id).averageScoreLast10) > (this.processDataEmployeeB.processedEmployeeAttributes.find(el => el.attributeId == id).averageScoreLast10)){
      return true;
    } else{
      return false
    }
  }

  ehMaiorMediaGeral10B(id) : boolean{
    if((this.processDataEmployeeB.processedEmployeeAttributes.find(el => el.attributeId == id).averageScoreLast10) > (this.processDataEmployeeA.processedEmployeeAttributes.find(el => el.attributeId == id).averageScoreLast10)){
      return true;
    } else{
      return false
    }
  }
}

