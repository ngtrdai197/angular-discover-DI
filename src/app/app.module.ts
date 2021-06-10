import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroBiosComponent } from './hero-bios/hero-bios.component';
import { HeroBioComponent } from './hero-bio/hero-bio.component';
import { FormsModule } from '@angular/forms';
import { HeroContactComponent } from './hero-contact/hero-contact.component';
import { StorageComponent } from './storage/storage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroBiosComponent,
    HeroBioComponent,
    HeroContactComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
