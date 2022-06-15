export class MemberUpdate {

    id?: number;
    firstName: string;
    surname: string;
    codeDep: number;
    memberType: number;
    memberTask: number;

    constructor(paramId: number, paramFirstName: string, paramSurname: string, paramCodeDep: number, paramMemberType: number, paramMemberTask: number) {
        this.id = paramId;
        this.firstName = paramFirstName;
        this.surname = paramSurname;
        this.codeDep = paramCodeDep;
        this.memberType = paramMemberType;
        this.memberTask = paramMemberTask;
    }

}