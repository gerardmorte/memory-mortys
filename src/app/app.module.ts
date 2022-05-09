import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChooseLevelComponent } from './choose-level/choose-level.component';
import { BoardGameComponent } from './board-game/board-game.component';

@NgModule({
  declarations: [
    AppComponent,
    ChooseLevelComponent,
    BoardGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
