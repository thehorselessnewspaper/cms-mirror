import { Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { DataViewModule } from 'primeng/dataview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ContentAccessControlEntryEditorComponent } from './content/contentAccessControlEntry-editor/contentAccessControlEntry-editor.component';
import { HostingAccessControlEntryEditorComponent } from './hosting/hostingAccessControlEntry-editor/hostingAccessControlEntry-editor.component';

import { HostingEntitiesACEPermissionPipe } from './pipe/hostingEntitiesACEPermission.pipe';
import  { ContentEntitiesACEPermissionPipe } from './pipe/contentEntitiesACEPermission.pipe';

import {InplaceModule} from 'primeng/inplace';
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DataViewModule,
    MatSelectModule
  ],
  declarations: [
    ContentAccessControlEntryEditorComponent, HostingAccessControlEntryEditorComponent,
    HostingEntitiesACEPermissionPipe, ContentEntitiesACEPermissionPipe
  ],
  exports: [
    ContentAccessControlEntryEditorComponent, HostingAccessControlEntryEditorComponent,
    HostingEntitiesACEPermissionPipe, ContentEntitiesACEPermissionPipe
  ]
})


export class AccessControlEntryEditorModule {

}
