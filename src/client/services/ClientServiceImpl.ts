import ClientService from "./ClientService";
import Farmer from "../../farmers/model/Farmer";
import {FarmerShort} from "../../farmers/model/FarmerShort";
import FarmerRepository from "../../farmers/dao/FarmerRepository";
import Client from "../model/Client";
import ClientRepository from "../dao/ClientRepository";

export default class ClientServiceImpl implements ClientService {

    private farmerRepository = new FarmerRepository();
    private clientRepository = new ClientRepository();

    getAllFarmers(): FarmerShort[] {
        const farmers: Farmer[] = this.farmerRepository.readAll();
        const shortFarmers: FarmerShort[] = farmers.map(f => ({
            ID_LTD: f.ID_LTD,
            firstName: f.firstName,
            lastName: f.lastName
        }));
        return shortFarmers;
    }

    addClient(c: Client): boolean {
        const client = this.clientRepository.readAll();
        if (client.findIndex(cl => cl.idNumber === c.idNumber) >= 0) {
            return false;
        }
        client.push(c);
        return this.clientRepository.writeAll(client);
    }

    updateClient(id: number, firstName: string, lastName: string, phoneNumber: string): Client {
        const client: Client[] = this.clientRepository.readAll();
        console.log(client);
        const index: number = client.findIndex(cl => cl.idNumber === id);
        if (index < 0) throw new Error(`Clien!!!t with id ${id} not found`);
        const result = client[index];
        result.firstName = firstName;
        result.lastName = lastName;
        result.phoneNumber = phoneNumber;
        client[index] = result;
        this.clientRepository.writeAll(client);
        return result;
    }
}