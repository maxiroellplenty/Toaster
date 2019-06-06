import { NotificationService } from './../../service/notification.service';
import { Component, OnInit } from '@angular/core';
import { Toaster } from './toaster.component';

@Component({
    selector: 'power-toaster',
    templateUrl: './toaster.component.html',
    styleUrls:['./toaster.component.scss']
})
export class PowerToaster extends Toaster
{
    constructor(private notificationService:NotificationService)
    {
        super();
        this.color = 'gray';
        this.addSlot(1);
        this.addSlot(2);
        this.addSlot(3);
        this.addSlot(4);
        this.addSlot(5);
        this.addStage('light',10,200);
        this.addStage('medium',20,300);
        this.addStage('dark',20,400);
        this.addStage('ultra',20,500);
        this.runRoutine();
    }

    private runRoutine()
    {
        this.addToast(1);
        this.addToast(2);
        this.setStage('medium');
        this.start();
        this.slots.forEach((slot)=>
        {
            if(slot.filled)
            {
                slot.observer.subscribe((res)=>
                {
                    let message = 'Toast aus Schacht ' + slot.id + ' ist fertig';
                    this.notificationService.addAlert('alert-success',message,10);
                })
            }
        })
    }
}