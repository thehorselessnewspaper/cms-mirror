import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HorselessTagsLibraryModule } from '@wizardcontroller/horseless-tags-library/public-api';

import { NewTenantComponent } from './horseless-tags/new-tenant/new-tenant.component';
import { TenantEditorComponent } from '@wizardcontroller/horseless-tags-library/lib/modules/tenant-editor/tenant-editor.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'horseless-elements';


}
