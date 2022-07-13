import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPrincipalTableComponent } from './contentPrincipal-table.component';
import { PrincipalQueryService } from './services/principalQuery.service';
import {TableModule} from 'primeng/table';
import { HorselessTagsPipesModule } from  '../../../../pipe/horseless-tags-pipes/horseless-tags-pipes.module';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule, MatIconModule, MatExpansionModule, HorselessTagsPipesModule, TableModule
  ],
  providers: [PrincipalQueryService],
  declarations: [ContentPrincipalTableComponent],
  exports: [ContentPrincipalTableComponent]
})
export class ContentPrincipalTableModule { }
