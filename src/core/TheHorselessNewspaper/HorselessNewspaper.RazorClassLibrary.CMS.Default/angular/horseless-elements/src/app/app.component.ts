import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NewTenantComponent } from './horseless-tags/new-tenant/new-tenant.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'horseless-elements';


}
