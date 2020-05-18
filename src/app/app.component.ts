import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GitHubSertvice } from './services/github-api.service';
import { Observable } from 'rxjs';
import { OlMapComponent } from './olmap.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('map') map: OlMapComponent;
  title = 'Covid19TrackingCountry';
  datas$: Observable<any>;

  constructor(
    private _api: GitHubSertvice
  ) {}

  async ngOnInit() {
    await this.load();
    // this.map.addFeatures();
  }

  async load() {
    this.datas$ = this._api.data$;
    await this._api.load().catch(err => err);
  }

}
