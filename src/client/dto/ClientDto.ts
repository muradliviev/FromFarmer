export class ClientDto {
    idNumber: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;


    constructor(idNumber: number, firstName: string, lastName: string, phoneNumber: string, email: string, password: string) {
        this.idNumber = idNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.password = password;
    }
}