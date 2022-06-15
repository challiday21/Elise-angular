import { Component, OnInit, Type } from '@angular/core';
import { Member } from 'src/app/models/member';
// import { MemberType } from 'src/app/models/memberType';
import { MemberService } from 'src/app/services/member.service';
// import { TypeService } from 'src/app/services/memberType.service';

@Component({
  selector: 'app-page-benevoles',
  templateUrl: './page-benevoles.component.html',
  styleUrls: ['./page-benevoles.component.css']
})


export class PageBenevolesComponent implements OnInit {

  public listMembers!: any[];
  // public listTypes!: any[];

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {

    this.memberService.getAllMembers().subscribe((resp) => {
      console.log(resp);
      this.listMembers = resp;
    })

  }

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