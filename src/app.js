import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limiy: "16kb"}))
app.use(express.erlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookiesParser())

export { app }