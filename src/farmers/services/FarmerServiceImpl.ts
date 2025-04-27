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


}