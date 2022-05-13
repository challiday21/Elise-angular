import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Member } from '../../models/member';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})

export class CreateMemberComponent implements OnInit {

  newMemberForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newMemberForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmitForm() {
    console.log(this.newMemberForm.value);
    const newMember = new Member(
      this.newMemberForm.value.firstName,
      this.newMemberForm.value.lastName,
      this.newMemberForm.value.email
    );
    console.log(newMember);
  }

}