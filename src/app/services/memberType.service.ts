import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberType } from '../models/memberType';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private urlApi: string;
  private listTypes: any;
  typeId: any;

  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:8080';
  }

  getAllTypes(): Observable<MemberType[]> {
    const token = localStorage.getItem("token");

    return this.http.get<MemberType[]>(`${this.urlApi}/types/names`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

}
