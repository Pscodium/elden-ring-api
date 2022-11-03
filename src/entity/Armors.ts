import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Armors {

    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column()
        image: string;

    @Column()
        description: string;

    @Column()
        category: string;

    @Column()
        dmgNegation: string;

    @Column()
        resistance: string;

    @Column()
        weight: number;
}
