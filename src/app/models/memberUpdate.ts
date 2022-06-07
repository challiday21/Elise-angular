export class MemberUpdate {

    _id?: string;
    firstName: string;
    surname: string;
    codeDep: number;
    typeMember: string;
    taskMember: string;

    constructor(param_id: string, paramFirstName: string, paramSurname: string, paramCodeDep: number, paramTypeMember: string, paramTaskMember: string) {
        this._id = param_id;
        this.firstName = paramFirstName;
        this.surname = paramSurname;
        this.codeDep = paramCodeDep;
        this.typeMember = paramTypeMember;
        this.taskMember = paramTaskMember;
    }

}