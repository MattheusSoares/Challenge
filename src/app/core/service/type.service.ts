import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { EmployeeType } from '../models/type.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  readonly baseUrl: string;

  constructor(
    @Inject('BASE_URL_CHALLENGE') baseUrl: string,
    private http: HttpClient) {
    this.baseUrl = baseUrl;
  }

  getAllArray(categoryArray: []): Observable<EmployeeType[]> {
    let params = new HttpParams(); 
    categoryArray.forEach(item =>{
      params = params.append('attributeCategoryIds', item);
    })
    return this.http.get<EmployeeType[]>(`${this.baseUrl}/AttributeType/attribute-categories`, {params});
  }
}