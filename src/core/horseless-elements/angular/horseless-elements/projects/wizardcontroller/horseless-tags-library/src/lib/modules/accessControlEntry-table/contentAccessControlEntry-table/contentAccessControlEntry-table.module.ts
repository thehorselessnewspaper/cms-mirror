import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentAccessControlEntryTableComponent } from './contentAccessControlEntry-table.component';
import {TableModule} from 'primeng/table';
import { HorselessTagsPipesModule } from  '../../../pipe/horseless-tags-pipes/horseless-tags-pipes.module';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
@NgModule({
  imports: [
    CommonModule, TableModule, HorselessTagsPipesModule, MatExpansionModule, MatIconModule
  ],
  declarations: [ContentAccessControlEntryTableComponent],
  exports: [ContentAccessControlEntryTableComponent]
})

export class ContentAccessControlEntryTableModule { }
