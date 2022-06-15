export class Member {
    id?: number;
    firstName: string;
    surname: string;
    codeDep: number;
    type: any;
    task: any;

    constructor(paramFirstName: string, paramSurname: string, paramCodeDep: number, paramTypeMember: any, paramTaskMember: any) {
        this.firstName = paramFirstName;
        this.surname = paramSurname;
        this.codeDep = paramCodeDep;
        this.type = paramTypeMember;
        this.task = paramTaskMember;
    }

}