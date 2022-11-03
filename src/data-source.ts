import "reflect-metadata";
import { DataSource } from "typeorm";
import { Ammos } from "./entity/Ammos";
import { Armors } from "./entity/Armors";
import { Ashes } from "./entity/Ashes";
import { Bosses } from "./entity/Bosses";
import { Classes } from "./entity/Classes";
import { Creatures } from "./entity/Creatures";
import { Incantations } from "./entity/Incantations";
import { Items } from "./entity/Items";
import { Locations } from "./entity/Locations";
import { Npcs } from "./entity/Npcs";
import { Shields } from "./entity/Shields";
import { Sorceries } from "./entity/Sorceries";
import { Spirits } from "./entity/Spirits";
import { Talismans } from "./entity/Talismans";
import { Weapons } from "./entity/Weapons";
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Ammos, Armors, Ashes, Bosses, Classes, Creatures, Incantations, Items, Locations, Npcs, Shields, Sorceries, Spirits, Talismans, Weapons],
    migrations: [],
    subscribers: [],
});
