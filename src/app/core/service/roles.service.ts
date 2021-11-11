import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  readonly baseUrl: string;

  constructor(
    @Inject('BASE_URL_CHALLENGE') baseUrl: string,
    private http: HttpClient) {
    this.baseUrl = baseUrl;
  }

  getAll(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.baseUrl}/EmployeeRole`);
  }



}
