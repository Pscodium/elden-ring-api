import { Router } from 'express';
import { ammosController } from './controller/AmmosController';
import { armorsController } from './controller/ArmorsController';
import { ashesController } from './controller/AshesController';
import { bossesController } from './controller/BossesController';
import { classesController } from './controller/ClassesController';
import { creaturesController } from './controller/CreaturesController';
import { incantationsController } from './controller/IncantationsController';
import { itemsController } from './controller/ItemsController';
import { locationsController } from './controller/LocationsController';
import { npcsController } from './controller/NpcsController';
import { shieldsController } from './controller/ShieldsController';
import { sorceriesController } from './controller/SorceriesController';
import { spiritsController } from './controller/SpiritsController';
import { talismansController } from './controller/TalismansController';
import { weaponsController } from './controller/WeaponsController';
// import { script } from './controller/ScriptDB';


const routes = Router();

/**
 * @Ammos routes
 */

routes.get('/ammos', ammosController.getAmmos);
routes.get('/ammo/:id', ammosController.getAmmoById);
routes.post('/ammo', ammosController.createAmmo);
routes.delete('/ammo/:id', ammosController.deleteAmmoById);

/**
 * @Armors routes
 */

routes.get('/armors', armorsController.getArmors);

/**
 * @Ashes routes
 */

routes.get('/ashes', ashesController.getAshes);

/**
 * @Bosses routes
 */

routes.get('/bosses', bossesController.getBosses);

/**
 * @Classes routes
 */

routes.get('/classes', classesController.getClasses);

/**
 * @Creatures routes
 */

routes.get('/creatures', creaturesController.getCreatures);

/**
 * @Incantations routes
 */

routes.get('/incantations', incantationsController.getIncantations);

/**
 * @Items routes
 */

routes.get('/items', itemsController.getItems);

/**
 * @Locations routes
 */

routes.get('/locations', locationsController.getLocations);

/**
 * @Npcs routes
 */

routes.get('/npcs', npcsController.getNpcs);

/**
 * @Shields routes
 */

routes.get('/shields', shieldsController.getShields);

/**
 * @Sorceries routes
 */

routes.get('/sorceries', sorceriesController.getSorceries);


/**
 * @Spirits routes
 */

routes.get('/spirits', spiritsController.getSpirits);

/**
 * @Talismans routes
 */

routes.get('/talismans', talismansController.getTalismans);

/**
 * @Weapons routes
 */

routes.get('/weapons', weaponsController.getWeapons);



export default routes;

