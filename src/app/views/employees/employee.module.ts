import { NgModule } from "@angular/core";
import { OwlDateTimeIntl } from "ng-pick-datetime";
import { ComponentModule } from "src/app/shared/components/component.module";
import { SnackbarComponent } from "../ui/snackbar/snackbar.component";
import { EmployeeRoutingModule } from "./employee-routing.module";
import { EmployeeComponent } from "./employee.component";

@NgModule({
    imports: [
      EmployeeRoutingModule,
      ComponentModule
    ],
    declarations: [
    EmployeeComponent
    ],
    providers: [
      SnackbarComponent,
      { provide: OwlDateTimeIntl}
    ],
  })
  export class EmployeeModule {}
