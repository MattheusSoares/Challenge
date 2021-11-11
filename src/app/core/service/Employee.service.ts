import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly baseUrl: string;

  constructor(
    @Inject('BASE_URL_CHALLENGE') baseUrl: string,
    private http: HttpClient) {
    this.baseUrl = baseUrl;
  }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/Employee`);
  }

  getById(id){

  }
}
