import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member';
import { MemberCreate } from '../models/memberCreate';
import { MemberUpdate } from '../models/memberUpdate';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private urlApi: string;
  private listMembers: any;
  memberId: any;

  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:8080';
  }

  getAllMembers(): Observable<Member[]> {
    const token = localStorage.getItem("token");

    return this.http.get<Member[]>(`${this.urlApi}/members/names`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  createNewMember(newMember: MemberCreate) {
    const token = localStorage.getItem("token");

    return this.http.post(
      `${this.urlApi}/members/create`,
      newMember,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  getMemberById(memberId: string): Observable<Member> {
    const token = localStorage.getItem("token");
    console.log(memberId);
    return this.http.get<Member>(`${this.urlApi}/members/${memberId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  updateMember(memberUpdate: MemberUpdate): Observable<any> {
    const token = localStorage.getItem("token");

    const body = {
      id: memberUpdate.id,
      firstName: memberUpdate.firstName,
      surname: memberUpdate.surname,
      codeDep: memberUpdate.codeDep,
      memberType: memberUpdate.memberType,
      memberTask: memberUpdate.memberTask
    }
    console.log("Checking memberUpdate.id");
    console.log(memberUpdate);
    return this.http.put<any>(`${this.urlApi}/members`,
      //return this.http.put<any>(`${this.urlApi}/members/1`,
      body
    )
  }

  deleteMember(memberId: string) {
    const token = localStorage.getItem("token");

    return this.http.delete(`${this.urlApi}/members/${memberId}`,
      { headers: { Authorization: `Bearer ${token}` } })

  }

}