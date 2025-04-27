import {Router} from 'express';
import expressAsyncHandler from "express-async-handler";
import FarmerDto from "../dto/FarmerDto";
import FarmerService from "../services/FarmerService";
import FarmerServiceImpl from "../services/FarmerServiceImpl";
import FarmerControllers from "../controllers/FarmerController";

const router = Router();
const farmerService = new FarmerServiceImpl();
const farmerController = new FarmerControllers(farmerService);

router.post('/farmer', expressAsyncHandler(async (req, res) => {
    const farmerDto = req.body as FarmerDto;
    const isSuccess = farmerController.addFarmer(farmerDto);
    isSuccess ? res.status(200).send(true) : res.status(400).send(false)
}))






export default router;