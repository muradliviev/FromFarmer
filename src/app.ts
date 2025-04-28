import express, {Request, Response, NextFunction} from 'express';
import {PORT} from "./utils/utils";
import farmerRoutes from "./farmers/routes/farmerRoutes";
import clientRoutes from "./client/routes/clientRoutes";

const app = express();

app.use(express.json());

app.use('', farmerRoutes, clientRoutes);

app.use((err: Error, req:Request, res: Response, next: NextFunction) => {
    res.status(400).json({error: err.message});
} )

app.listen(PORT, ()=>{
    console.log(`Server started on port http://localhost:${PORT}`);
})