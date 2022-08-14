import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantEditorComponent } from './tenant-editor.component';


@NgModule({
  declarations: [TenantEditorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TenantEditorComponent]
})
export class TenantEditorModule { }
