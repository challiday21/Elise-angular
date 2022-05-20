export class Member {

    firstName: string;
    surname: string;
    codeDep: string;
    id?: string;

    constructor(paramFirstName: string, paramSurname: string, paramEmail: string) {
        this.firstName = paramFirstName;
        this.surname = paramSurname;
        this.codeDep = paramEmail;
    }

}