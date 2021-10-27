import { NgModule } from "@angular/core";
import { OwlDateTimeIntl } from "ng-pick-datetime";
import { ComponentModule } from "src/app/shared/components/component.module";
import { SnackbarComponent } from "../ui/snackbar/snackbar.component";
import { EmployeeRoutingModule } from "./employee-routing.module";
import { EmployeeComponent } from "./employee.component";
import { EmployeeFormComponent } from './form/form.component';
import { EmployeeDeleteComponent } from './delete/delete.component';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { AdvanceTableRoutingModule } from "../advance-table/advance-table-routing.module";
import { ContactsService } from "../contacts/contacts.service";
import { EmployeeDetalhesComponent } from "./employee-detalhes/employee-detalhes.component";
import { MatTabsModule } from "@angular/material/tabs";
import { NgxEchartsModule } from "ngx-echarts";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

@NgModule({
    imports: [
    EmployeeRoutingModule,
    ComponentModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdvanceTableRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSortModule,
    MatToolbarModule,
    MaterialFileInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    NgxDatatableModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),

    ],
    declarations: [
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeDeleteComponent,
    EmployeeDetalhesComponent
    ],
    providers: [
      SnackbarComponent,
      { provide: OwlDateTimeIntl}, 
      ContactsService
    ],
  })
  export class EmployeeModule {}
