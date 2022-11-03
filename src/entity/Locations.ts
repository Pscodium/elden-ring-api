import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Locations {

    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column()
        image: string;

    @Column()
        region: string;

    @Column({
        length: 2000
    })
        description: string;

}
