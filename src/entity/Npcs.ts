import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Npcs {

    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column()
        image: string;

    @Column()
        quote: string;

    @Column()
        location: string;

    @Column()
        role: string;

}
