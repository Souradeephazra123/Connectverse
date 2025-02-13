import express from 'express';
import { signin, signup } from '../controller/user.controller.js';

const AuthRouter= express.Router();

AuthRouter.post('/signup', signup);

AuthRouter.post('/login', signin);

export default AuthRouter;
