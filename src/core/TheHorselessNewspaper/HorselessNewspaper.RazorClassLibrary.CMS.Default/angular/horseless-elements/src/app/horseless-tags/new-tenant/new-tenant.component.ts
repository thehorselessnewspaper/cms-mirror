import { Attribute, Component, OnInit } from '@angular/core';
import { HostingEntitiesTenant, HostingEntitiesTenantIdentifierStrategy } from '@wizardcontroller/horseless-contentapi-lib';
import { IHorselessHostingAPI } from 'src/app/interfaces/IHorselessHostingApi';


@Component({
  selector: 'horseless-new-tenant',
  templateUrl: './new-tenant.component.html',
  styleUrls: ['./new-tenant.component.css']
})
export class NewTenantComponent implements OnInit, IHorselessHostingAPI{

  currentTenant! : HostingEntitiesTenant;
  tenantStrategy! : HostingEntitiesTenantIdentifierStrategy

  constructor(@Attribute('baseUrl') public hostingApiBaseUrl: string) {

   }

  ngOnInit() {

  }


}
