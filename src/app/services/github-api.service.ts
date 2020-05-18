import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Base64Service } from './base64.service';
import { CSVService } from './csv.service';
import { map } from 'rxjs/operators';

const mockData = [
  {
    "Active": "35",
    "Admin2": "Abbeville",
    "Combined_Key": "Abbeville",
    Confirmed: "35",
    Country_Region: "US",
    Deaths: "100",
    FIPS: "45001",
    Last_Update: "2020-05-18 02:32:21",
    Lat: "34.22333378",
    Long_: "-82.46170658",
    Province_State: "South Carolina",
    Recovered: "0"
  },
  {
    "Active": "135",
    "Admin2": "Abbeville",
    "Combined_Key": "Genève",
    Confirmed: "135",
    Country_Region: "CH",
    Deaths: "0",
    FIPS: "45001",
    Last_Update: "2020-05-18 02:32:21",
    Lat: "32.22333378",
    Long_: "-82.46170658",
    Province_State: "Genève",
    Recovered: "10"
  }
];

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  apiurl: string = 'https://api.github.com/repos/CSSEGISandData/COVID-19/contents/csse_covid_19_data/csse_covid_19_daily_reports/05-17-2020.csv';

  constructor(
    private _httpClient: HttpClient,
    private _base64Service: Base64Service
  ) {}

  load() {
    return this._httpClient.get(this.apiurl)
    .pipe(
      map((response: any) =>  {
        const {content = ''} = response;
        return this._base64Service.to_utf8(content);
      }),
    );
    // .toPromise()
    //   // .then((response: any) =>  {
    //   //   const {content = ''} = response;
    //   //   return this._base64Service.to_utf8(content);
    //   // })
    //   .catch(err => {
    //     console.log(err);
    //     // handle error and display to dev or user...
    //     return mockData;
    //   });
  }
}