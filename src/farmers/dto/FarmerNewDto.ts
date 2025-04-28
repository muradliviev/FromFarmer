export default class FarmerNewDto {
    ID_LTD: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;

    constructor(ID_LTD: number, firstName: string, lastName: string, phoneNumber: string) {
        this.ID_LTD = ID_LTD;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }
}