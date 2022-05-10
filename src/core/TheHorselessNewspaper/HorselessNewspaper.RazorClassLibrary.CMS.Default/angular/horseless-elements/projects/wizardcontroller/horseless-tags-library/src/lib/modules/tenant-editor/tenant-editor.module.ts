import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantEditorComponent } from './tenant-editor.component';
import {HorselessApiModule} from '@wizardcontrollerprerelease/horseless-contentapi-lib'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [TenantEditorComponent],
  imports: [
    CommonModule,
    HorselessApiModule,
    HttpClientModule
  ],
  exports: [
    TenantEditorComponent]
})
export class TenantEditorModule { }
