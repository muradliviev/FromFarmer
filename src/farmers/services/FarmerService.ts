import Farmer from "../model/Farmer";

export default interface FarmerService {
    addFarmer(farmer: Farmer): boolean
}