import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";

export default function validationMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).send('Validation fields NOT ok!');
        console.log(errors);
    } else {
        next();
    }
}