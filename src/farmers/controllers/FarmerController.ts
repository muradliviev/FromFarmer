import FarmerService from "../services/FarmerService";
import FarmerDto from "../dto/FarmerDto";
import Farmer from "../model/Farmer";

export default class FarmerControllers {

    private farmerService: FarmerService;

    constructor(farmerService: FarmerService) {
        this.farmerService = farmerService;
    }

    addFarmer(farmerDto: FarmerDto):boolean {
        const farmer: Farmer = new Farmer(farmerDto.ID_LTD,farmerDto.firstName, farmerDto.lastName, farmerDto.email, farmerDto.password, farmerDto.phoneNumber);
        return this.farmerService.addFarmer(farmer);
    }
}