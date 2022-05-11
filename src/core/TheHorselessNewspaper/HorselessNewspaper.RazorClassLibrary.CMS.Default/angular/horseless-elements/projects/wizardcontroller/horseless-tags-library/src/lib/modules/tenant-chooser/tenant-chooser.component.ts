import { Component, OnInit } from '@angular/core';
import { HostingEntitiesTenant, TenantInfoRESTService, TenantRESTService } from '@wizardcontrollerprerelease/horseless-contentapi-lib';

@Component({
  selector: 'lib-tenant-chooser',
  templateUrl: './tenant-chooser.component.html',
  styleUrls: ['./tenant-chooser.component.css']
})
export class TenantChooserComponent implements OnInit {

  tenants!: HostingEntitiesTenant[];
  constructor(tenantSvc: TenantRESTService) {
    // console.log(tenantSvc.contentEntitiesTenantRESTGetByObjectId())
  }

  ngOnInit(): void {
  }

  loadTeants(): void {

  }

}
