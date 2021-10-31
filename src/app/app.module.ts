import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { ListItemLinkComponent } from './list-item-link/list-item-link.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailsComponent,
    AllCharactersComponent,
    ListItemLinkComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
