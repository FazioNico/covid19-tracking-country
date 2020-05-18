import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { COMPONENTS } from './components';
import { PIPES } from './pipes';
import { SERVICES } from './services';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    PIPES
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
    SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
