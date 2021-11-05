import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProcessEmployeeAttribute } from 'src/app/core/models/process-employee-attribubtes.model';
import { Attribute } from '@angular/compiler';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeService } from 'src/app/core/service/employee.service';
import { EmployeeAttributeService } from 'src/app/core/service/employee-attribute.service';
import { AttributeService } from 'src/app/core/service/attribute.service';

@Component({
  selector: 'app-employee-comparacao',
  templateUrl: './employee-comparacao.component.html',
  styleUrls: ['./employee-comparacao.component.scss']
})
export class EmployeeComparacaoComponent implements OnInit {

  idColaborador1 = '775c83ee-aa7e-4047-b737-191a1065cda5';
  idColaborador2 = '6abf8b22-4149-4cf4-a41e-52012869f433';

  employeeList: Employee[] = [];

  employee1: Employee = new Employee();
  employee2: Employee = new Employee();

  requestBodyEmployeeProcess1 = {employeeId: "", attributeIds: []};
  requestBodyEmployeeProcess2 = {employeeId: "", attributeIds: []};

  atributosFiltro: any[] = [
    "06e6dbc6-3605-431e-94a9-8452457765b2",
    "8a97f6e5-653a-42e5-af81-95e9f441a29b",
    "d2b5998d-f452-4d50-a585-e34168604582",
    "29613273-2957-454d-83bb-34c1da4aac14"
  ];
  attributesList: Attribute[] = [];


  processDataEmployee1: ProcessEmployeeAttribute;
  processDataEmployee2: ProcessEmployeeAttribute;


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

      this.employeeService.getAll().subscribe({
        next: employees => {
          this.employeeList = employees;
          debugger
          this.employee1 = this.employeeList.find(emp => emp.id === this.idColaborador1);
          this.requestBodyEmployeeProcess1.employeeId = this.idColaborador1;
          this.requestBodyEmployeeProcess1.attributeIds = this.atributosFiltro;
          console.log(this.requestBodyEmployeeProcess1);
          this.employee2 = this.employeeList.find(emp => emp.id === this.idColaborador2);
          this.requestBodyEmployeeProcess2.employeeId = this.idColaborador2;
          this.requestBodyEmployeeProcess2.attributeIds = this.atributosFiltro;
          console.log(this.requestBodyEmployeeProcess2);
          this.employeeAttributeService.getByEmployeeProcessAttributes(this.requestBodyEmployeeProcess1).subscribe({
            next: process => {
              this.processDataEmployee1 = process;
              console.log("processData1: ", this.processDataEmployee1);
            },
            error: err => console.log(err)
          });
    
        },
        error: err => console.log(err)
      });
    
      this.attributeService.getAll().subscribe({
        next: att => {
          this.attributesList = att;
          console.log("atributos: ", this.attributesList);
        },
        error: err => console.log(err)
      });
    
      

     
    // PROCESS DATA COLAB 1 
    //lista id atributos predefinida (filtro)
    // get proecss-employee-attributes colab 1 atributo1 --> obj de process Data
    //push pra lista de process data colab 1 
    // get proecss-employee-attributes colab 2 atributo2 --> obj de process Data
    //push pra lista de process data colab 1 
    // get proecss-employee-attributes colab 1 atributo3 --> obj de process Data
    //push pra lista de process data colab 1 

    // PROCESS DATA COLAB 2
    //lista id atributos predefinida (filtro)
    // get proecss-employee-attributes colab 2 atributo1 --> obj de process Data
    //push pra lista de process data colab 1 
    // get proecss-employee-attributes colab 2 atributo2 --> obj de process Data
    //push pra lista de process data colab 1 
    // get proecss-employee-attributes colab 2 atributo3 --> obj de process Data
    //push pra lista de process data colab 1 
  }

//   this.costcenterService.getAll().pipe(finalize(() => this.isTblLoading = false)).subscribe(centrosCusto => {
//     this.centrosCusto = centrosCusto;
//     centrosCusto.forEach(centroCusto => {
//       const cc = {
//         id: centroCusto.id,
//         descricao: centroCusto.descricao,
//         sigla: centroCusto.sigla,
//         gestor: centroCusto.gestor.descricao,
//         empresaId: this.getNomeEmpresa(centroCusto.empresaId),
//         ativar: centroCusto.ativo,
//         bloquear: centroCusto.bloqueado
//       }
//       this.ccEdited.push(cc)
//     });
}

