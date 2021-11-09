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
import { EmployeeAttributeService } from 'src/app/core/service/employee-attribute.service';
import { AttributeService } from 'src/app/core/service/attribute.service';
import { EmployeeAttribute } from 'src/app/core/models/employee-attribute.model';
import { AttributeTypeService } from 'src/app/core/service/attibute.type.service';
import { AttributeCategoryService } from 'src/app/core/service/attribute.category.service';
import { TestComponentRenderer } from '@angular/core/testing';
import { Attribute } from 'src/app/core/models/attribute.model';

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
        public employeeAttributeService: EmployeeAttributeService,
        public attributeService: AttributeService,
        public attributeTypeService: AttributeTypeService,
        public attributeCategoryService: AttributeCategoryService,
        private snackBar: MatSnackBar,
        private route: ActivatedRoute) {
        super();
    }

    listaEmployeeAttribute: EmployeeAttribute[];
    attributes: Attribute[];

    attributeCategories = new FormControl();
    attributeCategoryList: string[] = [];

    attributeTypes = new FormControl();
    attributeTypeList: string[] = [];

    tb2columns = [
        { prop : 'attributeName', name: 'Atributo' },
        { prop : 'score', name: 'Avaliação' },
        { prop : 'createdAt', name: 'Data da avaliação' }
    ];
    tb2data = [];
    tb2filteredData = [];

    ngOnInit() {
        const employeelId = this.route.snapshot.paramMap.get('id');
        this.tb2fetch((data) => {
            this.tb2data = data;
            this.tb2filteredData = data;
        });
        this.getEmployeeAttribute(employeelId);
        this.getattributeTypeList();
        this.getattributeCategoryList();
    }

    getEmployeeAttribute(id: string){
        this.employeeAttributeService.getByEmployeeId(id).subscribe(response => {
            this.listaEmployeeAttribute = response;
            console.log(this.listaEmployeeAttribute);
            this.getAllAttributes();
        });
    }

    getattributeTypeList(){
        this.attributeTypeService.getAll().subscribe(
            response =>{
                this.attributeTypeList = response.map(attributeType => attributeType.description)
                console.log(response)
            },
            error => {
                console.log(error)
            }
        )
    }

    getattributeCategoryList(){
        this.attributeCategoryService.getAll().subscribe(
            response =>{
                this.attributeCategoryList = response.map(attributeCategory => attributeCategory.description)
                console.log(response)
            },
            error => {
                console.log(error)
            }
        )
    }

    getAllAttributes(){
        this.attributeService.getAll().subscribe(
            response =>{
                this.attributes = response
                console.log(response)
                this.populateTb2();

            },
            error => {
                console.log(error)
            }
        )
    }

    refresh() {
    }

    populateTb2(){
        let list = [];
        this.listaEmployeeAttribute.forEach(element => {
            this.attributes.forEach(e =>{
                if(e.id === element.attributeId){
                    list.push({
                        attributeId: element.attributeId,
                        attributeName: e.description,
                        createdAt: element.createdAt,
                        employeeId: element.employeeId,
                        id: element.id,
                        score: element.score
                    })
                }
            })
        })

        this.tb2data = list;
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
        // this.tb2data = this.tb2filteredData.filter(function (item) {
        //     // iterate through each row's column data
        //     for (let i = 0; i < colsAmt; i++) {
        //         // check for a match
        //         if (
        //             item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 ||
        //             !val
        //         ) {
        //             // found match, return true to add to result set
        //             return true;
        //         }
        //     }
        // });

        // whenever the filter changes, always go back to the first page
        this.table2.offset = 0;
    }

}
