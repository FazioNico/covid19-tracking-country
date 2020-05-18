import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitHubSertvice } from './services/github-api.service';
import { HttpClientModule } from '@angular/common/http';
import { GroupByPipe } from './pipes/groupby.pipe';
import { OlMapComponent } from './olmap.component';
import { IonicModule } from '@ionic/angular';
import { DetailsComponent } from './details.components';
import { ChartComponent } from './chart.component';

@NgModule({
  declarations: [
    AppComponent,
    OlMapComponent,
    DetailsComponent,
    ChartComponent,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot({
      mode: 'md'
    })
  ],
  providers: [
    GitHubSertvice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
