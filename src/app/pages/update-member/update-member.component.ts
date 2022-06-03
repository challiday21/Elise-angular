import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MemberUpdate } from 'src/app/models/memberUpdate';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {
  updateMemberForm: any;
  router: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
    private fb: FormBuilder) { }

    ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      console.log(param);
      this.memberService.getMemberById(param['_id']).subscribe((memberUpdate: MemberUpdate) => {
        console.log(memberUpdate._id);
        console.log(memberUpdate);
        this.updateMemberForm = this.fb.group({
          firstName: [memberUpdate.firstName, Validators.required],
          surname: [memberUpdate.surname, Validators.required],
          codeDep: [memberUpdate.codeDep, Validators.required],
          _id: [memberUpdate._id]
        })
      })
    })
  }

  onSubmitForm() {
    const memberToUpdate = this.updateMemberForm.value;
    console.log(this.updateMemberForm.value);
    const updateMember = new MemberUpdate(
      this.updateMemberForm.value._id,
      this.updateMemberForm.value.firstName,
      this.updateMemberForm.value.surname,
      this.updateMemberForm.value.codeDep
    );
    console.log(updateMember);

  }
}