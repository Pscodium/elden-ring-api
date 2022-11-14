import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcryptjs';

export enum UserRole {
    ADMIN = "admin",
    EDITOR = "editor",
    DEFAULT = "default"
}

@Entity('users')
export class Users {

    @PrimaryGeneratedColumn('uuid')
        id: string;

    @Column('varchar')
        name: string;

    @Column('varchar', { unique: true })
        email: string;

    @Column('varchar')
        password: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.DEFAULT
    })
        role: UserRole;

    @Column({
        default: false
    })
        isActive: boolean;

    @CreateDateColumn()
        createdAt: Date;

    @UpdateDateColumn()
        updatedAt: Date;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        // eslint-disable-next-line no-sync
        this.password = bcrypt.hashSync(this.password, 8);
    }
}
