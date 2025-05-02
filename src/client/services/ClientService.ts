import {FarmerShort} from "../../farmers/model/FarmerShort";
import Client from "../model/Client";

export default interface ClientService {

    getAllFarmers(): FarmerShort[];

    addClient(client: Client): boolean;

    updateClient(id: number, firstName: string, lastName: string, phoneNumber: string): Client;
}