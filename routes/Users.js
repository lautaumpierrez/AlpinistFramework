import {Router} from 'express';
import UsersController from '../controllers/rest/Users';
const router = Router();
// const router = require('express').Router();

// Rest methods
router.get('/', new UsersController().getUsers);
router.get('/createUser', new UsersController().createUser);



export default router;
