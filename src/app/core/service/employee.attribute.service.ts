import { HttpClient } from '@angular/common/http';
import { Attribute } from '@angular/compiler';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeAttribute } from '../models/employee-attribute.model';
import { ProcessEmployeeAttribute } from '../models/process-employee-attributes.model';
import { ProcessRoleAttribute } from '../models/process-role-attributes';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAttributeService {

  readonly baseUrl: string;

  constructor(
    @Inject('BASE_URL_CHALLENGE') baseUrl: string,
    private http: HttpClient) {
    this.baseUrl = baseUrl;
  }

  getByEmployeeId(employeeId): Observable<EmployeeAttribute[]> {
    return this.http.get<EmployeeAttribute[]>(`${this.baseUrl}/EmployeeAttribute/employee/${employeeId}`);
  }

  getByEmployeeProcessAttributes(body): Observable<ProcessEmployeeAttribute> {
    return this.http.post<ProcessEmployeeAttribute>(`${this.baseUrl}/EmployeeAttribute/process-employee-attributes`, body);
  }

  postSaveEmployeeAttribute(body): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/EmployeeAttribute`, body);
  }

  getByEmployeeRoleProcessAttributes(body): Observable<ProcessRoleAttribute> {
    return this.http.post<ProcessRoleAttribute>(`${this.baseUrl}/EmployeeAttribute/process-employee-role-attributes`, body);
  }
}
