import {Router} from 'express';
import expressAsyncHandler from "express-async-handler";
import FarmerDto from "../dto/FarmerDto";
import FarmerServiceImpl from "../services/FarmerServiceImpl";
import FarmerControllers from "../controllers/FarmerController";
import {body} from "express-validator";
import validationMiddleware from "../../validationMiddleware/validationMiddleware";
import FarmerUpdateDto from "../dto/FarmerUpdateDto";

const router = Router();
const farmerService = new FarmerServiceImpl();
const farmerController = new FarmerControllers(farmerService);

router.post('/farmer',
    body("ID_LTD").matches(/^\d{7}$/),
    body("firstName").isString().notEmpty(),
    body("lastName").isString().notEmpty(),
    body("email").isEmail(),
    body("password").isString().isLength({min: 6}).notEmpty(),
    body("phoneNumber").matches(/^\+972\d{9}$/),
    validationMiddleware,
    expressAsyncHandler(async (req, res) => {
    const farmerDto = req.body as FarmerDto;
    const isSuccess = farmerController.addFarmer(farmerDto);
    isSuccess ? res.status(200).send(true) : res.status(400).send(false)
}))

router.put('/farmer/:id',
    body("firstName").isString().notEmpty(),
    body("lastName").isString().notEmpty(),
    body("phoneNumber").matches(/^\+972\d{9}$/),
    validationMiddleware,
    expressAsyncHandler(async (req, res) => {
        const id: number = +req.params.id;
        const updateFarmer = req.body as FarmerUpdateDto;
        const result = farmerController.updateFarmer(id, updateFarmer);
        res.status(200).send(result)
}))






export default router;