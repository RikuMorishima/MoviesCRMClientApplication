import { Pipe, PipeTransform, ɵgetUnknownElementStrictMode } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value!=undefined) 
    return value.substring(0,20);
    else return "N/A"
  }

}
