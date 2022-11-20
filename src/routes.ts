import { Router } from 'express';
import { inventoryController } from './controller/InventoryController';
import { magicController } from './controller/MagicController';
import { enemiesController } from './controller/EnemiesController';
import { classesController } from './controller/ClassesController';
import { locationsController } from './controller/LocationsController';
import { npcsController } from './controller/NpcsController';
import { usersController } from './controller/UsersController';
import { authController } from './controller/AuthController';
import authMiddleware from './middlewares/AuthMiddleware';
import { categoriesController } from './controller/CategoriesController';
// import { script } from './controller/ScriptDB';


const routes = Router();

/**
 * @CategoriesController {controller}
 *
 * @Category {Route}
 */
routes.get('/categories', authMiddleware, categoriesController.getCategories);

/**
 * @ClassesController {controller}
 *
 * @Classes {Route}
 */

routes.get('/classes', authMiddleware, classesController.getClasses);
routes.get('/class/:id', authMiddleware, classesController.getClassesById);
routes.delete('/class/:id', authMiddleware, classesController.deleteClassById);
routes.put('/classes/update/:id', authMiddleware, classesController.updateClass);

/**
 * @EnemiesController {controller}
 *
 * @Bosses {Route}
 * @Creatures {Route}
 */

routes.get('/bosses', authMiddleware, enemiesController.getBosses);
routes.get('/boss/:id', authMiddleware, enemiesController.getBossById);
routes.delete('/boss/:id', authMiddleware, enemiesController.deleteBossById);
routes.put('/bosses/update/:id', authMiddleware, enemiesController.updateBoss);

routes.get('/creatures', authMiddleware, enemiesController.getCreatures);
routes.get('/creature/:id', authMiddleware, enemiesController.getCreatureByid);
routes.delete('/creature/:id', authMiddleware, enemiesController.deleteCreatureById);
routes.put('/creatures/update/:id', authMiddleware, enemiesController.updateCreature);


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

routes.get('/ammos', authMiddleware, inventoryController.getAmmos);
routes.get('/ammo/:id', authMiddleware, inventoryController.getAmmoById);
routes.delete('/ammo/:id', authMiddleware, inventoryController.deleteAmmoById);
routes.put('/ammos/update/:id', authMiddleware, inventoryController.updateAmmo);

routes.get('/armors', authMiddleware, inventoryController.getArmors);
routes.get('/armor/:id', authMiddleware, inventoryController.getArmorById);
routes.delete('/armor/:id', authMiddleware, inventoryController.deleteArmorById);
routes.put('/armors/update/:id', authMiddleware, inventoryController.updateArmor);

routes.get('/items', authMiddleware, inventoryController.getItems);
routes.get('/item/:id', authMiddleware, inventoryController.getItemById);
routes.delete('/item/:id', authMiddleware, inventoryController.deleteItemById);
routes.put('/items/update/:id', authMiddleware, inventoryController.updateItem);

routes.get('/shields', authMiddleware, inventoryController.getShields);
routes.get('/shield/:id', authMiddleware, inventoryController.getShieldById);
routes.delete('/shield/:id', authMiddleware, inventoryController.deleteShieldById);
routes.put('/shields/update/:id', authMiddleware, inventoryController.updateShield);

routes.get('/weapons', authMiddleware, inventoryController.getWeapons);
routes.get('/weapon/:id', authMiddleware, inventoryController.getWeaponById);
routes.delete('/weapon/:id', authMiddleware, inventoryController.deleteWeaponById);
routes.put('/weapons/update/:id', authMiddleware, inventoryController.updateWeapon);

routes.get('/talismans', authMiddleware, inventoryController.getTalismans);
routes.get('/talisman/:id', authMiddleware, inventoryController.getTalismanById);
routes.delete('/talisman/:id', authMiddleware, inventoryController.deleteTalismanById);
routes.put('/talismans/update/:id', authMiddleware, inventoryController.updateTalisman);

/**
 * @LocationsController {controller}
 *
 * @Locations routes
 */

routes.get('/locations', authMiddleware, locationsController.getLocations);
routes.get('/location/:id', authMiddleware, locationsController.getLocationById);
routes.delete('/location/:id', authMiddleware, locationsController.deleteLocationById);
routes.put('/locations/update/:id', authMiddleware, locationsController.updateLocation);

/**
 * @MagicController {controller}
 *
 * @Ashes {Route}
 * @Incantations {Route}
 * @Sorceries {Route}
 * @Spirits {Route}
 */

routes.get('/ashes', authMiddleware, magicController.getAshes);
routes.get('/ashe/:id', authMiddleware, magicController.getAsheById);
routes.delete('/ashe/:id', authMiddleware, magicController.deleteAsheById);
routes.put('/ashes/update/:id', authMiddleware, magicController.updateAshe);

routes.get('/incantations', authMiddleware, magicController.getIncantations);
routes.get('/incantation/:id', authMiddleware, magicController.getIncantationById);
routes.delete('/incantation/:id', authMiddleware, magicController.deleteIncantationById);
routes.put('/incantations/update/:id', authMiddleware, magicController.updateIncantation);

routes.get('/sorceries', authMiddleware, magicController.getSorceries);
routes.get('/sorcerie/:id', authMiddleware, magicController.getSorcerieById);
routes.delete('/sorcerie/:id', authMiddleware, magicController.deleteSorcerieById);
routes.put('/sorceries/update/:id', authMiddleware, magicController.updateSorcerie);

routes.get('/spirits', authMiddleware, magicController.getSpirits);
routes.get('/spirit/:id', authMiddleware, magicController.getSpiritById);
routes.delete('/spirit/:id', authMiddleware, magicController.deleteSpiritById);
routes.put('/spirits/update/:id', authMiddleware, magicController.updateSpirit);

/**
 * @NpcsController {controller}
 *
 * @Npcs {Route}
 */

routes.get('/npcs', authMiddleware, npcsController.getNpcs);
routes.get('/npc/:id', authMiddleware, npcsController.getNpcById);
routes.delete('/npc/:id', authMiddleware, npcsController.deleteNpcById);
routes.put('/npcs/update/:id', authMiddleware, npcsController.updateNpc);

/**
 * @UsersController {controller}
 *
 * @Users {Route}
 */
routes.post('/users', usersController.registerUser);
routes.post('/auth', authController.authenticate);
routes.post('/permissions/:id', authMiddleware, usersController.setPermission);
routes.get('/user/:id', authMiddleware, usersController.getUserData);
routes.post('/user/role/:id', authMiddleware, usersController.setRole);
routes.get('/users/checkAuth', authMiddleware, usersController.checkAuth);

export default routes;

