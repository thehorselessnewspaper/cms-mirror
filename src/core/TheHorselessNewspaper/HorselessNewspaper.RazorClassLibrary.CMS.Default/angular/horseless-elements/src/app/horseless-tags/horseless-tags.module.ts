import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorselessTagsComponent } from './horseless-tags.component';
import { ApiModule, Configuration, ConfigurationParameters } from '@wizardcontroller/horseless-contentapi-lib';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HorselessTagsComponent]
})
export class HorselessTagsModule { }
