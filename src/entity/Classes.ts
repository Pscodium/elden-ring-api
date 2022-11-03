import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Classes {

    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column()
        image: string;

    @Column()
        description: string;

    @Column()
        stats: string;

}
