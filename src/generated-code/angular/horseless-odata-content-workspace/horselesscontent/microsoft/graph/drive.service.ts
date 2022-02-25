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
import { IdentitySet } from './identityset.complex';
import { SharepointIds } from './sharepointids.complex';
import { SystemFacet } from './systemfacet.complex';
import { Quota } from './quota.complex';
import { Drive } from './drive.entity';
import { List } from './list.entity';
import { DriveItem } from './driveitem.entity';
//#endregion

@Injectable()
export class DriveService extends ODataSingletonService<Drive> {
  constructor(client: ODataClient) {
    super(client, 'drive', 'microsoft.graph.drive');
  }

  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}