import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Ashes {

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
        affinity: string;

    @Column()
        skill: string;

}
