import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnsubscribeOnDestroyAdapter } from '../../../shared/UnsubscribeOnDestroyAdapter';
import { ContactsService } from '../../contacts/contacts.service';
import { EmployeeService } from 'src/app/core/service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EChartOption } from 'echarts';
import { FormControl, FormGroup } from '@angular/forms';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { EmployeeAttributeService } from 'src/app/core/service/employee.attribute.service';
import { AttributeService } from 'src/app/core/service/attribute.service';
import { EmployeeAttribute } from 'src/app/core/models/employee-attribute.model';
import { AttributeTypeService } from 'src/app/core/service/attibute.type.service';
import { AttributeCategoryService } from 'src/app/core/service/attribute.category.service';
import { TestComponentRenderer } from '@angular/core/testing';
import { Attribute } from 'src/app/core/models/attribute.model';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeRoleService } from 'src/app/core/service/employee.role.service';
import { EmployeeRole } from 'src/app/core/models/employee-role.model';
import { NotifierService } from 'angular-notifier';

@Component({
    selector: 'app-employee-detalhes',
    templateUrl: './employee-detalhes.component.html',
    styleUrls: ['./employee-detalhes.component.scss']
})

export class EmployeeDetalhesComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
    @ViewChild(DatatableComponent, { static: false }) table2: DatatableComponent;

    private readonly notifier: NotifierService;

    /* Pie Chart */
    pieChart: EChartOption = {
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
        public employeeRoleService: EmployeeRoleService,
        public employeeAttributeService: EmployeeAttributeService,
        public attributeService: AttributeService,
        public attributeTypeService: AttributeTypeService,
        public attributeCategoryService: AttributeCategoryService,
        private snackBar: MatSnackBar,
        private route: ActivatedRoute,
        private notifierService: NotifierService) {
        super();
        this.notifier = notifierService;
    }
    employeelId: string;

    newScoreForm: FormGroup;
    controlNewScoreCategories: FormControl;
    controlNewScoreTypes: FormControl;
    controlNewScoreAttributes: FormControl;
    controlNewScoreValue: FormControl;

    newScoreAttributeCategories: any[];
    newScoreAttributeTypes: any[];
    newScoreAttributes: any[];
    newScoreValues: any[];

    employeeDisplay: any = {};
    employee: Employee = new Employee();
    employeeRoles: EmployeeRole[];

    listaEmployeeAttribute: EmployeeAttribute[];
    attributes: Attribute[];
    listaEmployeeAttributeDiff: string[] = [];

    tableContent: any[] = [];

    attributeCategories = new FormControl();
    // attributeCategoryList: any[] = [];

    // attributeTypes = new FormControl();
    // attributeTypeList: any[] = [];

    filtersTypes: any[] = [];
    filtersCategories: any[] = [];

    tb2columns = [
        { prop: 'attributeName', name: 'Attibute' },
        { prop: 'score', name: 'Score' },
        { prop: 'createdAt', name: 'Evaluation Date' }
    ];
    tb2data = [];
    tb2filteredData = [];

    ngOnInit() {
        this.controlNewScoreCategories = new FormControl();
        this.controlNewScoreTypes = new FormControl();
        this.controlNewScoreAttributes = new FormControl();
        this.controlNewScoreValue = new FormControl();

        this.employeelId = this.route.snapshot.paramMap.get('id');

        this.tb2fetch((data) => {
            this.tb2data = data;
            this.tb2filteredData = data;
        });
        this.getEmployeeRoles(this.employeelId);


        this.getEmployeeAttribute(this.employeelId);
        // this.getattributeTypeList();
        // this.getattributeCategoryList();
    }

    getEmployeeData(id: string) {
        this.employeeService.getById(id).subscribe(response => {
            this.employee = response;

            let employeeRole = "";
            this.employeeRoles.forEach(element => {
                if (this.employee.employeeRoleId === element.id) {
                    employeeRole = element.description;
                }
            });

            this.employeeDisplay = {
                firstName: this.employee.firstName,
                email: this.employee.email,
                photoUrl: this.employee.photoUrl,
                role: employeeRole
            };
        });
    }

    getEmployeeRoles(id: string) {
        this.employeeRoleService.getAll().subscribe(response => {
            this.getEmployeeData(id);
            this.employeeRoles = response;
        });
    }

    getEmployeeAttribute(id: string) {
        this.employeeAttributeService.getByEmployeeId(id).subscribe(response => {
            this.listaEmployeeAttribute = response;
            this.getAllAttributes();
        });
    }

    filterSelect(event) {
        if (event.value.length > 0) {
            const tableContentFiltered = [];

            this.tableContent.forEach(element => {
                if (event.value.includes(element.attributeName)) {
                    tableContentFiltered.push(element);
                }
            });

            this.tb2data = tableContentFiltered;
        }
        else {
            this.populateTb2();
        }
    }

    saveNewScore(modalNewScore) {
        this.newScoreForm = new FormGroup({
            controlNewScoreCategories: new FormControl(),
            controlNewScoreTypes: new FormControl(),
            controlNewScoreAttributes: new FormControl(),
            controlNewScoreValue: new FormControl()
        });

        this.attributeCategoryService.getAll().subscribe(response => {
            this.newScoreAttributeCategories = response;
        });

        const dialogRef = this.dialog.open(modalNewScore, {
            width: '880px',
        });
    }

    filterSelectedCategoryNewScore(event) {
        this.newScoreAttributeTypes = [];
        this.newScoreAttributes = [];
        this.newScoreValues = [];
        this.attributeTypeService.getByAttributeCategoryId(event.value.id).subscribe(response => {
            this.newScoreAttributeTypes = response;
        });
    }

    filterSelectedTypeNewScore(event) {
        this.newScoreAttributes = [];
        this.newScoreValues = [];
        this.attributeService.getByAttributeTypeId(event.value.id).subscribe(response => {
            this.newScoreAttributes = response;
        });
    }


    filterSelectedAttributeNewScore(event) {
        const scoreHelper = event.value.scoreHelper.split(";");
        const allowedScores = event.value.allowedScores.split(";");

        const newScoreValuesMapped = [];

        allowedScores.forEach((allowedScoresValue, index) => {
            const scoreHelperValue = scoreHelper[index];

            newScoreValuesMapped.push({
                score: allowedScoresValue,
                description: scoreHelperValue
            });
        });

        this.newScoreValues = newScoreValuesMapped;
    }

    onSubmit() {
        if (this.newScoreForm.valid && this.newScoreForm.value != null) {
            const payload = {
                employeeId: this.employeelId,
                attributeId: this.newScoreForm.value.controlNewScoreAttributes.id,
                score: parseInt(this.newScoreForm.value.controlNewScoreValue.score, 10),
            };

            this.employeeAttributeService.postSaveEmployeeAttribute(payload).subscribe(response => {
                this.notifier.notify('success', 'Score successfully saved!');
                this.populateTb2();
            },
            (err) => {
              this.notifier.notify('error', `There was an error while saving the new score.`);
            });

            this.dialog.closeAll();
        }
    }

    // getattributeTypeList() {
    //     this.attributeTypeService.getAll().subscribe(
    //         response => {
    //             this.attributeTypeList = response;
    //             // console.log(response);
    //         },
    //         error => {
    //             console.log(error);
    //         }
    //     );
    // }

    // getattributeCategoryList() {
    //     this.attributeCategoryService.getAll().subscribe(
    //         response => {
    //             this.attributeCategoryList = response;
    //             // console.log(response);
    //         },
    //         error => {
    //             console.log(error);
    //         }
    //     );
    // }

    getAllAttributes() {
        this.attributeService.getAll().subscribe(
            response => {
                this.attributes = response;
                this.populateTb2();
            },
            error => {
                console.log(error);
            }
        );
    }


    refresh() {
    }

    populateTb2() {
        this.tableContent = [];
        this.listaEmployeeAttributeDiff = [];

        this.listaEmployeeAttribute.forEach(element => {
            this.attributes.forEach(attribute => {
                if (attribute.id === element.attributeId) {
                    this.listaEmployeeAttributeDiff.push(attribute.description);
                    this.tableContent.push({
                        attributeId: element.attributeId,
                        attributeName: attribute.description,
                        createdAt: element.createdAt,
                        employeeId: element.employeeId,
                        id: element.id,
                        score: element.score
                    });
                }
            });
        });

        this.listaEmployeeAttributeDiff = this.listaEmployeeAttributeDiff.filter((item, pos) => {
            return this.listaEmployeeAttributeDiff.indexOf(item) === pos;
        });

        this.tb2data = this.tableContent;
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
