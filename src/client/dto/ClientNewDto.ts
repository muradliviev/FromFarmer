export default class ClientNewDto {

    idNumber: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;

    constructor(idNumber: number, firstName: string, lastName: string, phoneNumber: string) {
        this.idNumber = idNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }
}