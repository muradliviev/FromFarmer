import FarmerService from "../services/FarmerService";
import FarmerDto from "../dto/FarmerDto";
import Farmer from "../model/Farmer";
import FarmerUpdateDto from "../dto/FarmerUpdateDto";
import FarmerNewDto from "../dto/FarmerNewDto";

export default class FarmerControllers {

    private farmerService: FarmerService;

    constructor(farmerService: FarmerService) {
        this.farmerService = farmerService;
    }

    addFarmer(farmerDto: FarmerDto):boolean {
        const farmer: Farmer = new Farmer(farmerDto.ID_LTD,farmerDto.firstName, farmerDto.lastName, farmerDto.email, farmerDto.password, farmerDto.phoneNumber);
        return this.farmerService.addFarmer(farmer);
    }

    updateFarmer(id: number, updateFarmer: FarmerUpdateDto): FarmerNewDto {
        const farmer = this.farmerService.updateFarmer(id, updateFarmer.firstName, updateFarmer.lastName, updateFarmer.phoneNumber);
        return new FarmerNewDto(farmer.ID_LTD, farmer.firstName, farmer.lastName, farmer.phoneNumber);

    }
}