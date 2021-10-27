import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnsubscribeOnDestroyAdapter } from '../../../shared/UnsubscribeOnDestroyAdapter';
import { ContactsService } from '../../contacts/contacts.service';
import { EmployeeService } from 'src/app/core/service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EChartOption } from 'echarts';
import { FormControl } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
    selector: 'app-employee-detalhes',
    templateUrl: './employee-detalhes.component.html',
    styleUrls: ['./employee-detalhes.component.scss']
})

export class EmployeeDetalhesComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
    @ViewChild(DatatableComponent, { static: false }) table2: DatatableComponent;
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

    attributeCategories = new FormControl();
    attributeCategoryList: string[] = [
        'Achievements',
        'Hard Skills',
        'Soft Skills'
    ];

    attributeTypes = new FormControl();
    attributeTypeList: string[] = [
        'Azure Certifications',
        'Backend Development',
        'DevOps Concepts',
        'Mobile Development',
        'AWS Certifications',
        'GCP Certifications',
        'Frontend Development'
    ];

    tb2columns = [
        { name: 'First Name' },
        { name: 'Last Name' },
        { name: 'Address' }
    ];
    tb2data = [];
    tb2filteredData = [];

    ngOnInit() {
        const employeelId = this.route.snapshot.paramMap.get('id');
        this.tb2fetch((data) => {
            this.tb2data = data;
            this.tb2filteredData = data;
        });
    }

    refresh() {
    }

    tb2fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', 'assets/data/ngx-data.json');
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    }

    tb2filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.tb2columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.tb2filteredData[0]);
        // assign filtered matches to the active datatable
        this.tb2data = this.tb2filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (
                    item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 ||
                    !val
                ) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table2.offset = 0;
    }

}