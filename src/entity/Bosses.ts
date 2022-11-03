import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Bosses {

    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column()
        image: string;

    @Column()
        region: string;

    @Column()
        description: string;

    @Column()
        location: string;

    @Column()
        drops: string;

    @Column()
        healthPoints: number;

}
