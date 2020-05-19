import { Injectable } from '@angular/core';
import { GitHubService } from './github-api.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CSVService } from './csv.service';
import { environment } from 'src/environments/environment';
import { mockData } from './covid19.mock';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  private _data$: BehaviorSubject<any> = new BehaviorSubject([]);
  public data$: Observable<any> = this._data$.asObservable();

  constructor(
    private _githubService: GitHubService,
    private _csvService: CSVService
  ) {}

  async load() {
    // build api url path
    const baseApi = `${environment.apiBase}/csse_covid_19_daily_reports`;
    const date = new Date();
    const month = date.getMonth() < 10 ?  '0' + (date.getMonth() + 1) : (date.getMonth() + 1).toString();
    const day = (date.getDate() - 1)  < 10 ?  '0' + (date.getDate() - 1) : (date.getDate() - 1).toString();
    const year = date.getFullYear();
    const apiUrl = `${baseApi}/${month}-${day }-${year}.csv`;
    // request service
    const result = await this._githubService.load(apiUrl).pipe(
      map((csv: string) => {
        // use CSVService injected
        return this._csvService.toJSON(csv);
      }),
      map(data => {
        return data.map(el => {
          return {
            ...el,
            Confirmed: parseInt(el['Confirmed'], 10),
            Deaths: parseInt(el['Deaths'], 10),
            Active: parseInt(el['Active'], 10),
            Recovered: parseInt(el['Recovered'], 10),
          };
        });
      })
    )
    .toPromise()
    .catch(err => {
      console.log('err:', err);
      // use mock data if have api resopons error
      return mockData;
    });
    this._data$.next(result);
  }

}
