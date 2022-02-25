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
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.complex';
import { PhysicalOfficeAddress } from './physicalofficeaddress.complex';
import { Phone } from './phone.complex';
import { DirectoryObject } from './directoryobject.entity';
import { OrgContact } from './orgcontact.entity';
//#endregion

@Injectable()
export class ContactsService extends ODataEntitySetService<OrgContact> {
  constructor(client: ODataClient) {
    super(client, 'contacts', 'microsoft.graph.orgContact');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  public delta(): ODataFunctionResource<null, OrgContact> { 
    return this.entities().function<null, OrgContact>('microsoft.graph.delta');
  }
  public callDelta(options?: ODataQueryArgumentsOptions<OrgContact>) {
    return this.callFunction<null, OrgContact>(
      null, 
      this.delta(), 
      'entities', options) as Observable<ODataEntities<OrgContact>>;
  }
  //#endregion
  //#region ODataApiGen Navigations
  public directReports(key: EntityKey<OrgContact>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('directReports'); 
  }
  public fetchDirectReports(key: EntityKey<OrgContact>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.directReports(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToDirectReports(key: EntityKey<OrgContact>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.directReports(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromDirectReports(key: EntityKey<OrgContact>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.directReports(key).reference()
      .remove(target);
  }
  public manager(key: EntityKey<OrgContact>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('manager'); 
  }
  public fetchManager(key: EntityKey<OrgContact>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.manager(key), 
      'entity', options) as Observable<ODataEntity<DirectoryObject>>;
  }
  public setDirectoryObjectAsManager(key: EntityKey<OrgContact>, target: ODataEntityResource<ODataEntity<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.manager(key).reference()
      .set(target, {etag});
  }
  public unsetDirectoryObjectAsManager(key: EntityKey<OrgContact>, {target, etag}: {target?: ODataEntityResource<ODataEntity<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.manager(key).reference()
      .unset({etag});
  }
  public memberOf(key: EntityKey<OrgContact>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('memberOf'); 
  }
  public fetchMemberOf(key: EntityKey<OrgContact>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.memberOf(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToMemberOf(key: EntityKey<OrgContact>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.memberOf(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromMemberOf(key: EntityKey<OrgContact>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.memberOf(key).reference()
      .remove(target);
  }
  public transitiveMemberOf(key: EntityKey<OrgContact>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('transitiveMemberOf'); 
  }
  public fetchTransitiveMemberOf(key: EntityKey<OrgContact>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.transitiveMemberOf(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToTransitiveMemberOf(key: EntityKey<OrgContact>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.transitiveMemberOf(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromTransitiveMemberOf(key: EntityKey<OrgContact>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.transitiveMemberOf(key).reference()
      .remove(target);
  }
  //#endregion
}
