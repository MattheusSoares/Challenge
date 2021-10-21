import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnsubscribeOnDestroyAdapter } from '../../../shared/UnsubscribeOnDestroyAdapter';
import { ContactsService } from '../../contacts/contacts.service';
import { EmployeeService } from 'src/app/core/service/Employee.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-employee-detalhes',
    templateUrl: './employee-detalhes.component.html',
    styleUrls: ['./employee-detalhes.component.scss']
})

export class EmployeeDetalhesComponent extends UnsubscribeOnDestroyAdapter implements OnInit {

    constructor(
        public httpClient: HttpClient,
        public dialog: MatDialog,
        public contactsService: ContactsService,
        public employeeService: EmployeeService,
        private snackBar: MatSnackBar,
        private route: Router) {
        super();
    }

    ngOnInit() {
    }

    refresh() {
    }

}