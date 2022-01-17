import { Attribute, Component, OnInit } from '@angular/core';
import { IHorselessHostingAPI } from 'src/app/interfaces/IHorselessHostingAPI';

@Component({
  selector: 'horseless-new-tenant',
  templateUrl: './new-tenant.component.html',
  styleUrls: ['./new-tenant.component.css']
})
export class NewTenantComponent implements OnInit, IHorselessHostingAPI{


  constructor(@Attribute('baseUrl') public hostingApiBaseUrl: string) { }

  ngOnInit() {

  }


}
