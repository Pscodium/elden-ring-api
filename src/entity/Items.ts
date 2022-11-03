import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Items {

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
        effect: string;

    @Column()
        obtainedFrom: string;
}
