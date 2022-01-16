import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HorselessTagsModule } from './horseless-tags/horseless-tags.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, HorselessTagsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
