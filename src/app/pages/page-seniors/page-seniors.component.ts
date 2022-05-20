import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-page-seniors',
  templateUrl: './page-seniors.component.html',
  styleUrls: ['./page-seniors.component.css']
})
export class PageSeniorsComponent implements OnInit {

  public listMembers!: Member[];

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {

    this.memberService.getAllMembers().subscribe((resp) => {
      console.log(resp);
      this.listMembers = resp;
    })
  }

  onClickDeleteCountry(memberId: string | undefined) {
    console.log(memberId);
    if (memberId) {
      this.memberService.deleteMember(memberId).subscribe({
        next: (resp) => {
          console.log(resp);

          const deleteMember = this.memberService.getMemberById(memberId);

          this.listMembers = this.listMembers.filter(member => member.id !== memberId);
        },
        error: (err) => { console.error(err) }
      })
    }
  }

}