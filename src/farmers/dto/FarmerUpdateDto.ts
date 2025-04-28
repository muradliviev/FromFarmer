export default class FarmerUpdateDto {

    firstName: string;
    lastName: string;
    phoneNumber: string;

    constructor(firstName: string, lastName: string, phoneNumber: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }

}