import { HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
export declare class PdfService {
    private httpService;
    constructor(httpService: HttpService);
    create(): Promise<Observable<AxiosResponse<any[]>>>;
}
