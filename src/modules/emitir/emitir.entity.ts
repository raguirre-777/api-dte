import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from 'typeorm';


@Entity('emitir')
export class Emitir extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', nullable: true })
    tipoDocumento: number;

    @Column({ type: 'varchar', nullable: true })
    folio: string;

    @Column({ type: 'varchar', nullable: true })
    estado: string;

    @Column({ type: 'varchar', nullable: true })
    mensaje: string;



}
