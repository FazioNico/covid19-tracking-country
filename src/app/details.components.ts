import { Component, Input, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  template: `
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-icon (click)="modalCtrl.dismiss()" name="close-circle-outline"></ion-icon>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="ion-text-center">
            <ion-text>
              <h1>{{value?.title}}</h1>
            </ion-text>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="6">
            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  Confirmed: {{value?.data[0]}}
                </ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col size="6">
            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  Recovered: {{value?.data[1]}}
                </ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col size="6">
            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  Active: {{value?.data[2]}}
                </ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col size="6">

          <ion-card>
              <ion-card-header>
                <ion-card-title>
                  Deaths: {{value?.data[3]}}
                </ion-card-title>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

      <app-chart
          [title]="value?.title"
          [labels]="value?.labels"
          [data]="value?.data"></app-chart>
    </ion-content>
  `,
  styles: []
})
export class DetailsComponent implements AfterViewInit {
  
  @Input() value: {labels: string[], data: number[], title: string};

  constructor(
    public modalCtrl: ModalController
  ) {

  }

  ngAfterViewInit() {
    console.log('-->', this.value);
  }

}