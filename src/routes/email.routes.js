import express from 'express';
import { sendEmail } from '../controller/sendEmail.js';

const EmailRouter = express.Router();


EmailRouter.post('/sendEmail',sendEmail);

export default EmailRouter;