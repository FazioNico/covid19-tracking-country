import { Component, Input, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons (click)="modalCtrl.dismiss()" slot="start">
          <ion-icon size="large" name="close-outline"></ion-icon>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-grid>
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
              <ion-card-header color="primary" class="ion-text-center">
                <ion-card-title>
                  {{value?.data[0]}}
                </ion-card-title>
                <ion-card-subtitle>
                  Confirmed
                </ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col size="6">
            <ion-card>
              <ion-card-header color="success" class="ion-text-center">
                <ion-card-title>
                  {{value?.data[1]}}
                </ion-card-title>
                <ion-card-subtitle>
                  Recovered
                </ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col size="6">
            <ion-card>
              <ion-card-header color="warning" class="ion-text-center">
                <ion-card-title>
                  {{value?.data[2]}}
                </ion-card-title>
                <ion-card-subtitle>
                  Active
                </ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
          <ion-col size="6">
          <ion-card>
              <ion-card-header color="danger" class="ion-text-center">
                <ion-card-title>
                  {{value?.data[3]}}
                </ion-card-title>
                <ion-card-subtitle>
                  Deaths
                </ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <app-chart
                [title]="value?.title"
                [labels]="value?.labels"
                [data]="value?.data"></app-chart>
          </ion-col>
        </ion-row>
      </ion-grid>


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