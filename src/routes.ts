import { Router } from 'express';
import { inventoryController } from './controller/InventoryController';
import { magicController } from './controller/MagicController';
import { enemiesController } from './controller/EnemiesController';
import { classesController } from './controller/ClassesController';
import { locationsController } from './controller/LocationsController';
import { npcsController } from './controller/NpcsController';
// import { script } from './controller/ScriptDB';


const routes = Router();

/**
 * @ClassesController {controller}
 *
 * @Classes {Route}
 */

routes.get('/classes', classesController.getClasses);
routes.get('/class/:id', classesController.getClassesById);
routes.delete('/class/:id', classesController.deleteClassById);

/**
 * @EnemiesController {controller}
 *
 * @Bosses {Route}
 * @Creatures {Route}
 */

routes.get('/bosses', enemiesController.getBosses);
routes.get('/boss/:id', enemiesController.getBossById);
routes.delete('/boss/:id', enemiesController.deleteBossById);

routes.get('/creatures', enemiesController.getCreatures);
routes.get('/creature/:id', enemiesController.getCreatureByid);
routes.delete('/creature/:id', enemiesController.deleteCreatureById);


/**
 * @InventoryController {controller}
 *
 * @Ammo {Route}
 * @Armor {Route}
 * @Item {Route}
 * @Shield {Route}
 * @Weapon {Route}
 * @Talisman {Route}
 */

routes.get('/ammos', inventoryController.getAmmos);
routes.get('/ammo/:id', inventoryController.getAmmoById);
routes.delete('/ammo/:id', inventoryController.deleteAmmoById);

routes.get('/armors', inventoryController.getArmors);
routes.get('/armor/:id', inventoryController.getArmorById);
routes.delete('/armor/:id', inventoryController.deleteArmorById);

routes.get('/items', inventoryController.getItems);
routes.get('/item/:id', inventoryController.getItemById);
routes.delete('/item/:id', inventoryController.deleteItemById);

routes.get('/shields', inventoryController.getShields);
routes.get('/shield/:id', inventoryController.getShieldById);
routes.delete('/shield/:id', inventoryController.deleteShieldById);

routes.get('/weapons', inventoryController.getWeapons);
routes.get('/weapon/:id', inventoryController.getWeaponById);
routes.delete('/weapon/:id', inventoryController.deleteWeaponById);

routes.get('/talismans', inventoryController.getTalismans);
routes.get('/talisman/:id', inventoryController.getTalismanById);
routes.delete('/talisman/:id', inventoryController.deleteTalismanById);

/**
 * @LocationsController {controller}
 *
 * @Locations routes
 */

routes.get('/locations', locationsController.getLocations);
routes.get('/location/:id', locationsController.getLocationById);
routes.delete('/location/:id', locationsController.deleteLocationById);

/**
 * @MagicController {controller}
 *
 * @Ashes {Route}
 * @Incantations {Route}
 * @Sorceries {Route}
 * @Spirits {Route}
 */

routes.get('/ashes', magicController.getAshes);
routes.get('/ashe/:id', magicController.getAsheById);
routes.delete('/ashe/:id', magicController.deleteAsheById);

routes.get('/incantations', magicController.getIncantations);
routes.get('/incantation/:id', magicController.getIncantationById);
routes.delete('/incantation/:id', magicController.deleteIncantationById);

routes.get('/sorceries', magicController.getSorceries);
routes.get('/sorcerie/:id', magicController.getSorcerieById);
routes.delete('/sorcerie/:id', magicController.deleteSorcerieById);

routes.get('/spirits', magicController.getSpirits);
routes.get('/spirit/:id', magicController.getSpiritById);
routes.delete('/spirit/:id', magicController.deleteSpiritById);

/**
 * @NpcsController {controller}
 *
 * @Npcs {Route}
 */

routes.get('/npcs', npcsController.getNpcs);
routes.get('/npc/:id', npcsController.getNpcById);
routes.delete('/npc/:id', npcsController.deleteNpcById);


export default routes;

