import { NotificationService } from './notification.service';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
@Injectable()
export class ErrorHandlerService implements ErrorHandler 
{
    constructor(private injector: Injector,private notificationService:NotificationService) { }
    handleError(error) 
    {
        this.notificationService.addAlert('alert-danger',error.message,5);
        throw error;
   }
}