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
      colaboradorA: 10,
      colaboradorB: 8
    },
    {
      atributo: 'Java',
      colaboradorA: 5,
      colaboradorB: 9
    },
    {
      atributo: 'Angular',
      colaboradorA: 8,
      colaboradorB: 6
    },
    {
      atributo: 'React',
      colaboradorA: 7,
      colaboradorB: 9
    }
  ]
  displayedColumns: string[] = [
    'atributo',
    'colaboradorA',
    'colaboradorB'
  ];
  dataSource = new MatTableDataSource<any>(this.colaboradorAtributos);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() {}
  ngOnInit() {
   this.dataSource.data = this.colaboradorAtributos
   console.log("dataSource: ", this.dataSource.data)
  }
}


