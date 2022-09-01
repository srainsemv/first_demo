import { Entity, Column, PrimaryColumn, Relation } from "typeorm";

@Entity()
class User {
    @PrimaryColumn()
    id!: number

    @Column({length: 256})
    firstname!: string

    @Column({length: 256})
    lastname!: string

    @Column({length: 256})
    email!: string

    @Column()
    phone!: number

    @Column()
    address!: string

    @Column()
    address2!: string

    @Column()
    city!: string

    @Column()
    state!: string

    @Column({length: 5})
    zipcode!: number

    @Column()
    country!: string
}