import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'totalBy'})
export class TotalByPipe implements PipeTransform {
    transform(value: Array<any>, objKey: string): number {
      // prevents the application from breaking if the array of objects doesn't exist yet
      if (!value) {
          return null;
      }
      return value.reduce((prev, next) => {
        if (!next || !next[objKey]) return prev;
        return prev + parseInt(next[objKey], 10);
      }, 0);
    }
}