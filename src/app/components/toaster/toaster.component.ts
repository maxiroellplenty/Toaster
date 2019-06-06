import { ToastRules, Stage, Stages } from './toast.helpers';
import { Component, OnInit } from '@angular/core';
import { Slot } from './slot';
import { isNullOrUndefined } from 'util';


@Component({
    selector: 'toaster',
    templateUrl: './toaster.component.html',
    styleUrls: ['./toaster.component.scss']
})
export class Toaster
{

    public  color:string;
    private stages:Array<Stage> = [];
    public  slots:Array<Slot> = [];
    public  currentStage:Stage;

    constructor()
    {
        this.currentStage = {name: 'light',temp:200,time:20}
    }

    protected removeToast(id): void
    {
        this.slots.forEach((slot)=>
        {
            if(slot.id === id)
            {
                slot.filled = false;
            }
        })
    }

    protected addToast(slotId): void
    {
        this.slots.forEach((slot)=>
        {
            if(slot.id === slotId)
            {
                slot.filled = true;
            }
        })
    }

    protected start(): void
    {
        let filledSlots;
        try 
        {
            filledSlots = this.getFilledSlots();
        }
        catch (error) 
        {
            throw error;
        }
        this.heatSlots(filledSlots);
    }

    protected stop(): void
    {
        this.slots.forEach((slot:Slot) =>
        {
            slot.stopHeater();
        });
    }
    protected addStage(name,time,temp)
    {
        this.stages.push(
        {
            temp: temp,
            time: time,
            name: name
        })
    }
    protected addSlot(id):void
    {
        let slot:Slot = new Slot(id);
        this.slots.push(slot);
    }
    public setStage(stage):void
    {
        if(!isNullOrUndefined(this.stages))
        {
            this.stages.forEach((_stage)=>
            {
                if(_stage.name === stage)
                {
                    this.currentStage = _stage;
                }
            })
        }
    }
    private heatSlots(filledSlots: any):void
    {
        if (!isNullOrUndefined(filledSlots)) {
            if (filledSlots.length >= 0) {
                filledSlots.forEach((slot: Slot) => {
                    slot.startHeater(this.currentStage);
                });
            }
        }
    }
    private getFilledSlots():Array<Slot>
    {
        let slots = this.slots.filter((entry) => {
            return entry.filled == true;
        });
        
        if(slots.length <= 0)
        {
            throw new Error('Es muss mindestens ein Fach befüllt sein');
        }
        return slots;
    }
}

