export enum ToastRules
{
    MAXTIME = 50,
    MAXTEMP = 500,
}

export enum Stages
{
    LIGHT = 'light',
    MEDIUM = 'medium',
    DARK = 'dark'
}

export interface Stage
{
    name:string;
    time:number;
    temp:number;
}
