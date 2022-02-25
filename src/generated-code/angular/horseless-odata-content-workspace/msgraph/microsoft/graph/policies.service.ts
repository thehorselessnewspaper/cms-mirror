import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
  ODataSingletonService,
  ODataEntity,
  ODataEntities,
  ODataProperty,
  EntityKey,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TokenLifetimePolicy } from './tokenlifetimepolicy.entity';
import { TokenIssuancePolicy } from './tokenissuancepolicy.entity';
import { PolicyRoot } from './policyroot.entity';
import { ActivityBasedTimeoutPolicy } from './activitybasedtimeoutpolicy.entity';
import { ClaimsMappingPolicy } from './claimsmappingpolicy.entity';
import { HomeRealmDiscoveryPolicy } from './homerealmdiscoverypolicy.entity';
//#endregion

@Injectable()
export class PoliciesService extends ODataSingletonService<PolicyRoot> {
  constructor(client: ODataClient) {
    super(client, 'policies', 'microsoft.graph.policyRoot');
  }

  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}