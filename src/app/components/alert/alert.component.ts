import { NotificationService } from './../../service/notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
    public errors;
    constructor(public notificationService:NotificationService) 
    {
        this.errors = this.notificationService.errors;
    }

    ngOnInit(): void { }
}
