import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ODataServiceFactory } from '@vigouredelaruse/angular-odata';
import {
  ClientConfigurationService,
  ContentEntitiesTenant,
  HostingEntitiesTenant,
  ContentEntitiesAccessControlEntry,
  ContentEntitiesACEPermission,
  ContentEntitiesACEPermissionType,
  ContentEntitiesACEPermissionScope,
  SecurityRestClientConfiguration,
  TenantRESTService,
  ContentEntitiesPrincipal,
} from '@wizardcontrollerprerelease/horseless-contentapi-lib';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import {
  BehaviorSubject,
  catchError,
  EMPTY,
  map,
  Observable,
  ReplaySubject,
  take,
  tap,
  concatMap,
} from 'rxjs';
import { ConfigurationEndpointService } from '../../../../../services/configuration-endpoint.service';
@Injectable({
  providedIn: 'any',
})
export class PrincipalQueryService {
  clientConfigService!: ConfigurationEndpointService;
  restClientConfiguration$!: BehaviorSubject<SecurityRestClientConfiguration>;
  contentEntitiesPrincipal$!: BehaviorSubject<ContentEntitiesPrincipal[] | null>;

  constructor(
    clientConfigService: ConfigurationEndpointService,
    factory: ODataServiceFactory,
    tenantService: TenantRESTService
  ) {
    console.log('PrincipalQueryService starting');

    this.clientConfigService = clientConfigService;

    this.restClientConfiguration$ =
      this.clientConfigService.clientConfiguration$;

    this.contentEntitiesPrincipal$ = new BehaviorSubject<
    ContentEntitiesPrincipal[] | null
    >(new Array<ContentEntitiesPrincipal>());
  }
}
