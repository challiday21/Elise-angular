import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MemberUpdate } from 'src/app/models/memberUpdate';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-page-seniors',
  templateUrl: './page-seniors.component.html',
  styleUrls: ['./page-seniors.component.css']
})
export class PageSeniorsComponent implements OnInit {

  public listMembers!: any[];
  public detail!: MemberUpdate;
  router: any;

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {

    this.memberService.getAllMembers().subscribe((resp) => {
      console.log(resp);
      this.listMembers = resp;
    })
  }

  onClickReadMember(memberClicked: MemberUpdate) {
    console.log(memberClicked.firstName);
    this.detail = memberClicked;
  }

  onClickUpdateMember(memberClicked: MemberUpdate) {
    console.log("Updating", memberClicked.firstName);
    this.detail = memberClicked;
    this.router.navigateByUrl('admin');
  }

  /*   onClickUpdateMember(memberUpdate: MemberUpdate) {
      console.log(memberUpdate);
      if (memberUpdate) {
        //this.memberService.updateMember(member).subscribe({
        this.memberService.getMemberById(memberUpdate._id).subscribe({
          //getMemberById
          next: (resp) => {
            console.log(resp);
          }
        })
      };
   */

  onClickDeleteMember(memberId: string | undefined) {
    console.log(memberId);
    if (memberId) {
      this.memberService.deleteMember(memberId).subscribe({
        next: (resp) => {
          console.log(resp);

          const deleteMember = this.memberService.getMemberById(memberId);

          this.listMembers = this.listMembers.filter(member => member._id !== memberId);
        },
        error: (err) => { console.error(err) }
      })
    }
  }
}
