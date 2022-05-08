import { Component, OnInit } from '@angular/core';
import { HostingEntitiesTenant } from '@wizardcontrollerprerelease/horseless-contentapi-lib/public-api';

@Component({
  selector: 'lib-tenant-chooser',
  templateUrl: './tenant-chooser.component.html',
  styleUrls: ['./tenant-chooser.component.css']
})
export class TenantChooserComponent implements OnInit {

tenants!: HostingEntitiesTenant[];
  constructor() { }

  ngOnInit(): void {
  }

  loadTeants(): void {

  }

}
