import { Router } from 'express';
import authorize from "../Middlewares/auth.middleware.js";
import {createSubscription, getUserSubscriptions} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET all subscriptions'}));
subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET subscription details'}));
subscriptionRouter.post('/', authorize, createSubscription);
subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'Update Subscription'}));
subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'delete Subscription'}));
subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);
subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'Cancel Subscription'}));
subscriptionRouter.get('/upcoing-renewals', (req, res) => res.send({ title: 'GET upcoming renewals'}));

export default subscriptionRouter;