import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Car {
    @PrimaryColumn()
    id: number | undefined;

    @Column()
    owner: string | undefined;

    @Column()
    color: number | undefined;
}