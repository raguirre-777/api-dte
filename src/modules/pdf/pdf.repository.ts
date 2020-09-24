import { Repository, EntityRepository } from 'typeorm';
import { Pdf } from './pdf.entity';

@EntityRepository(Pdf)
export class PdfRepository extends Repository<Pdf>{ }