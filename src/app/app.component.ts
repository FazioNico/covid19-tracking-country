import { Component } from '@angular/core';
import { GitHubSertvice } from './services/github-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Covid19TrackingCountry';
  datas$: Observable<any>;

  constructor(
    private _api: GitHubSertvice
  ) {}

  async load() {
    await this._api.load().catch(err => err);
    this.datas$ = this._api.data$;
  }

}
