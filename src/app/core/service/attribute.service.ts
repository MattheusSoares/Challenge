import { HttpClient, HttpParams } from '@angular/common/http';
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

  getAllArray(typeArray): Observable<Attribute[]> {
    let params = new HttpParams(); 
    typeArray.forEach(item =>{
      params = params.append('attributeTypeIds', item);
    })
    return this.http.get<Attribute[]>(`${this.baseUrl}/Attribute/attribute-types`, {params});
  }

  getByAttributeTypeId(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Attribute/attribute-type/${id}`);
  }

}
