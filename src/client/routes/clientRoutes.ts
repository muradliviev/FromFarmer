import {Router} from "express";
import validationMiddleware from "../../validationMiddleware/validationMiddleware";
import expressAsyncHandler from "express-async-handler";
import ClientServiceImpl from "../services/ClientServiceImpl";
import ClientController from "../controllers/ClientController";
import {ClientDto} from "../dto/ClientDto";
import {body} from "express-validator";
import ClientUpdateDto from "../dto/ClientUpdateDto";


const router = Router();
const clientService = new ClientServiceImpl();
const clientController = new ClientController(clientService);

router.post('/client',
    body("idNumber").matches(/^\d{9}$/),
    body("firstName").isString().notEmpty(),
    body("lastName").isString().notEmpty(),
    body("email").isEmail(),
    body("password").isString().isLength({min: 6}).notEmpty(),
    body("phoneNumber").matches(/^\+972\d{9}$/),
    validationMiddleware,
    expressAsyncHandler(async (req, res) => {
        const clientDto = req.body as ClientDto;
        const isSuccess = clientController.addClient(clientDto);
        isSuccess ? res.status(200).send(true) : res.status(400).send(false)
    }))

router.put('/client/:id',
    body("firstName").isString().notEmpty(),
    body("lastName").isString().notEmpty(),
    body("phoneNumber").matches(/^\+972\d{9}$/),
    validationMiddleware,
    expressAsyncHandler(async (req, res) => {
        const id : number = +req.params.id;
        const updateClient = req.body as ClientUpdateDto;
        const result = clientController.updateClient(id, updateClient);
        res.status(200).send(result);
    })
)

router.get('/client/farmers',
    validationMiddleware,
    expressAsyncHandler(async (req, res) => {
        res.status(200).json(clientController.getAllFarmers())
    }))



export default router;