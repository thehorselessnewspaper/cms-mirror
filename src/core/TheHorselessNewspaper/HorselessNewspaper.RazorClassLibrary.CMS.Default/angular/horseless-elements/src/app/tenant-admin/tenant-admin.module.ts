import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantAdminComponent } from './tenant-admin.component';
import { HorselessTagsModule } from '../horseless-tags/horseless-tags.module';

@NgModule({
  imports: [
    CommonModule, HorselessTagsModule
  ],
  declarations: [TenantAdminComponent]
})
export class TenantAdminModule { }
