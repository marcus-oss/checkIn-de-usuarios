import express from 'express';
import { celebrate, Joi } from 'celebrate';

import RoomsController from './Controllers/RoomsController';
import EventsController from './Controllers/EventsController';

const routes = express.Router();

const roomsController = new RoomsController();
const eventsController = new EventsController();

//endpoint de get 
routes.get('/rooms', roomsController.index);
//endpoint post 
routes.post('/rooms', celebrate({
    body: Joi.object().keys({
    name: Joi.string().required().max(50),
    building: Joi.string().required().max(50)
})}, { abortEarly: false }),
roomsController.create);
//endpoint put
routes.put('/rooms/:id_room', roomsController.update);
//endpoint get para fazer update na data 
routes.get('/rooms/:id_room', roomsController.dataUpdate);

routes.get('/events', eventsController.index);
routes.get('/events_day', eventsController.eventsOfDay);
routes.post('/events', celebrate({
    body: Joi.object().keys({
    name: Joi.string().required().max(50),
    description: Joi.string().required().max(200),
    responsible: Joi.string().required().max(50),
    date_time: Joi.string().required(),
    rooms: Joi.array().required()
})}, { abortEarly: false }), eventsController.create);
//end point deletar eventos da salab
routes.delete('/events/:id_event', eventsController.remove);
//end point deletar data por id 
routes.get('/events/:id_event', eventsController.dataRemove);

export default routes;