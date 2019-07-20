import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bmi'
})
export class BmiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
