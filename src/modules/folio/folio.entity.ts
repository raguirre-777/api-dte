import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('folio')
export class Folio extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'numeric' })
    tipoDocumento: number;

    @Column({ type: 'varchar' })
    folioDocumento: string;

}
