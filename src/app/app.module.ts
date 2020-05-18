import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitHubSertvice } from './services/github-api.service';
import { HttpClientModule } from '@angular/common/http';
import { GroupByPipe } from './pipes/groupby.pipe';
import { OlMapComponent } from './olmap.component';

@NgModule({
  declarations: [
    AppComponent,
    OlMapComponent,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GitHubSertvice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
