export class Member {

    firstName: string;
    lastName: string;
    codeDep: string;
    _id?: string;

    constructor(paramFirstName: string, paramLastName: string, paramEmail: string) {
        this.firstName = paramFirstName;
        this.lastName = paramLastName;
        this.codeDep = paramEmail;
    }

}