import { Router } from 'express';
import {getUser, getUsers} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', (req, res) => res.send({ title: 'Create new user'}));
userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE user'}));
userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE the user'}));

export default userRouter;