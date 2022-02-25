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
import { OnlineMeeting } from './onlinemeeting.entity';
import { CloudCommunications } from './cloudcommunications.entity';
import { Call } from './call.entity';
import { CallRecord } from './callRecords/callrecord.entity';
//#endregion

@Injectable()
export class CommunicationsService extends ODataSingletonService<CloudCommunications> {
  constructor(client: ODataClient) {
    super(client, 'communications', 'microsoft.graph.cloudCommunications');
  }

  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}