import {Column,Entity,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,BaseEntity} from 'typeorm'

@Entity()
export class todoList extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tarea: string;

    @Column({ type: 'date' })
    fechaInicio: string;

    @Column({ type: 'date' })
    fechaFin: string;

    @Column({
        default: "Pendiente"
    })
    status : string;

    @Column()
    prioridad: string;

    @Column()
    responsable: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAd: Date;
}