import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Armors {

    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column()
        image: string;

    @Column({
        length: 2000
    })
        description: string;

    @Column()
        category: string;

    @Column({
        length: 2000
    })
        dmgNegation: string;

    @Column({
        length: 2000
    })
        resistance: string;

    @Column({type: "decimal", precision: 5, scale: 2, default: 0})
        weight: number;
}
