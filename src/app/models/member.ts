export class Member {

    firstName: string;
    surname: string;
    codeDep: number;
    typeMember: string;
    taskMember: string;

    constructor(paramFirstName: string, paramSurname: string, paramCodeDep: number, paramTypeMember: string, paramTaskMember: string) {
        this.firstName = paramFirstName;
        this.surname = paramSurname;
        this.codeDep = paramCodeDep;
        this.typeMember = paramTypeMember;
        this.taskMember = paramTaskMember;
    }

}