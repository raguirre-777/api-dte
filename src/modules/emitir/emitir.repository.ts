import { Repository, EntityRepository } from 'typeorm';
import { Emitir } from './emitir.entity';


@EntityRepository(Emitir)
export class EmitirRepository extends Repository<Emitir>{ }