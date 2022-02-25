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
import { DirectoryObject } from './directoryobject.entity';
import { Directory } from './directory.entity';
//#endregion

@Injectable()
export class DirectoryService extends ODataSingletonService<Directory> {
  constructor(client: ODataClient) {
    super(client, 'directory', 'microsoft.graph.directory');
  }

  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}