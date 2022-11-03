import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Ammos {

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
        attackPower: string;

    @Column({
        default: '-'
    })
        passive: string;

}
