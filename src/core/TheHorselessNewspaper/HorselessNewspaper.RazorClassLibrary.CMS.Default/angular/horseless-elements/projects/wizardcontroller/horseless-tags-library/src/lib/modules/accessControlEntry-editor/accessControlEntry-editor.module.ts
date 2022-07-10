import { Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { DataViewModule } from 'primeng/dataview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ContentAccessControlEntryEditorComponent } from './content/contentAccessControlEntry-editor/contentAccessControlEntry-editor.component'
import { HostingAccessControlEntryEditorComponent } from './hosting/hostingAccessControlEntry-editor/hostingAccessControlEntry-editor.component'
@NgModule({
  imports: [
    CommonModule,
    DataViewModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ContentAccessControlEntryEditorComponent, HostingAccessControlEntryEditorComponent
  ],
  exports: [
    ContentAccessControlEntryEditorComponent, HostingAccessControlEntryEditorComponent
  ]
})


export class AccessControlEntryEditorModule {

}
