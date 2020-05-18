import { Injectable } from '@angular/core';
import { GitHubService } from './github-api.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, first } from 'rxjs/operators';
import { CSVService } from './csv.service';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  private _data$: BehaviorSubject<any> = new BehaviorSubject([]);
  public data$ = this._data$.asObservable();

  constructor(
    private _githubService: GitHubService,
    private _csvService: CSVService
  ) {}

  async load() {
    const result = await this._githubService.load().pipe(
      map((csv: string) => {
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
      return err;
    });
    this._data$.next(result);
  }

}
