import * as fs from "node:fs";
import Farmer from "../model/Farmer";

export default class FarmerRepository {
    private readonly filePath: string;

    constructor(filePath = './db.txt') {
        this.filePath = filePath;
    }

    readAll(): Farmer[] {
        try {
            const res = fs.readFileSync(this.filePath,{encoding:'utf-8'});
            return JSON.parse(res) as Farmer[];
        } catch (err: any) {
            console.error(`Error -> ${err}`);
            return [];
        }
    }


    writeAll(arg: Farmer[]):boolean {
        try {
            const data = JSON.stringify(arg, null, 2);
            fs.writeFileSync(this.filePath,data,{encoding:'utf-8'});
            console.log("Farmer is added in db.txt");
            return true;
        }catch (err){
            console.error(err)
            return false;
        }
    }
}