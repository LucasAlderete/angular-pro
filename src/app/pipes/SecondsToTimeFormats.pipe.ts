import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name : 'secondsToTimeFormat'
})
export class SecondsToTimeFormat implements PipeTransform{
    transform(seconds : number, showMinutes : boolean = true) : string{
        //3600 => 1hr
        //3660 => 1hr 1min

        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor(seconds % 3600 / 60); 
        let str : string = "";
        
        if(showMinutes){
            str = `${hours}hrs ${minutes}min`;
        }else{
            str = `${hours}hrs`;
        }
        
        return str;
    }
    constructor() {
        
    }
}