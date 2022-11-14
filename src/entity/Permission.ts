import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export enum Permissions {
    CREATE = "can_create_items",
    UPDATE = "can_update_items",
    DELETE = "can_delete_items",
    ADMIN = "can_manage_roles"
}

@Entity('perms')
export class Permission {

    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        type: "enum",
        enum: Permissions
    })
        permission: Permissions;

    @Column()
        isActive: boolean;

    @Column()
        userId: string;
}
