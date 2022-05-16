import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private urlApi: string;

  constructor(private http: HttpClient) {
    // this.urlApi = 'https://test-node-jb.herokuapp.com';
    this.urlApi = 'http://localhost:8080';
  }

  getAllMembers(): Observable<Member[]> {
    const token = localStorage.getItem("token");

    return this.http.get<Member[]>(`${this.urlApi}/api/member`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  createNewMember(newMember: Member) {
    const token = localStorage.getItem("token");

    return this.http.post(
      '${this.urlApi}/api/country',
      newMember,
      { headers: { Autorization: 'Bearer ${token}' } }
    )
  }

  getMemberById(memberId: string): Observable<Member> {
    const token = localStorage.getItem("token");

    return this.http.get<Member>('${this.urlApi}/api/member/${}',)
    { headers: Authorization: 'Bearer ${token}' }
  }

  updateMember(member: Member): Observable<any> {
    const token = localStorage.getItem("token");

    const body = {
      firstname: member.firstName,
      lastname: member.lastName,
      email: member.email
    }
    return this.http.put<any>('url', body, { headers: { Authorization: 'Bearer ${token}' } })
  }




}