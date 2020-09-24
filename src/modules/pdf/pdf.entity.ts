import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('pdf')
export class Pdf extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', nullable: false })
    pdf: string;

}
