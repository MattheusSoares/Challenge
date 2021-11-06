import { HttpClient } from '@angular/common/http';
import { Attribute } from '@angular/compiler';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AttributeCategoryService {

    readonly baseUrl: string;

    constructor(
        @Inject('BASE_URL_CHALLENGE') baseUrl: string,
        private http: HttpClient) {
        this.baseUrl = baseUrl;
    }

    getAll(): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/AttributeCategory`);
    }

}