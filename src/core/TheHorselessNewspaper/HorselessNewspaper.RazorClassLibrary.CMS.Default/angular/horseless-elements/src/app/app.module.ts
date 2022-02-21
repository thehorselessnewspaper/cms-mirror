import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HorselessTagsLibraryModule } from '@wizardcontroller/horseless-tags-library/public-api';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor() {

  }


}
