import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    transform(value: string, args: boolean = true) : string {
        // if(args)
        //     return value.toUpperCase();
        // else return value.toLocaleLowerCase();
        return(args) 
            ? value.toUpperCase() 
            : value.toLocaleLowerCase();
    }
}