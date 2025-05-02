import * as fs from "node:fs";
import Client from "../model/Client";

export default class ClientRepository {
    private readonly filePath: string;

    constructor(filePath = './dbClient.txt') {
        this.filePath = filePath;
    }

    readAll(): Client[] {
        try {
            const res = fs.readFileSync(this.filePath,{encoding:'utf-8'});
            return JSON.parse(res) as Client[];
        } catch (err: any) {
            console.error(`Error -> ${err}`);
            return [];
        }
    }


    writeAll(arg: Client[]):boolean {
        try {
            const data = JSON.stringify(arg, null, 2);
            fs.writeFileSync(this.filePath,data,{encoding:'utf-8'});
            console.log("Client is added in db.txt");
            return true;
        }catch (err){
            console.error(err)
            return false;
        }
    }
}