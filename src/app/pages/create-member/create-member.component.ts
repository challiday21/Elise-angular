import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberCreate } from 'src/app/models/memberCreate';
import { MemberType } from 'src/app/models/memberType';
import { MemberService } from 'src/app/services/member.service';
import { TypeService } from 'src/app/services/memberType.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})

export class CreateMemberComponent implements OnInit {

  newMemberForm!: FormGroup;

  submitted = false;
  typeService: TypeService;
  taskService: TaskService;
  memberCreate!: MemberCreate;
  type!: MemberType;
  listMembers!: any[];
  listTypes!: any[];
  listTasks!: any[];

  constructor(
    private fb: FormBuilder,
    private memberService: MemberService, typeService: TypeService, taskService: TaskService,
    private router: Router) {
    this.typeService = typeService;
    this.taskService = taskService;
  }

  ngOnInit(): void {
    this.newMemberForm = this.fb.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      codeDep: ['', [Validators.required]],
      typeMember: ['', [Validators.required]],
      taskMember: ['', [Validators.required]]
    });

    this.typeService.getAllTypes().subscribe((respo: any) => {
      console.log(respo);
      this.listTypes = respo;
    })
    this.taskService.getAllTasks().subscribe((respon: any) => {
      console.log(respon);
      this.listTasks = respon;
    })
  }

  onSubmitForm() {
    console.log(this.newMemberForm.value);
    const newMember = new MemberCreate(
      this.newMemberForm.value.firstName,
      this.newMemberForm.value.surname,
      this.newMemberForm.value.codeDep,
      this.newMemberForm.value.typeMember,
      this.newMemberForm.value.taskMember
    );
    console.log(newMember);

    this.memberService.createNewMember(newMember).subscribe(() => {
      console.log("Le membre a ??t?? cr???? !!!");
      this.router.navigateByUrl('/confirm-new-member');
    });

  }

}