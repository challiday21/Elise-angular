export class MemberCreate {

    firstName: string;
    surname: string;
    codeDep: number;
    typeMember: number;
    taskMember: number;

    constructor(paramFirstName: string, paramSurname: string, paramCodeDep: number, paramTypeMember: number, paramTaskMember: number) {
        this.firstName = paramFirstName;
        this.surname = paramSurname;
        this.codeDep = paramCodeDep;
        this.typeMember = paramTypeMember;
        this.taskMember = paramTaskMember;
    }

}