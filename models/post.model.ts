import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryColumn()
    id: number | undefined;

    @Column()
    firstname: string | undefined;

    @Column()
    lastname: string | undefined;

    @Column()
    email: string | undefined;
}