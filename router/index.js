import { Router } from 'express';
import routerCity from './cities.js';


const routerIndex = Router()

routerIndex.use('/cities', routerCity)

export default routerIndex