import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private urlApi: string;
  private listMembers: any;

  constructor(private http: HttpClient) {
    // this.urlApi = 'https://test-node-jb.herokuapp.com';
    this.urlApi = 'http://localhost:8080';
  }

  getAllMembers(): Observable<Member[]> {
    const token = localStorage.getItem("token");

    return this.http.get<Member[]>(`${this.urlApi}/members/names`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  createNewMember(newMember: Member) {
    const token = localStorage.getItem("token");

    return this.http.post(
      `${this.urlApi}/members/create`,
      newMember,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  getMemberById(memberId: string): Observable<Member> {
    const token = localStorage.getItem("token");

    // return this.http.get<Member>(`${this.urlApi}/member/${memberId}`,
    return this.http.get<Member>(`${this.urlApi}/members/1`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  updateMember(member: Member): Observable<any> {
    const token = localStorage.getItem("token");

    const body = {
      firstName: member.firstName,
      surname: member.surname,
      codeDep: member.codeDep
    }

    // return this.http.put<any>(`${this.urlApi}/member/${member}`,
    return this.http.put<any>(`${this.urlApi}/member/${member}`,
      body, 
      {headers : { Authorization : `Bearer ${token}`}}
    )
  }

  deleteMember(memberId: string) {
    const token = localStorage.getItem("token");

    return this.http.delete(`${this.urlApi}/member/${memberId}`,
      { headers: { Authorization: `Bearer ${token}` } })

  }

}