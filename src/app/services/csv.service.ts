import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CSVService {

  toJSON(csv: string): {}[] {
    const titles = csv.slice(0, csv.indexOf('\n')).split(',');
    const rows = csv.slice(csv.indexOf('\n') + 1).split('\n');
    const data = rows.map(row => {
        const values = row.split(',');
        return titles.reduce((object, curr, i) => (object[curr] = values[i], object), {});
    });
    return data;
  }


  jsonToCSV( data: {}[] ) {
    return '';
  }

}
