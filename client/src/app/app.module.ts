import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GamesDisplayComponent } from './components/games-display.component';
import { NumberSelectComponent } from './components/number-select.component';
import { HttpClientModule } from '@angular/common/http'
import { GamesService } from './games.service';
@NgModule({
  declarations: [
    AppComponent,
    GamesDisplayComponent,
    NumberSelectComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  // include GamesService here
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
