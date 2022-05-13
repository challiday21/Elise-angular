import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = 'https://test-node-jb.herokuapp.com';
  }

  getAllMembers() {
    const token = localStorage.getItem("token");

    return this.http.get(`${this.urlApi}/api/member`,
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


}
