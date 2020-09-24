import { Repository, EntityRepository } from 'typeorm';
import { Folio } from './folio.entity';

@EntityRepository(Folio)
export class FolioRepository extends Repository<Folio>{ }