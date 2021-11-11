import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeRole } from '../models/employee-role.model';

@Injectable({
    providedIn: 'root'
})
export class EmployeeRoleService {

    readonly baseUrl: string;

    constructor(
        @Inject('BASE_URL_CHALLENGE') baseUrl: string,
        private http: HttpClient) {
        this.baseUrl = baseUrl;
    }

    getAll(): Observable<EmployeeRole[]> {
        return this.http.get<EmployeeRole[]>(`${this.baseUrl}/EmployeeRole`);
    }
}
