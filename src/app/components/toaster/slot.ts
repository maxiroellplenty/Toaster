import { isNullOrUndefined } from 'util';
import { ToastRules, Stage } from './toast.helpers';
import { timer, Observable } from 'rxjs';
export class Slot
{
    public    id:any;
    public    temperature:number = 0;
    public    filled:boolean;
    public    time:number;
    private   interval;
    public    observer:Observable<any>;

    constructor(id)
    {
        this.id = id;
    }

    public startHeater(stage:Stage)
    {
            if(this.time > 0)
            {
                return;
            }
            if(this.time <= 0 || isNullOrUndefined(this.time))
            {
                this.time = stage.time;
            }
            this.observer = timer(this.time * 1000);
            this.interval = setInterval(() => 
            {
                if(this.time > 0) 
                {
                    this.time--;
                    if(this.temperature < stage.temp && this.temperature < ToastRules.MAXTEMP)
                    {
                        this.temperature = this.temperature + 50;
                    }
                    if(this.temperature > stage.temp)
                    {
                        this.temperature = this.temperature - 20;
                    }
                } 
                else 
                {
                    clearInterval(this.interval);
                }
            },1000);
    }

    public stopHeater()
    {
        this.observer = null;
        this.time = 0;
        clearInterval(this.interval);
    }
}