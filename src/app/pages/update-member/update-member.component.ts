import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {
  updateMemberForm: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      console.log(param);
      this.memberService.getMemberById(param['id-country']).subscribe((member: Member) => {
        console.log(member);
        this.updateMemberForm = this.fb.group({
          firstname: [member.firstName, Validators.required],
          lastname: [member.lastName, Validators.required],
          email: [member.email, Validators.required]
        })
      })
    })
  }
}