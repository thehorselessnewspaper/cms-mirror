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
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ACEPermissionScope } from './acepermissionscope.enum';
import { ACEPermission } from './acepermission.enum';
import { ACEPermissionType } from './acepermissiontype.enum';
import { AccessControlEntry } from './accesscontrolentry.entity';
import { Principal } from './principal.entity';
import { Tenant } from './tenant.entity';
//#endregion

@Injectable()
export class AccessControlEntryService extends ODataEntitySetService<AccessControlEntry> {
  constructor(client: ODataClient) {
    super(client, 'AccessControlEntry', 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.AccessControlEntry');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public accessControlEntries(key: EntityKey<AccessControlEntry>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('AccessControlEntries'); 
  }
  public fetchAccessControlEntries(key: EntityKey<AccessControlEntry>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.accessControlEntries(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToAccessControlEntries(key: EntityKey<AccessControlEntry>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromAccessControlEntries(key: EntityKey<AccessControlEntry>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .remove(target);
  }
  public owners(key: EntityKey<AccessControlEntry>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('Owners'); 
  }
  public fetchOwners(key: EntityKey<AccessControlEntry>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.owners(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToOwners(key: EntityKey<AccessControlEntry>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .add(target);
  }
  public removePrincipalFromOwners(key: EntityKey<AccessControlEntry>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .remove(target);
  }
  public subjectAccessControlEntries(key: EntityKey<AccessControlEntry>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('SubjectAccessControlEntries'); 
  }
  public fetchSubjectAccessControlEntries(key: EntityKey<AccessControlEntry>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.subjectAccessControlEntries(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToSubjectAccessControlEntries(key: EntityKey<AccessControlEntry>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.subjectAccessControlEntries(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromSubjectAccessControlEntries(key: EntityKey<AccessControlEntry>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.subjectAccessControlEntries(key).reference()
      .remove(target);
  }
  public subjectPrincipals(key: EntityKey<AccessControlEntry>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('SubjectPrincipals'); 
  }
  public fetchSubjectPrincipals(key: EntityKey<AccessControlEntry>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.subjectPrincipals(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToSubjectPrincipals(key: EntityKey<AccessControlEntry>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.subjectPrincipals(key).reference()
      .add(target);
  }
  public removePrincipalFromSubjectPrincipals(key: EntityKey<AccessControlEntry>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.subjectPrincipals(key).reference()
      .remove(target);
  }
  public subjectTenants(key: EntityKey<AccessControlEntry>): ODataNavigationPropertyResource<Tenant> { 
    return this.entity(key).navigationProperty<Tenant>('SubjectTenants'); 
  }
  public fetchSubjectTenants(key: EntityKey<AccessControlEntry>, options?: ODataQueryArgumentsOptions<Tenant>) {
    return this.fetchNavigationProperty<Tenant>(
      this.subjectTenants(key), 
      'entities', options) as Observable<ODataEntities<Tenant>>;
  }
  public addTenantToSubjectTenants(key: EntityKey<AccessControlEntry>, target: ODataEntityResource<ODataEntities<Tenant>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.subjectTenants(key).reference()
      .add(target);
  }
  public removeTenantFromSubjectTenants(key: EntityKey<AccessControlEntry>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Tenant>>, etag?: string} = {}): Observable<any> {
    return this.subjectTenants(key).reference()
      .remove(target);
  }
  //#endregion
}
