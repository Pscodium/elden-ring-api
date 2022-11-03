import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Spirits {

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
        fpCost: number;

    @Column()
        hpCost: number;

    @Column()
        effect: string;

}
