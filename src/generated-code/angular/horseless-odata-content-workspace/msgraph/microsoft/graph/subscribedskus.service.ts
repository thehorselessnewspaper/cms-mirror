import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
  ODataEntitySetService,
  ODataEntity,
  ODataEntities,
  ODataProperty,
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ServicePlanInfo } from './serviceplaninfo.complex';
import { LicenseUnitsDetail } from './licenseunitsdetail.complex';
import { SubscribedSku } from './subscribedsku.entity';
//#endregion

@Injectable()
export class SubscribedSkusService extends ODataEntitySetService<SubscribedSku> {
  constructor(client: ODataClient) {
    super(client, 'subscribedSkus', 'microsoft.graph.subscribedSku');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
