import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComparacaoComponent } from './employee-comparacao.component';

describe('EmployeeComparacaoComponent', () => {
  let component: EmployeeComparacaoComponent;
  let fixture: ComponentFixture<EmployeeComparacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeComparacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComparacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
