import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const mockData = [
  {
    "Active": "35",
    "Admin2": "Abbeville",
    "Combined_Key": "Abbeville",
    Confirmed: "35",
    Country_Region: "US",
    Deaths: "0",
    FIPS: "45001",
    Last_Update: "2020-05-18 02:32:21",
    Lat: "34.22333378",
    Long_: "-82.46170658",
    Province_State: "South Carolina",
    Recovered: "0"
  }
];

@Injectable({
  providedIn: 'root'
})
export class GitHubSertvice {

  apiurl: string = 'https://api.github.com/repos/CSSEGISandData/COVID-19/contents/csse_covid_19_data/csse_covid_19_daily_reports/05-17-2020.csv';
  private _data$: BehaviorSubject<any> = new BehaviorSubject([]);
  public data$ = this._data$.asObservable();

  constructor(
    private _httpClient: HttpClient
  ) {}

  async load() {
    const data = await this._httpClient.get(this.apiurl).toPromise()
      .then((response: any) =>  {
        const {content = ''} = response;
        return decodeURIComponent(escape(window.atob( content )));
      })
      .then(csv => {
        const titles = csv.slice(0, csv.indexOf('\n')).split(',');
        const rows = csv.slice(csv.indexOf('\n') + 1).split('\n');
        const data = rows.map(row => {
            const values = row.split(',');
            return titles.reduce((object, curr, i) => (object[curr] = values[i], object), {});
        });
        return data;
      });
    this._data$.next(data);
  }
}