import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Ashes {

    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column()
        image: string;

    @Column()
        description: string;

    @Column()
        affinity: string;

    @Column()
        skill: string;

}
