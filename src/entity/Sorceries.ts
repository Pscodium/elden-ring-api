import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Sorceries {

    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column()
        image: string;

    @Column()
        description: string;

    @Column()
        type: string;

    @Column()
        cost: number;

    @Column()
        slots: number;

    @Column()
        effects: string;

    @Column()
        requires: string;

}
