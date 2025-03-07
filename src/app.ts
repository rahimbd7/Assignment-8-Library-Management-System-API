import express, { Application,  Request, Response } from "express";

import cors from 'cors'
import router from "./app/routes/routes";
import cookieParser from "cookie-parser";
import path from "path";
const app: Application = express();



app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.use('/api', (req, res) => {
    res.json({
        success: true,
        path: req.path,
        message: "You are in the base API route. Navigate further, e.g., /api/books, /api/members, /api/borrow, etc.",
    });
});

app.use('/api', router)


export default app;