import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './components/main/main/main.component';
import { GraphComponent } from './graph/graph.component';
import { NgxLeaderLineModule } from 'ngx-leader-line';




@NgModule({
  declarations: [
    AppComponent,

    MainComponent,
     GraphComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxLeaderLineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
