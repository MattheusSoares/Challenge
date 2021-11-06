import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attribute } from '../models/attribute.model';
@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  readonly baseUrl: string;

  constructor(
    @Inject('BASE_URL_CHALLENGE') baseUrl: string,
    private http: HttpClient) {
    this.baseUrl = baseUrl;
  }

  getAll(): Observable<Attribute[]> {
    return this.http.get<Attribute[]>(`${this.baseUrl}/Attribute`);
  }

}