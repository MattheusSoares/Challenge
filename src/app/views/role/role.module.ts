import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { RoleComponent } from './role.component';
@NgModule({
  imports: [CommonModule, NgbModule, MatTabsModule],
  declarations: [RoleComponent]
})
export class RoleModule {}
