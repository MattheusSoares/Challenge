import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnsubscribeOnDestroyAdapter } from '../../../shared/UnsubscribeOnDestroyAdapter';
import { ContactsService } from '../../contacts/contacts.service';
import { EmployeeService } from 'src/app/core/service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EChartOption } from 'echarts';

@Component({
    selector: 'app-employee-detalhes',
    templateUrl: './employee-detalhes.component.html',
    styleUrls: ['./employee-detalhes.component.scss']
})

export class EmployeeDetalhesComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
    /* Pie Chart */
    pie_chart: EChartOption = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            data: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
            textStyle: {
                color: '#9aa0ac',
                padding: [0, 5, 0, 5]
            }
        },

        series: [
            {
                name: 'Chart Data',
                type: 'pie',
                radius: '55%',
                center: ['50%', '48%'],
                data: [
                    {
                        value: 335,
                        name: 'Data 1'
                    },
                    {
                        value: 310,
                        name: 'Data 2'
                    },
                    {
                        value: 234,
                        name: 'Data 3'
                    },
                    {
                        value: 135,
                        name: 'Data 4'
                    },
                    {
                        value: 548,
                        name: 'Data 5'
                    }
                ]
            }
        ],
        color: ['#575B7A', '#DE725C', '#DFC126', '#72BE81', '#50A5D8']
    };
    constructor(
        public httpClient: HttpClient,
        public dialog: MatDialog,
        public contactsService: ContactsService,
        public employeeService: EmployeeService,
        private snackBar: MatSnackBar,
        private route: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        const employeelId = this.route.snapshot.paramMap.get('id');
        console.log(employeelId);
    }

    refresh() {
    }

}