export class MemberType {
    id: number;
    name: string;

    constructor(paramMemberId: number, paramMemberTypeName: string) {
        this.id = paramMemberId;
        this.name = paramMemberTypeName;
    }
}