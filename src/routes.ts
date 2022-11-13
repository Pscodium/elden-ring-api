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
routes.put('/class/update/:id', classesController.updateClass);

/**
 * @EnemiesController {controller}
 *
 * @Bosses {Route}
 * @Creatures {Route}
 */

routes.get('/bosses', enemiesController.getBosses);
routes.get('/boss/:id', enemiesController.getBossById);
routes.delete('/boss/:id', enemiesController.deleteBossById);
routes.put('/boss/update/:id', enemiesController.updateBoss);

routes.get('/creatures', enemiesController.getCreatures);
routes.get('/creature/:id', enemiesController.getCreatureByid);
routes.delete('/creature/:id', enemiesController.deleteCreatureById);
routes.put('/creatures/update/:id', enemiesController.updateCreature);


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
routes.put('/ammos/update/:id', inventoryController.updateAmmo);

routes.get('/armors', inventoryController.getArmors);
routes.get('/armor/:id', inventoryController.getArmorById);
routes.delete('/armor/:id', inventoryController.deleteArmorById);
routes.put('/armor/update/:id', inventoryController.updateArmor);

routes.get('/items', inventoryController.getItems);
routes.get('/item/:id', inventoryController.getItemById);
routes.delete('/item/:id', inventoryController.deleteItemById);
routes.put('/item/update/:id', inventoryController.updateItem);

routes.get('/shields', inventoryController.getShields);
routes.get('/shield/:id', inventoryController.getShieldById);
routes.delete('/shield/:id', inventoryController.deleteShieldById);
routes.put('/shield/update/:id', inventoryController.updateShield);

routes.get('/weapons', inventoryController.getWeapons);
routes.get('/weapon/:id', inventoryController.getWeaponById);
routes.delete('/weapon/:id', inventoryController.deleteWeaponById);
routes.put('/weapon/update/:id', inventoryController.updateWeapon);

routes.get('/talismans', inventoryController.getTalismans);
routes.get('/talisman/:id', inventoryController.getTalismanById);
routes.delete('/talisman/:id', inventoryController.deleteTalismanById);
routes.put('/talisman/update/:id', inventoryController.updateTalisman);

/**
 * @LocationsController {controller}
 *
 * @Locations routes
 */

routes.get('/locations', locationsController.getLocations);
routes.get('/location/:id', locationsController.getLocationById);
routes.delete('/location/:id', locationsController.deleteLocationById);
routes.put('/location/update/:id', locationsController.updateLocation);

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
routes.put('/ashe/update/:id', magicController.updateAshe);

routes.get('/incantations', magicController.getIncantations);
routes.get('/incantation/:id', magicController.getIncantationById);
routes.delete('/incantation/:id', magicController.deleteIncantationById);
routes.put('/incantation/update/:id', magicController.updateIncantation);

routes.get('/sorceries', magicController.getSorceries);
routes.get('/sorcerie/:id', magicController.getSorcerieById);
routes.delete('/sorcerie/:id', magicController.deleteSorcerieById);
routes.put('/sorcerie/update/:id', magicController.updateSorcerie);

routes.get('/spirits', magicController.getSpirits);
routes.get('/spirit/:id', magicController.getSpiritById);
routes.delete('/spirit/:id', magicController.deleteSpiritById);
routes.put('/spirit/update/:id', magicController.updateSpirit);

/**
 * @NpcsController {controller}
 *
 * @Npcs {Route}
 */

routes.get('/npcs', npcsController.getNpcs);
routes.get('/npc/:id', npcsController.getNpcById);
routes.delete('/npc/:id', npcsController.deleteNpcById);
routes.put('/npc/update/:id', npcsController.updateNpc);


export default routes;

