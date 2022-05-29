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
  router: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      console.log(param);
      this.memberService.getMemberById(param['id-member']).subscribe((member: Member) => {
        console.log(member);
        this.updateMemberForm = this.fb.group({
          firstName: [member.firstName, Validators.required],
          surname: [member.surname, Validators.required],
          codeDep: [member.codeDep, Validators.required]
        })
      })
    })
  }

  onSubmitForm() {
    console.log(this.updateMemberForm.value);
    const updateMember = new Member(
      this.updateMemberForm.value.firstName,
      this.updateMemberForm.value.surname,
      this.updateMemberForm.value.codeDep
    );
    console.log(updateMember);

    this.memberService.createNewMember(updateMember).subscribe(() => {
      console.log("Le membre a été créé !!!");
      // this.router.navigateByUrl('/');
    });

  }
}