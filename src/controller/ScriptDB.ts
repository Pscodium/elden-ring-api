import { AppDataSource } from "../data-source";
import * as ammosJson from "../database/ammos.json";
import * as armorJson from "../database/armors.json";
import * as ashesJson from "../database/ashes.json";
import * as bossesJson from "../database/bosses.json";
import * as classesJson from "../database/classes.json";
import * as creaturesJson from "../database/creatures.json";
import * as incantationsJson from "../database/incantations.json";
import * as itemsJson from "../database/items.json";
import * as locationsJson from "../database/locations.json";
import * as npcsJson from "../database/npcs.json";
import * as shieldsJson from "../database/shields.json";
import * as sorceriesJson from "../database/sorceries.json";
import * as spiritsJson from "../database/spirits.json";
import * as talismansJson from "../database/talismans.json";
import * as weaponsJson from "../database/weapons.json";
import { Ammos } from "../entity/Ammos";
import { Armors } from "../entity/Armors";
import { Ashes } from "../entity/Ashes";
import { Bosses } from "../entity/Bosses";
import { Classes } from "../entity/Classes";
import { Creatures } from "../entity/Creatures";
import { Incantations } from "../entity/Incantations";
import { Items } from "../entity/Items";
import { Locations } from "../entity/Locations";
import { Npcs } from "../entity/Npcs";
import { Shields } from "../entity/Shields";
import { Sorceries } from "../entity/Sorceries";
import { Spirits } from "../entity/Spirits";
import { Talismans } from "../entity/Talismans";
import { Weapons } from "../entity/Weapons";
import { Categories } from "../entity/Categories";

interface CategoryProps {
    name: string;
    singularName: string;
    image: string;
}

class Script {
    private categoriesRepository = AppDataSource.getRepository(Categories);
    private ammoRepository = AppDataSource.getRepository(Ammos);
    private armorRepository = AppDataSource.getRepository(Armors);
    private asheRepository = AppDataSource.getRepository(Ashes);
    private bossesRepository = AppDataSource.getRepository(Bosses);
    private classesRepository = AppDataSource.getRepository(Classes);
    private creaturesRepository = AppDataSource.getRepository(Creatures);
    private incantationsRepository = AppDataSource.getRepository(Incantations);
    private itemsRepository = AppDataSource.getRepository(Items);
    private locationsRepository = AppDataSource.getRepository(Locations);
    private npcsRepository = AppDataSource.getRepository(Npcs);
    private shieldsRepository = AppDataSource.getRepository(Shields);
    private sorceriesRepository = AppDataSource.getRepository(Sorceries);
    private spiritsRepository = AppDataSource.getRepository(Spirits);
    private talismansRepository = AppDataSource.getRepository(Talismans);
    private weaponsRepository = AppDataSource.getRepository(Weapons);

    getDatabase = async () => {

        const categoriesArray = [
            {
                name: "Ammos",
                singularName: "Ammo",
                image: "https://eldenring.fanapis.com/images/ammos/17f69992e40l0i0a7oo1s1bq93kal7.png"
            },
            {
                name: "Armors",
                singularName: "Armor",
                image: "https://eldenring.fanapis.com/images/armors/17f6960eae6l0i0nfy8iinlzz27.png"
            },
            {
                name: "Ashes",
                singularName: "Ashe",
                image: "https://eldenring.fanapis.com/images/ashes/17f691ddaael0hzndtkuqlxj0gi37d.png"
            },
            {
                name: "Bosses",
                singularName: "Boss",
                image: "https://eldenring.fanapis.com/images/bosses/17f69bcc1cdl0i1uoai2hm5tcbuhh2.png"
            },
            {
                name: "Classes",
                singularName: "Class",
                image: "https://eldenring.fanapis.com/images/classes/17f69b2dd76l0i32gljr3f62pkzhjo.png"
            },
            {
                name: "Creatures",
                singularName: "Creature",
                image: "https://eldenring.fanapis.com/images/creatures/17f69df2d3cl0i6ytiz05kga4oygzh.png"
            },
            {
                name: "Incantations",
                singularName: "Incantation",
                image: "https://eldenring.fanapis.com/images/incantations/17f692ee649l0hyntu1vu7cu8wxah.png"
            },
            {
                name: "Items",
                singularName: "Item",
                image: "https://eldenring.fanapis.com/images/items/17f69aab07al0i1z1ujum0v02t4lr.png"
            },
            {
                name: "Locations",
                singularName: "Location",
                image: "https://eldenring.fanapis.com/images/locations/17f69d83e6bl0i2m8v6af0i4h94ltb.png"
            },
            {
                name: "Npcs",
                singularName: "Npc",
                image: "https://eldenring.fanapis.com/images/npcs/17f69de1218l0i2olc1m799deyzbgj.png"
            },
            {
                name: "Shields",
                singularName: "Shield",
                image: "https://eldenring.fanapis.com/images/shields/17f6976985el0i124znputjytfizsr.png"
            },
            {
                name: "Sorceries",
                singularName: "Sorcerie",
                image: "https://eldenring.fanapis.com/images/sorceries/17f69526839l0hykt29wlkzjaekmfp.png"
            },
            {
                name: "Spirits",
                singularName: "Spirit",
                image: "https://eldenring.fanapis.com/images/spirits/17f69dc6c64l0i2rdkqrx6suz8t4k.png"
            },
            {
                name: "Talismans",
                singularName: "Talisman",
                image: "https://eldenring.fanapis.com/images/talismans/17f69659808l0i2sphoobyfsfvku2i.png"
            },
            {
                name: "Weapons",
                singularName: "Weapon",
                image: "https://eldenring.fanapis.com/images/weapons/17f69b35d86l0i1ongc5nz2ucwimp3.png"
            },
        ];

        categoriesArray.map((item: CategoryProps) => {
            this.categoriesRepository.save(item);
            console.log(`Category ${item.name} added.`);
        });

        console.log('filling the table ammos');

        /* eslint-disable */

        for (const item in ammosJson) {
            console.log(ammosJson[item])
            const obj = {
                name: ammosJson[item].name,
                image: ammosJson[item].image,
                description: ammosJson[item].description,
                type: ammosJson[item].type,
                attackPower: ammosJson[item].attackPower,
                passive: ammosJson[item].passive
            };
            await this.ammoRepository.save(obj)
        }

        setTimeout(() => {
            console.log('filling the table armors');
        }, 2000);

        for (const item in armorJson) {
            console.log(armorJson[item])
            const obj = {
                name: armorJson[item].name,
                image: armorJson[item].image,
                description: armorJson[item].description,
                category: armorJson[item].category,
                dmgNegation: armorJson[item].dmgNegation,
                resistance: armorJson[item].resistance,
                weight: armorJson[item].weight
            };
            await this.armorRepository.save(obj)
        }

        setTimeout(() => {
            console.log('filling the table ashes');
        }, 2000);

        for (const item in ashesJson) {
            console.log(ashesJson[item])
            const obj = {
                name: ashesJson[item].name,
                image: ashesJson[item].image,
                description: ashesJson[item].description,
                affinity: ashesJson[item].affinity,
                skill: ashesJson[item].skill,
            };
            await this.asheRepository.save(obj)
        }

        setTimeout(() => {
            console.log('filling the table bosses');
        }, 2000);

        for (const item in bossesJson) {
            console.log(bossesJson[item])
            const obj = {
                name: bossesJson[item].name,
                image: bossesJson[item].image,
                region: bossesJson[item].region,
                description: bossesJson[item].description,
                location: bossesJson[item].location,
                drops: String(bossesJson[item].drops),
                healthPoints: String(bossesJson[item].healthPoints)
            };
            await this.bossesRepository.save(obj)
        }

        setTimeout(() => {
            console.log('filling the table classes');
        }, 2000);

        for (const item in classesJson) {
            console.log(classesJson[item])
            const obj = {
                name: classesJson[item].name,
                image: classesJson[item].image,
                description: classesJson[item].description,
                stats: classesJson[item].stats,
            };
            await this.classesRepository.save(obj)
        }

        setTimeout(() => {
            console.log('filling the table creatures');
        }, 2000);

        for (const item in creaturesJson) {
            console.log(creaturesJson[item])
            const obj = {
                name: creaturesJson[item].name,
                image: creaturesJson[item].image,
                description: creaturesJson[item].description,
                location: creaturesJson[item].location,
                drops: String(creaturesJson[item].drops),
            };
            await this.creaturesRepository.save(obj)
        }

        setTimeout(() => {
            console.log('filling the table incantations');
        }, 2000);

        for (const item in incantationsJson) {
            console.log(incantationsJson[item])
            const obj = {
                name: incantationsJson[item].name,
                image: incantationsJson[item].image,
                description: incantationsJson[item].description,
                type: incantationsJson[item].type,
                cost: incantationsJson[item].cost,
                slots: incantationsJson[item].slots,
                effects: incantationsJson[item].effects,
                requires: incantationsJson[item].requires
            };
            await this.incantationsRepository.save(obj)
        }

        setTimeout(() => {
            console.log('filling the table items');
        }, 2000);

        for (const item in itemsJson) {
            console.log(itemsJson[item])
            const obj = {
                name: itemsJson[item].name,
                image: itemsJson[item].image,
                description: itemsJson[item].description,
                type: String(itemsJson[item].type),
                effect: itemsJson[item].effect,
                obtainedFrom: itemsJson[item].obtainedFrom,
            };
            await this.itemsRepository.save(obj)
        }

        setTimeout(() => {
            console.log('filling the table locations');
        }, 2000);

        for (const item in locationsJson) {
            console.log(locationsJson[item])
            const obj = {
                name: locationsJson[item].name,
                image: locationsJson[item].image,
                region: locationsJson[item].region,
                description: locationsJson[item].description,
            };
            await this.locationsRepository.save(obj)
        }

        setTimeout(() => {
            console.log('filling the table npcs');
        }, 2000);

        for (const item in npcsJson) {
            console.log(npcsJson[item])
            const obj = {
                name: npcsJson[item].name,
                image: npcsJson[item].image,
                quote: npcsJson[item].quote,
                location: npcsJson[item].location,
                role: npcsJson[item].role
            };
            await this.npcsRepository.save(obj)
        }

        setTimeout(() => {
            console.log('filling the table shields');
        }, 2000);

        for (const item in shieldsJson) {
            console.log(shieldsJson[item])
            const obj = {
                name: shieldsJson[item].name,
                image: shieldsJson[item].image,
                description: shieldsJson[item].description,
                attack: shieldsJson[item].attack,
                defense: shieldsJson[item].defence,
                scalesWith: shieldsJson[item].scalesWith,
                requiredAttributes: shieldsJson[item].requiredAttributes,
                category: shieldsJson[item].category,
                weight: shieldsJson[item].weight

            };
            await this.shieldsRepository.save(obj)
        }

        setTimeout(() => {
            console.log('filling the table sorceries');
        }, 2000);

        for (const item in sorceriesJson) {
            console.log(sorceriesJson[item])
            const obj = {
                name: sorceriesJson[item].name,
                image: sorceriesJson[item].image,
                description: sorceriesJson[item].description,
                type: sorceriesJson[item].type,
                cost: sorceriesJson[item].cost,
                slots: sorceriesJson[item].slots,
                effects: sorceriesJson[item].effects,
                requires: sorceriesJson[item].requires,

            };
            await this.sorceriesRepository.save(obj)
        }

        setTimeout(() => {
            console.log('filling the table spirits');
        }, 2000);

        for (const item in spiritsJson) {
            console.log(spiritsJson[item])
            const obj = {
                name: spiritsJson[item].name,
                image: spiritsJson[item].image,
                description: spiritsJson[item].description,
                fpCost: spiritsJson[item].fpCost,
                hpCost: spiritsJson[item].hpCost,
                effect: spiritsJson[item].effect,
            };
            await this.spiritsRepository.save(obj)
        }

        setTimeout(() => {
            console.log('filling the table talismans');
        }, 2000);

        for (const item in talismansJson) {
            console.log(talismansJson[item])
            const obj = {
                name: talismansJson[item].name,
                image: talismansJson[item].image,
                description: talismansJson[item].description,
                effect: talismansJson[item].effect,
            };
            await this.talismansRepository.save(obj)
        }

        setTimeout(() => {
            console.log('filling the table weapons');
        }, 2000);

        for (const item in weaponsJson) {
            console.log(weaponsJson[item])
            const obj = {
                name: weaponsJson[item].name,
                image: weaponsJson[item].image,
                description: weaponsJson[item].description,
                attack: weaponsJson[item].attack,
                defence: weaponsJson[item].defence,
                scalesWith: weaponsJson[item].scalesWith,
                requiredAttributes: weaponsJson[item].requiredAttributes,
                category: weaponsJson[item].category,
                weight: weaponsJson[item].weight
            };
            await this.weaponsRepository.save(obj)
        }

    };



}
export const script = new Script();
