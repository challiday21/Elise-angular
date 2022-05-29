import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-page-benevoles',
  templateUrl: './page-benevoles.component.html',
  styleUrls: ['./page-benevoles.component.css']
})


export class PageBenevolesComponent implements OnInit {

  public listMembers!: Member[];

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {

    this.memberService.getAllMembers().subscribe((resp) => {
      console.log(resp);
      this.listMembers = resp;
    })
  }
}