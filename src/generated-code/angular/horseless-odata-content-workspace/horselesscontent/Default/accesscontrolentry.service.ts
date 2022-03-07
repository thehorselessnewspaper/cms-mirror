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
import { ACEPermissionScope } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/acepermissionscope.enum';
import { ACEPermission } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/acepermission.enum';
import { ACEPermissionType } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/acepermissiontype.enum';
import { AccessControlEntry } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/accesscontrolentry.entity';
//#endregion

@Injectable()
export class AccessControlEntryService extends ODataEntitySetService<AccessControlEntry> {
  constructor(client: ODataClient) {
    super(client, 'AccessControlEntry', 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
