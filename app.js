import express from 'express';
import cookieParser from 'cookie-parser';

import { PORT } from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./Middlewares/error.middleware.js";
import arcjetMiddleware from "./Middlewares/arcjet.middleware.js";
import workflowRouter from "./routes/workflow.routes.js";

const app = express();

//EXPRESS BUILT-IN MIDDLEWARES
app.use(express.json()); //allows data to handle json data sent in requests or API calls
app.use(express.urlencoded({ extended: false})) //helps to process the form data sent via html forms in simple format
app.use(cookieParser()); //reads cookies from incoming requests to store user data
app.use(arcjetMiddleware);

//ROUTES
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/workflows', workflowRouter);

//CREATED MIDDLEWARES
app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('Welcome to the Subscription Tracker API !');
});

app.listen(PORT,  async ()=> {
    console.log(`Subscription tracker running on http://localhost:${PORT}`)

    await connectToDatabase()
});

export default app;