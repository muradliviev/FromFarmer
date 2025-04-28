import {Router} from "express";
import validationMiddleware from "../../validationMiddleware/validationMiddleware";
import expressAsyncHandler from "express-async-handler";
import ClientServiceImpl from "../services/ClientServiceImpl";
import ClientController from "../controllers/ClientController";



const router = Router();
const clientService = new ClientServiceImpl();
const clientController = new ClientController(clientService);

router.get('/client/farmers',
    validationMiddleware,
    expressAsyncHandler(async (req, res) => {
        res.status(200).json(clientController.getAllFarmers())
    }))

export default router;