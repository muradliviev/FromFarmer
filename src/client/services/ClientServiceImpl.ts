import ClientService from "./ClientService";
import Farmer from "../../farmers/model/Farmer";
import {FarmerShort} from "../../farmers/model/FarmerShort";
import FarmerRepository from "../../farmers/dao/FarmerRepository";

export default class ClientServiceImpl implements ClientService {

    private farmerRepository = new FarmerRepository();

    getAllFarmers(): FarmerShort[] {
        const farmers: Farmer[] = this.farmerRepository.readAll();
        const shortFarmers: FarmerShort[] = farmers.map(f => ({
            ID_LTD: f.ID_LTD,
            firstName: f.firstName,
            lastName: f.lastName
        }));

        return shortFarmers;
    }

}