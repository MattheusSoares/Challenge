import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeComparacaoComponent } from "./employee-comparacao/employee-comparacao.component";
import { EmployeeDetalhesComponent } from "./employee-detalhes/employee-detalhes.component";
import { EmployeeComponent } from "./employee.component";

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent
  },
  {
    path: 'detalhes/:id',
    component: EmployeeDetalhesComponent
  },
  {
    path: 'comparacao',
    component: EmployeeComparacaoComponent
  }
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EmployeeRoutingModule {}
  