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
import { DomainState } from './domainstate.complex';
import { DirectoryObject } from './directoryobject.entity';
import { Domain } from './domain.entity';
//#endregion

@Injectable()
export class DomainsService extends ODataEntitySetService<Domain> {
  constructor(client: ODataClient) {
    super(client, 'domains', 'microsoft.graph.domain');
  }
  //#region ODataApiGen Actions
  public forceDelete(key: EntityKey<Domain>): ODataActionResource<{disableUserAccounts: boolean}, any> { 
    return this.entity(key).action<{disableUserAccounts: boolean}, any>('microsoft.graph.forceDelete');
  }
  public callForceDelete(key: EntityKey<Domain>, disableUserAccounts: boolean, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<{disableUserAccounts: boolean}, any>(
      {disableUserAccounts}, 
      this.forceDelete(key), 
      'none', options);
  }
  public verify(key: EntityKey<Domain>): ODataActionResource<null, Domain> { 
    return this.entity(key).action<null, Domain>('microsoft.graph.verify');
  }
  public callVerify(key: EntityKey<Domain>, options?: ODataQueryArgumentsOptions<Domain>) {
    return this.callAction<null, Domain>(
      null, 
      this.verify(key), 
      'entity', options) as Observable<ODataEntity<Domain>>;
  }
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public domainNameReferences(key: EntityKey<Domain>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('domainNameReferences'); 
  }
  public fetchDomainNameReferences(key: EntityKey<Domain>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.domainNameReferences(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToDomainNameReferences(key: EntityKey<Domain>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.domainNameReferences(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromDomainNameReferences(key: EntityKey<Domain>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.domainNameReferences(key).reference()
      .remove(target);
  }
  //#endregion
}
