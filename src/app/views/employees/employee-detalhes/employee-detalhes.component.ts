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

    attributeSelected: string;

    newScoreForm: FormGroup;
    controlNewScoreCategories: FormControl;
    controlNewScoreTypes: FormControl;
    controlNewScoreAttributes: FormControl;
    controlNewScoreValue: FormControl;

    newScoreAttributeCategories: any[];
    newScoreAttributeTypes: any[];
    newScoreAttributes: any[];
    newScoreValues: any[];

    scoreLegend: any[] = [
        "1-Basic",
        "3-Basic/Medium",
        "5-Medium",
        "7-Medium/Advanced",
        "10-Advanced"
    ]

    employeeDisplay: any = {};
    employee: Employee = new Employee();
    employeeRoles: EmployeeRole[];

    listaEmployeeAttribute: EmployeeAttribute[];
    attributes: Attribute[];
    listaEmployeeAttributeDiff: string[] = [];
    listaEmployeeAttributeChart: any[] = [];

    tableContent: any[] = [];
    chartContent: any[] = [];

    chartLine: EChartOption;
    chartGaugeAll: EChartOption;
    chartGaugeLast5: EChartOption;
    chartGaugeLast10: EChartOption;

    attributeCategories = new FormControl();
    attributeCategoriesCharts = new FormControl();
    // attributeCategoryList: any[] = [];

    // attributeTypes = new FormControl();
    // attributeTypeList: any[] = [];

    filtersTypes: any[] = [];
    filtersCategories: any[] = [];

    tb2columns = [
        { prop: 'attributeName', name: 'Attibute', width: 150 },
        { prop: 'score', name: 'Score', width: 50 },
        { prop: 'dateDisplay', name: 'Evaluation Date', width: 100 }
    ];
    tb2data = [];
    tb2filteredData = [];

    chartData = [];
    chartDataFiltered = [];

    ngOnInit() {
        this.controlNewScoreCategories = new FormControl();
        this.controlNewScoreTypes = new FormControl();
        this.controlNewScoreAttributes = new FormControl();
        this.controlNewScoreValue = new FormControl();

        this.employeelId = this.route.snapshot.paramMap.get('id');
        this.getEmployeeRoles(this.employeelId);

        this.getEmployeeAttribute(this.employeelId);
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

    filterSelectChart(event) {
        this.attributeSelected = event.value;

        this.employeeAttributeService.getByEmployeeProcessAttributes({
            employeeId: this.employeelId,
            attributeIds: [
                event.value.attributeId
            ]
        }).subscribe(result => {

            this.chartLine = this.populateLineChart(result.processedEmployeeAttributes[0].rawData);

            this.chartGaugeAll = this.populateGaugeChart(
                Math.round(result.processedEmployeeAttributes[0].averageScore * 100) / 100
            );
            this.chartGaugeLast5 = this.populateGaugeChart(
                Math.round(result.processedEmployeeAttributes[0].averageScoreLast5 * 100) / 100
            );
            this.chartGaugeLast10 = this.populateGaugeChart(
                Math.round(result.processedEmployeeAttributes[0].averageScoreLast10 * 100) / 100
            );
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

    getAllAttributes() {
        this.attributeService.getAll().subscribe(
            response => {
                this.attributes = response;
                this.populateTb2();
                this.populateChartData();
            },
            error => {
                console.log(error);
            }
        );
    }

    populateChartData() {
        this.chartContent = [];
        const listaEmployeeAttributeChartAlt = [];

        this.listaEmployeeAttribute.forEach(element => {
            this.attributes.forEach(attribute => {
                if (attribute.id === element.attributeId) {
                    listaEmployeeAttributeChartAlt.push({
                        attributeId: element.attributeId,
                        attributeName: attribute.description,
                        createdAt: element.createdAt,
                        dateDisplay: this.formatDate(element.createdAt),
                        employeeId: element.employeeId,
                        id: element.id,
                    });
                }
            });
        });

        this.listaEmployeeAttributeChart = listaEmployeeAttributeChartAlt.filter((e, i) => {
            return listaEmployeeAttributeChartAlt.findIndex((x) => {
                return x.attributeName === e.attributeName && x.attributeId === e.attributeId;
            }) === i;
        });

        this.chartData = this.chartContent;
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
                        dateDisplay: this.formatDate(element.createdAt),
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
        this.attributeCategories.setValue(this.listaEmployeeAttributeDiff);
        this.tb2data = this.tableContent;
    }

    formatDate(value) {
        const date = new Date(value);
        const day = date.toLocaleString('default', { day: '2-digit' });
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.toLocaleString('default', { year: 'numeric' });
        return day + ' de ' + (month.charAt(0).toUpperCase() + month.slice(1)) + ' de ' + year;
    }


    populateLineChart(chartData): EChartOption {
        const chartOptions: EChartOption = {
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: chartData.map(x => {
                    return new Date(x.createAt).toLocaleDateString('pt-BR', {
                        day: 'numeric', month: 'short', year: 'numeric'
                    });
                })
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: chartData.map(x => {
                        return x.score;
                    }),
                    type: 'line',
                    smooth: true
                }
            ]
        };

        return chartOptions;
    }


    populateGaugeChart(chartData): EChartOption {
        const chartOptions: EChartOption = {
            series: [
                {
                    type: 'gauge',
                    startAngle: 180,
                    endAngle: 0,
                    min: 0,
                    max: 10,
                    splitNumber: 8,
                    axisLine: {
                        lineStyle: {
                            width: 6,
                            color: [
                                [0.25, '#FF6E76'],
                                [0.5, '#FDDD60'],
                                [0.75, '#58D9F9'],
                                [1, '#7CFFB2']
                            ]
                        }
                    },
                    pointer: {
                        length: '70%',
                        width: 5,
                        itemStyle: {
                            color: 'auto'
                        }
                    },
                    axisTick: {
                        length: 12,
                        lineStyle: {
                            color: 'auto',
                            width: 2
                        }
                    },
                    splitLine: {
                        length: 20,
                        lineStyle: {
                            color: 'auto',
                            width: 5
                        }
                    },
                    axisLabel: {
                        color: '#464646',
                        fontSize: 20,
                        distance: -60,
                        formatter: () => {
                            return '';
                        }
                    },
                    detail: {
                        fontSize: 50,
                        offsetCenter: [0, '40%'],
                        valueAnimation: true,
                        color: 'auto'
                    },
                    data: [
                        {
                            value: chartData,
                        }
                    ]
                }
            ]
        };

        return chartOptions;
    }

}
