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
import { AlternativeSecurityId } from './alternativesecurityid.complex';
import { DirectoryObject } from './directoryobject.entity';
import { Device } from './device.entity';
//#endregion

@Injectable()
export class DevicesService extends ODataEntitySetService<Device> {
  constructor(client: ODataClient) {
    super(client, 'devices', 'microsoft.graph.device');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public registeredOwners(key: EntityKey<Device>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('registeredOwners'); 
  }
  public fetchRegisteredOwners(key: EntityKey<Device>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.registeredOwners(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToRegisteredOwners(key: EntityKey<Device>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.registeredOwners(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromRegisteredOwners(key: EntityKey<Device>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.registeredOwners(key).reference()
      .remove(target);
  }
  public registeredUsers(key: EntityKey<Device>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('registeredUsers'); 
  }
  public fetchRegisteredUsers(key: EntityKey<Device>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.registeredUsers(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToRegisteredUsers(key: EntityKey<Device>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.registeredUsers(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromRegisteredUsers(key: EntityKey<Device>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.registeredUsers(key).reference()
      .remove(target);
  }
  public transitiveMemberOf(key: EntityKey<Device>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('transitiveMemberOf'); 
  }
  public fetchTransitiveMemberOf(key: EntityKey<Device>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.transitiveMemberOf(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToTransitiveMemberOf(key: EntityKey<Device>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.transitiveMemberOf(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromTransitiveMemberOf(key: EntityKey<Device>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.transitiveMemberOf(key).reference()
      .remove(target);
  }
  //#endregion
}
