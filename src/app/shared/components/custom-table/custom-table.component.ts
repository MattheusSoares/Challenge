import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fromEvent } from 'rxjs';
import { UnsubscribeOnDestroyAdapter } from '../../UnsubscribeOnDestroyAdapter';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ListColumn } from 'src/app/core/models/ListColumn';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0px' })),
      state('expanded', style({ height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class CustomTableComponent extends UnsubscribeOnDestroyAdapter implements OnInit {

  @Input() showAddButton: boolean = true;
  @Input() dataSource: MatTableDataSource<any>;
  @Input() isTblLoading: boolean;
  @Input() columns: ListColumn[];

  @Output() addNew: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() enable: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('filter', { static: true }) filter: ElementRef;

  constructor(public dialog: MatDialog) {
    super();
  }
  
  ngOnInit(): void {
    this.isTblLoading = true;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.subs.sink = fromEvent(this.filter.nativeElement, 'keyup').subscribe(
      () => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      }
    );
  }

  get displayedColumns() {
    return this.columns.filter(o => o.visible).map(o => o.property);
  }

  add() {
    this.addNew.emit();
  }

  editCall(event) {
    this.edit.emit(event);
  }

  cancelCall(event) {
    this.cancel.emit(event);
  }

  deleteItem(event) {
    this.delete.emit(event);
  }

  customPaginator() {
    const customPaginatorIntl = new MatPaginatorIntl();

    customPaginatorIntl.itemsPerPageLabel = 'Itens por página';

    return customPaginatorIntl;
  }
}
