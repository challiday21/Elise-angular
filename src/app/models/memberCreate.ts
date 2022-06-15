export class MemberCreate {

    firstName: string;
    surname: string;
    codeDep: number;
    memberType: number;
    memberTask: number;

    constructor(paramFirstName: string, paramSurname: string, paramCodeDep: number, paramTypeMember: number, paramTaskMember: number) {
        this.firstName = paramFirstName;
        this.surname = paramSurname;
        this.codeDep = paramCodeDep;
        this.memberType = paramTypeMember;
        this.memberTask = paramTaskMember;
    }

}