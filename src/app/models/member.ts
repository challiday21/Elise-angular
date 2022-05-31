export class Member {

    _id?: string;
    firstName: string;
    surname: string;
    codeDep: string;

    constructor(paramFirstName: string, paramSurname: string, paramCodeDep: string) {
        this.firstName = paramFirstName;
        this.surname = paramSurname;
        this.codeDep = paramCodeDep;
    }

}