import Farmer from "./Farmer";

export type FarmerShort = Pick<Farmer, "ID_LTD" | "firstName" | "lastName">;