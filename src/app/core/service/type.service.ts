import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { Type } from '../models/type.model';

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

  getAllArray(categoryArray): Observable<Type[]> {
    return this.http.get<Type[]>(`${this.baseUrl}/AttributeType/attribute-categories`, {params: categoryArray});
  }
}