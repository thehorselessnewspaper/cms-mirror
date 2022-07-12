import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostingAccessControlEntryTableComponent } from './hostingAccessControlEntry-table.component';
import {TableModule} from 'primeng/table';

import { HorselessTagsPipesModule } from  '../../../pipe/horseless-tags-pipes/horseless-tags-pipes.module';


@NgModule({
  imports: [
    CommonModule, HorselessTagsPipesModule, TableModule
  ],
  declarations: [HostingAccessControlEntryTableComponent],
  exports: [HostingAccessControlEntryTableComponent]
})

export class HostingAccessControlEntryTableModule { }
