import express from 'express';
import {  getAllSongs } from '../controller/event.controller.js';
import { authenticate } from '../controller/auth.middleware.js';

const EventRouter = express.Router();


EventRouter.get('/songs',authenticate, getAllSongs);

export default EventRouter;