import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { ListColumn } from 'src/app/core/models/ListColumn';
import { EmployeeService } from 'src/app/core/service/Employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {

  columns: ListColumn[] = [
    { name: 'Id', property: 'id', type: 'int', visible: true, isModelProperty: true },
    { name: 'Nome', property: 'firstName', type: 'string', visible: true, isModelProperty: true }
  ] as ListColumn[];

  dataSource = new MatTableDataSource<any>();
  isTblLoading: boolean;
  showAddButton: boolean = false;

  constructor(
    private route: Router,
    private employeeService: EmployeeService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    this.isTblLoading = true;
    this.dataSource.data = [];
    this.employeeService.getAll().pipe(finalize(() => this.isTblLoading = false)).subscribe(employee => {
      this.dataSource.data = employee.map(employee => ({
        id: employee.id,
        firstName: employee.firstName
      }));
    });
  }

  edit(event) {
    this.route.navigate([`/activity-management/ped/form/${event.id}`]);
  }
}