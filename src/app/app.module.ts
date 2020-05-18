import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitHubSertvice } from './services/github-api.service';
import { HttpClientModule } from '@angular/common/http';
import { GroupByPipe } from './pipes/groupby.pipe';
import { OlMapComponent } from './olmap.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    OlMapComponent,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],
  providers: [
    GitHubSertvice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
