import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Weapons {

    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column()
        image: string;

    @Column()
        description: string;

    @Column()
        attack: string;

    @Column()
        defense: string;

    @Column()
        scalesWith: string;

    @Column()
        requiredAttributes: string;

    @Column()
        category: string;

    @Column()
        weight: number;

}
