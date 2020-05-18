import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'groupBy'})
export class GroupByPipe implements PipeTransform {
    transform(value: Array<any>, objKey: string): Array<any> {
      // prevents the application from breaking if the array of objects doesn't exist yet
      if (!value) {
          return null;
      }
      const groupedCollection = value.reduce((previous, current) => {
        if (!previous[current[objKey]]) {
            previous[current[objKey]] = [current];
        } else {
            previous[current[objKey]].push(current);
        }
        return previous;
      }, {});
      // this will return an array of objects, each object containing a group of objects
      return Object.keys(groupedCollection).map(key => ({
        key,
        totalConfirmed: groupedCollection[key].reduce((prev, next) => {
          return prev + parseInt(next.Confirmed, 10);
        }, 0),
        length: groupedCollection[key].length,
        value: groupedCollection[key]
      }))
      .filter(el => el.key !== 'undefined')
      .sort((a, b) => a.totalConfirmed - b.totalConfirmed)
      .reverse();
    }
}