import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
// declare const M: any;
interface Gender {
  id: string;
  value: string;
}
@Component({
  selector: 'app-employee-comparacao',
    templateUrl: './employee-comparacao.component.html',
    styleUrls: ['./employee-comparacao.component.scss']
})
export class EmployeeComparacaoComponent implements OnInit {
  colaboradorAtributos: any[] =  [
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

  constructor() {}
  ngOnInit() {
   this.dataSource.data = this.colaboradorAtributos
   console.log("dataSource: ", this.dataSource.data)
  }
}


