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
import { DirectoryObject } from './directoryobject.entity';
import { DirectoryRole } from './directoryrole.entity';
//#endregion

@Injectable()
export class DirectoryRolesService extends ODataEntitySetService<DirectoryRole> {
  constructor(client: ODataClient) {
    super(client, 'directoryRoles', 'microsoft.graph.directoryRole');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  public delta(): ODataFunctionResource<null, DirectoryRole> { 
    return this.entities().function<null, DirectoryRole>('microsoft.graph.delta');
  }
  public callDelta(options?: ODataQueryArgumentsOptions<DirectoryRole>) {
    return this.callFunction<null, DirectoryRole>(
      null, 
      this.delta(), 
      'entities', options) as Observable<ODataEntities<DirectoryRole>>;
  }
  //#endregion
  //#region ODataApiGen Navigations
  public members(key: EntityKey<DirectoryRole>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('members'); 
  }
  public fetchMembers(key: EntityKey<DirectoryRole>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.members(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToMembers(key: EntityKey<DirectoryRole>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.members(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromMembers(key: EntityKey<DirectoryRole>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.members(key).reference()
      .remove(target);
  }
  //#endregion
}
