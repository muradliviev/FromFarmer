import {FarmerShort} from "../../farmers/model/FarmerShort";

export default interface ClientService {

    getAllFarmers(): FarmerShort[];
}