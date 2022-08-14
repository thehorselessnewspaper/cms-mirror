import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostingAccessControlEntryTableComponent } from './hostingAccessControlEntry-table.component';
import {TableModule} from 'primeng/table';
import {MatIconModule} from '@angular/material/icon';
import { HorselessTagsPipesModule } from  '../../../pipe/horseless-tags-pipes/horseless-tags-pipes.module';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  imports: [
    CommonModule, HorselessTagsPipesModule, TableModule, MatExpansionModule, MatIconModule
  ],
  declarations: [HostingAccessControlEntryTableComponent],
  exports: [HostingAccessControlEntryTableComponent]
})

export class HostingAccessControlEntryTableModule { }
