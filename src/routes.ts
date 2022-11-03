import { Router } from 'express';
import { ammosController } from './controller/AmmosController';
import { armorsController } from './controller/ArmorsController';
import { script } from './controller/ScriptDB';


const routes = Router();

/**
 * @Ammos routes
 */

routes.get('/ammos', ammosController.getAmmos);

/**
 * @Armors routes
 */

routes.get('/armors', armorsController.getArmors);

routes.get('/script', script.getDatabase);

export default routes;

