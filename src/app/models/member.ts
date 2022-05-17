export class Member {

    firstName: string;
    lastName: string;
    codeDep: string;
    email: string;
    _id?: string;

    constructor(paramFirstName: string, paramLastName: string, paramEmail: string) {
        this.firstName = paramFirstName;
        this.lastName = paramLastName;
        this.codeDep = paramEmail;
        this.email = paramEmail;
    }

}