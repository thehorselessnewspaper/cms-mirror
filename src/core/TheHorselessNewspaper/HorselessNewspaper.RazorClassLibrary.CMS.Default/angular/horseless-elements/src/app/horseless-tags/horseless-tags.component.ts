import { Component, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NewTenantComponent } from './new-tenant/new-tenant.component';

@Component({
  selector: 'app-horseless-tags',
  templateUrl: './horseless-tags.component.html',
  styleUrls: ['./horseless-tags.component.css']
})
export class HorselessTagsComponent implements OnInit {

  ngOnInit() {
  }

}
