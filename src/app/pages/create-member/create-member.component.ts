import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';
import { Member } from '../../models/member';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})

export class CreateMemberComponent implements OnInit {

  newMemberForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private memberService: MemberService,
    private router: Router) { }

  ngOnInit(): void {
    this.newMemberForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      codeDep: ['', [Validators.required]]
    });
  }

  onSubmitForm() {
    console.log(this.newMemberForm.value);
    const newMember = new Member(
      this.newMemberForm.value.firstName,
      this.newMemberForm.value.lastName,
      this.newMemberForm.value.codeDep
    );
    console.log(newMember);

    this.memberService.createNewMember(newMember).subscribe(() => {
      console.log("Le membre a été créé !!!");
      this.router.navigateByUrl('/confirm-create-user');
    });
  }

}