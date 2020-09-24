import {
    HttpService,
    Injectable,
} from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
@Injectable()
export class PdfService {
    constructor(private httpService: HttpService) { }

    async create(): Promise<Observable<AxiosResponse<any[]>>> {
        return await this.httpService.put('http://10.83.45.21:8000/utiles/getUrlPublico.php?rut_emisor=76211240&tipo=39&folio=8306');;
    }
}