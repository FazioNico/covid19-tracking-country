import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'totalby'})
export class TotalByPipe implements PipeTransform {
    transform(value: Array<any>, objKey: string): Array<any> {
      // prevents the application from breaking if the array of objects doesn't exist yet
      if (!value) {
          return null;
      }
    }
}