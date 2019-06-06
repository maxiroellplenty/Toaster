import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { Alert } from '../components/alert/alert.interface';

@Injectable()
export class NotificationService 
{
    public errors:Array<Alert> = [];

    public addAlert(type, message, time):void
    {
        let alert = 
        {
            message: message,
            time: time,
            type: type
        }
        this.errors.push(alert);
        let observer = timer(time * 1000);
        observer.subscribe((res)=>
        {
            this.removeAlert();
        })
    }
    public removeAlert():void
    {
        this.errors.shift();
    }
}