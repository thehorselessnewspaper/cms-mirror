import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentAccessControlEntryTableComponent } from './contentAccessControlEntry-table.component';
import {TableModule} from 'primeng/table';
import { HorselessTagsPipesModule } from  '../../../pipe/horseless-tags-pipes/horseless-tags-pipes.module';

@NgModule({
  imports: [
    CommonModule, TableModule, HorselessTagsPipesModule
  ],
  declarations: [ContentAccessControlEntryTableComponent],
  exports: [ContentAccessControlEntryTableComponent]
})
export class ContentAccessControlEntryTableModule { }
