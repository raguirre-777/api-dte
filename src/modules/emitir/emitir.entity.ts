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

    @Column({ type: 'varchar', nullable: false })
    tipoDocumento: number;


}
