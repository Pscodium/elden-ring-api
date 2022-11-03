import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Creatures {

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
        location: string;

    @Column()
        drops: string;

}
