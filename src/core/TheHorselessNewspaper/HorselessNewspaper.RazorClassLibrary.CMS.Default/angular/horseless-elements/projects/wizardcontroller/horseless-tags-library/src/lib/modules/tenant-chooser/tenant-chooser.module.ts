import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantChooserComponent } from './tenant-chooser.component';



@NgModule({
  declarations: [TenantChooserComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TenantChooserComponent]
})
export class TenantChooserModule { }
