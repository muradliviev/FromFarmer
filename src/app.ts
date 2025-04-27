import express, {Request, Response, NextFunction} from 'express';
import {PORT} from "./utils";
import farmerRoutes from "./farmers/routes/farmerRoutes";

const app = express();

app.use(express.json());

app.use('', farmerRoutes);

app.use((err: Error, req:Request, res: Response, next: NextFunction) => {
    res.status(400).json({error: err.message});
} )

app.listen(PORT, ()=>{
    console.log(`Server started on port http://localhost:${PORT}`);
})