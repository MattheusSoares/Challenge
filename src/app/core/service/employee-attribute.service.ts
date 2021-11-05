import { HttpClient } from '@angular/common/http';
import { Attribute } from '@angular/compiler';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeAttribute } from '../models/employee-attribute.model';
import { ProcessEmployeeAttribute } from '../models/process-employee-attribubtes.model';
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

  getByEmployeeProcessAttributes(body: any): Observable<ProcessEmployeeAttribute> {
    console.log(body)
    console.log("id: ", body.employeeId)
    console.log("id: ", body.attributeIds)
    return this.http.post<ProcessEmployeeAttribute>(`${this.baseUrl}/EmployeeAttribute/process-employee-attributes`, {body: body})
  }

}