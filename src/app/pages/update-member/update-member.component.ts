import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { MemberCreate } from 'src/app/models/memberCreate';
import { MemberType } from 'src/app/models/memberType';
import { MemberUpdate } from 'src/app/models/memberUpdate';
import { MemberService } from 'src/app/services/member.service';
import { TypeService } from 'src/app/services/memberType.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {
  updateMemberForm!: FormGroup;
  // router: any;
  typeService: TypeService;
  taskService: TaskService;
  type!: MemberType;
  memberUpdate!: MemberUpdate;
  listTypes!: any[];
  listTasks!: any[];
  listMembers!: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService, typeService: TypeService, taskService: TaskService,
    private fb: FormBuilder,
    private router: Router) {
    this.typeService = typeService;
    this.taskService = taskService;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      console.log(param);
      // this.memberService.getMemberById('1').subscribe((memberUpdate: MemberUpdate) => {
      this.memberService.getMemberById(param['id-update-member']).subscribe((memberUpdate: Member) => {
        console.log("Member id is ", memberUpdate.id);
        console.log(memberUpdate);
        this.updateMemberForm = this.fb.group({
          firstName: [memberUpdate.firstName, Validators.required],
          surname: [memberUpdate.surname, Validators.required],
          codeDep: [memberUpdate.codeDep, Validators.required],
          memberType: [memberUpdate.type.id, Validators.required],
          memberTask: [memberUpdate.task.id, Validators.required],
          id: [memberUpdate.id]
        })
      })
    })

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
    const updateMember = this.updateMemberForm.value;
    this.memberUpdate = this.updateMemberForm.value;

    console.log(this.memberUpdate);

    this.memberService.updateMember(updateMember).subscribe((resp) => {
      console.log("Le membre a été modifié !!!");
      this.router.navigateByUrl('/confirm-update');
    });

  }
}