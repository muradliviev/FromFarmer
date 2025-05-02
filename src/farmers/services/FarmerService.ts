import Farmer from "../model/Farmer";

export default interface FarmerService {
    addFarmer(farmer: Farmer): boolean

    updateFarmer(id: number, firstName: string, lastName: string, phoneNumber: string) : Farmer;
}