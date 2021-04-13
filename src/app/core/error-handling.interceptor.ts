import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { MessageService } from "./message.service";

import "rxjs/add/operator/catch";
import { Injectable } from "@angular/core";

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
    constructor(private messageService: MessageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        console.log(req);
        return next.handle(req).catch(error => {
            if (error instanceof HttpErrorResponse) {
                this.messageService.error(`Błąd połączenia: ${error.message}`);
            }
            return Observable.throw(error);
        });
    }

}