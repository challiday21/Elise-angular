import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member';
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

  createNewMember(newMember: Member) {
    const token = localStorage.getItem("token");

    return this.http.post(
      `${this.urlApi}/members/create`,
      newMember,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  getMemberById(memberId: string): Observable<MemberUpdate> {
    const token = localStorage.getItem("token");
    console.log(memberId);
    return this.http.get<MemberUpdate>(`${this.urlApi}/members/${memberId}`,
      // return this.http.get<Member>(`${this.urlApi}/members/${this.memberId}`),
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  updateMember(memberUpdate: MemberUpdate): Observable<any> {
    const token = localStorage.getItem("token");

    const body = {
      _id: memberUpdate._id,
      firstName: memberUpdate.firstName,
      surname: memberUpdate.surname,
      codeDep: memberUpdate.codeDep
    }
    console.log("Checking memberUpdate._id");
    console.log(memberUpdate._id);
    return this.http.put<any>(`${this.urlApi}/members/${memberUpdate._id}`,
      body
    )
  }

  deleteMember(memberId: string) {
    const token = localStorage.getItem("token");

    return this.http.delete(`${this.urlApi}/member/${memberId}`,
      { headers: { Authorization: `Bearer ${token}` } })

  }

}