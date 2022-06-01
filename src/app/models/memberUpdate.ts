export class MemberUpdate {

    _id?: string;
    firstName: string;
    surname: string;
    codeDep: string;

    constructor(param_id: string, paramFirstName: string, paramSurname: string, paramCodeDep: string) {
        this._id = param_id;
        this.firstName = paramFirstName;
        this.surname = paramSurname;
        this.codeDep = paramCodeDep;
    }

}