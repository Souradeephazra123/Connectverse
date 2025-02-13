import express from 'express';
import {  getAllSongs } from '../controller/event.controller.js';

const EventRouter = express.Router();


EventRouter.get('/songs', getAllSongs);

export default EventRouter;