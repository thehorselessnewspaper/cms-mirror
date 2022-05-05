import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantChooserComponent } from './tenant-chooser.component';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [TenantChooserComponent],
  imports: [
    CommonModule, 
    MatListModule,
    MatSliderModule
  ],
  exports: [
    TenantChooserComponent]
})
export class TenantChooserModule { }
