import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
class Payment {
    @PrimaryColumn()
    id!: number

    @Column()
    paymentType!: number

    @Column({length: 20})
    cardNum!: number

    @Column({length: 4})
    cardExp!: number

    @Column({length: 5})
    securityCode!: number
}

/*
MODEL EXAMPLE:
    PAYMENT TYPE: CARD, CASH, LOAN
    CARDNUM: 0000111122223333 OR 000011112222333
    CARDEXP: 0922
    SECURITYCODE: 000 OR 0000

 */