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

    @Column({
        length: 2000
    })
        description: string;

    @Column()
        location: string;

    @Column({
        length: 2000
    })
        drops: string;

    @Column('varchar')
        healthPoints: string;

}
