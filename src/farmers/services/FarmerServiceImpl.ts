import FarmerService from "./FarmerService";
import Farmer from "../model/Farmer";
import FarmerRepository from "../dao/FarmerRepository";

export default class FarmerServiceImpl implements FarmerService {

    private farmerRepository = new FarmerRepository();

    addFarmer(farmer: Farmer): boolean {
        const farmers = this.farmerRepository.readAll();
        if (farmers.findIndex(s => s.ID_LTD === farmer.ID_LTD) >= 0) {
            return false;
        }
        farmers.push(farmer);
        return this.farmerRepository.writeAll(farmers);
    }

    updateFarmer(id: number, firstName: string, lastName: string, phoneNumber: string): Farmer {
        const farmer: Farmer[] = this.farmerRepository.readAll()
        const index = farmer.findIndex(s => s.ID_LTD === id);
        if (index < 0) throw new Error(`Student with id ${id} not found`);
        const result = farmer[index];
        result.firstName = firstName;
        result.lastName = lastName;
        result.phoneNumber = phoneNumber;
        farmer[index] = result;
        this.farmerRepository.writeAll(farmer);
        return result;
    }


}