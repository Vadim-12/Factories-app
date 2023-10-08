import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import vars from './config/vars';
const mongoose = require('mongoose');
import cookieParser from 'cookie-parser';
import cors from 'cors';
import apiRouter from './routers';
import errorMiddleware from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
	cors({
		credentials: true,
		origin: vars.CLIENT_URL,
	})
);
app.use(apiRouter);
app.use(errorMiddleware);

const start = async () => {
	try {
		const DB_URL = `mongodb://localhost:27017/${vars.DB_NAME}`;
		await mongoose.connect(DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		app.listen(vars.PORT, () => {
			console.log(`Server started on port ${vars.PORT}`);
		});
	} catch (e) {
		console.log(e);
	}
};
start();
