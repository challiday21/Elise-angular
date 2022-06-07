import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberUpdate } from 'src/app/models/memberUpdate';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {
  updateMemberForm!: FormGroup;
  // router: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      console.log(param);
      // this.memberService.getMemberById('1').subscribe((memberUpdate: MemberUpdate) => {
      this.memberService.getMemberById(param['_id-update-member']).subscribe((memberUpdate: MemberUpdate) => {
        console.log(memberUpdate._id);
        console.log(memberUpdate);
        this.updateMemberForm = this.fb.group({
          firstName: [memberUpdate.firstName, Validators.required],
          surname: [memberUpdate.surname, Validators.required],
          codeDep: [memberUpdate.codeDep, Validators.required],
          typeMember: [memberUpdate.typeMember, Validators.required],
          taskMember: [memberUpdate.taskMember, Validators.required],
          _id: [memberUpdate._id]
        })
      })
    })
  }

  onSubmitForm() {
    const updateMember = this.updateMemberForm.value;

    console.log(this.updateMemberForm.value);

    this.memberService.updateMember(updateMember).subscribe((resp) => {
      console.log("Le membre a été modifié !!!");
      this.router.navigateByUrl('/confirm-new-member');
    });

  }
}