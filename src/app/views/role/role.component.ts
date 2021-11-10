import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeService } from 'src/app/core/service/employee.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.sass']
})
export class RoleComponent implements OnInit {

  employees: Employee[] = [];
  
  constructor(
    public dialog: MatDialog,
    public employeeService: EmployeeService,
    private snackBar: MatSnackBar,
    private route: Router
  ) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;
  
  ngOnInit(): void {
    this.getEmployers();
  }

  public polarAreaChartLabels: string[] = [
    'Project 1',
    'Project 2',
    'Project 3'

  ];
  public polarAreaChartData: number[] = [15, 18, 9];
  public polarAreaLegend = true;
  public ploarChartColors: any[] = [
    {
      backgroundColor: ['#60A3F6', '#7C59E7', '#DD6811', '#5BCFA5', '#FF23FC']
    }
  ];

  public polarAreaChartType = 'polarArea';
  public polarChartOptions: any = {
    animation: false,
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontColor: '#9aa0ac'
      }
    }
  };

  displayedColumns = [
    'pathPhoto',
    'firstName',
    'email'
  ];
  
  dataSource = new MatTableDataSource<any>();

  getEmployers() {
    this.dataSource.data = [];

    this.employeeService.getAll().subscribe(colaboradores => {
      this.employees = colaboradores;
      this.dataSource.data = this.employees;
    });
  }
}
