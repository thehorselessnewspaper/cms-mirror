import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
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
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions,
  ODataBaseService
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
//#endregion

@Injectable()
export class HostingEntitiesService extends ODataBaseService {

  constructor(client: ODataClient) {
    super(client, 'HostingEntitiesContainer', 'HorselessHosting');
  }

  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
}