export default class FarmerDto {
    ID_LTD: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;


    constructor(ID_LTD: number, firstName: string, lastName: string, email: string, password: string, phoneNumber: string) {
        this.ID_LTD = ID_LTD;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }
}