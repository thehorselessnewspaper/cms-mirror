import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantEditorComponent } from './tenant-editor.component';
import {HorselessApiModule} from '@wizardcontrollerprerelease/horseless-contentapi-lib'


@NgModule({
  declarations: [TenantEditorComponent],
  imports: [
    CommonModule,
    HorselessApiModule
  ],
  exports: [
    TenantEditorComponent]
})
export class TenantEditorModule { }
