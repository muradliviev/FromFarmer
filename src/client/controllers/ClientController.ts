import ClientService from "../services/ClientService";
import {FarmerShort} from "../../farmers/model/FarmerShort";

export default class ClientController {

    private clientService: ClientService;

    constructor(clientService: ClientService) {
        this.clientService = clientService;
    }

    getAllFarmers() : FarmerShort[] {
        return this.clientService.getAllFarmers();
    }
}