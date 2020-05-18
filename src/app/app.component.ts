import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { OlMapComponent } from './components/olmap/olmap.component';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from './components/details/details.components';
import { Covid19Service } from './services/covid19.service';

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
    private _api: Covid19Service,
    public modalCtrl: ModalController
  ) {}

  async ngOnInit() {
    await this.load();
  }

  async load() {
    this.datas$ = this._api.data$;
    await this._api.load().catch(err => err);
  }

  async handleActions($event) {
    console.log('output: ', $event);
    const {type =  null, payload = null} = $event;
    switch (true) {
      case type === 'openModal':
        this._openModal(payload);
        break;
      default:
        break;
    }
  }

  private async  _openModal(payload) {
    const ionModal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: {value: {
        title: payload.key,
        labels: ['Confirmed', 'Recovered', 'Active', 'Deaths'],
        data: [
          payload.value.reduce((prev, next) => {
            return prev + parseInt(next.Confirmed, 10);
          }, 0),
          payload.value.reduce((prev, next) => {
            return prev + parseInt(next.Recovered, 10);
          }, 0),
          payload.value.reduce((prev, next) => {
            return prev + parseInt(next.Active, 10);
          }, 0),
          payload.value.reduce((prev, next) => {
            return prev + parseInt(next.Deaths, 10);
          }, 0)
        ]
      }}
    });
    await ionModal.present();
  }

}
