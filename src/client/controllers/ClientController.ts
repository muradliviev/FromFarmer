import ClientService from "../services/ClientService";
import {FarmerShort} from "../../farmers/model/FarmerShort";
import {ClientDto} from "../dto/ClientDto";
import Client from "../model/Client";
import ClientUpdateDto from "../dto/ClientUpdateDto";
import ClientNewDto from "../dto/ClientNewDto";

export default class ClientController {

    private clientService: ClientService;

    constructor(clientService: ClientService) {
        this.clientService = clientService;
    }

    getAllFarmers() : FarmerShort[] {
        return this.clientService.getAllFarmers();
    }

    addClient(clientDto: ClientDto):boolean {
        const client = new Client(clientDto.idNumber, clientDto.firstName, clientDto.lastName, clientDto.phoneNumber,clientDto.email, clientDto.password);
        return this.clientService.addClient(client);
    }

    updateClient(id: number, updateClient: ClientUpdateDto) : ClientNewDto {
        const client = this.clientService.updateClient(id, updateClient.firstName, updateClient.lastName, updateClient.phoneNumber);
        return new ClientNewDto(client.idNumber, client.firstName, client.lastName, client.phoneNumber);

    }
}