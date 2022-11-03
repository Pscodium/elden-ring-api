import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Talismans {

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
        effect: string;

}
