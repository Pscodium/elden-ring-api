import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Classes {

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

    @Column({
        length: 2000
    })
        stats: string;

}
