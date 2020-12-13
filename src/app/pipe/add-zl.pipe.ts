import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addZl'
})
export class AddZlPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value + ' zł';
  }

}
