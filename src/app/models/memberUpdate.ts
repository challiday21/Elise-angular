export class MemberUpdate {

    id?: string;
    firstName: string;
    surname: string;
    codeDep: number;
    typeMember: number;
    taskMember: number;

    constructor(paramId: string, paramFirstName: string, paramSurname: string, paramCodeDep: number, paramTypeMember: number, paramTaskMember: number) {
        this.id = paramId;
        this.firstName = paramFirstName;
        this.surname = paramSurname;
        this.codeDep = paramCodeDep;
        this.typeMember = paramTypeMember;
        this.taskMember = paramTaskMember;
    }

}