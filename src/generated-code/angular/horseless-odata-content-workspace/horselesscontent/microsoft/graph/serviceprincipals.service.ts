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
import { AddIn } from './addin.complex';
import { PermissionScope } from './permissionscope.complex';
import { AppRole } from './approle.complex';
import { InformationalUrl } from './informationalurl.complex';
import { KeyCredential } from './keycredential.complex';
import { PasswordCredential } from './passwordcredential.complex';
import { SamlSingleSignOnSettings } from './samlsinglesignonsettings.complex';
import { DirectoryObject } from './directoryobject.entity';
import { OAuth2PermissionGrant } from './oauth2permissiongrant.entity';
import { ServicePrincipal } from './serviceprincipal.entity';
//#endregion

@Injectable()
export class ServicePrincipalsService extends ODataEntitySetService<ServicePrincipal> {
  constructor(client: ODataClient) {
    super(client, 'servicePrincipals', 'microsoft.graph.servicePrincipal');
  }
  //#region ODataApiGen Actions
  public addKey(key: EntityKey<ServicePrincipal>): ODataActionResource<{keyCredential: KeyCredential, passwordCredential: PasswordCredential, proof: string}, KeyCredential> { 
    return this.entity(key).action<{keyCredential: KeyCredential, passwordCredential: PasswordCredential, proof: string}, KeyCredential>('microsoft.graph.addKey');
  }
  public callAddKey(key: EntityKey<ServicePrincipal>, keyCredential: KeyCredential, passwordCredential: PasswordCredential, proof: string, options?: ODataQueryArgumentsOptions<KeyCredential>) {
    return this.callAction<{keyCredential: KeyCredential, passwordCredential: PasswordCredential, proof: string}, KeyCredential>(
      {keyCredential, passwordCredential, proof}, 
      this.addKey(key), 
      'entity', options) as Observable<ODataEntity<KeyCredential>>;
  }
  public addPassword(key: EntityKey<ServicePrincipal>): ODataActionResource<{passwordCredential: PasswordCredential}, PasswordCredential> { 
    return this.entity(key).action<{passwordCredential: PasswordCredential}, PasswordCredential>('microsoft.graph.addPassword');
  }
  public callAddPassword(key: EntityKey<ServicePrincipal>, passwordCredential: PasswordCredential, options?: ODataQueryArgumentsOptions<PasswordCredential>) {
    return this.callAction<{passwordCredential: PasswordCredential}, PasswordCredential>(
      {passwordCredential}, 
      this.addPassword(key), 
      'entity', options) as Observable<ODataEntity<PasswordCredential>>;
  }
  public removeKey(key: EntityKey<ServicePrincipal>): ODataActionResource<{keyId: string, proof: string}, any> { 
    return this.entity(key).action<{keyId: string, proof: string}, any>('microsoft.graph.removeKey');
  }
  public callRemoveKey(key: EntityKey<ServicePrincipal>, keyId: string, proof: string, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<{keyId: string, proof: string}, any>(
      {keyId, proof}, 
      this.removeKey(key), 
      'none', options);
  }
  public removePassword(key: EntityKey<ServicePrincipal>): ODataActionResource<{keyId: string}, any> { 
    return this.entity(key).action<{keyId: string}, any>('microsoft.graph.removePassword');
  }
  public callRemovePassword(key: EntityKey<ServicePrincipal>, keyId: string, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<{keyId: string}, any>(
      {keyId}, 
      this.removePassword(key), 
      'none', options);
  }
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public createdObjects(key: EntityKey<ServicePrincipal>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('createdObjects'); 
  }
  public fetchCreatedObjects(key: EntityKey<ServicePrincipal>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.createdObjects(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToCreatedObjects(key: EntityKey<ServicePrincipal>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.createdObjects(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromCreatedObjects(key: EntityKey<ServicePrincipal>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.createdObjects(key).reference()
      .remove(target);
  }
  public memberOf(key: EntityKey<ServicePrincipal>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('memberOf'); 
  }
  public fetchMemberOf(key: EntityKey<ServicePrincipal>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.memberOf(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToMemberOf(key: EntityKey<ServicePrincipal>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.memberOf(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromMemberOf(key: EntityKey<ServicePrincipal>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.memberOf(key).reference()
      .remove(target);
  }
  public oauth2PermissionGrants(key: EntityKey<ServicePrincipal>): ODataNavigationPropertyResource<OAuth2PermissionGrant> { 
    return this.entity(key).navigationProperty<OAuth2PermissionGrant>('oauth2PermissionGrants'); 
  }
  public fetchOauth2PermissionGrants(key: EntityKey<ServicePrincipal>, options?: ODataQueryArgumentsOptions<OAuth2PermissionGrant>) {
    return this.fetchNavigationProperty<OAuth2PermissionGrant>(
      this.oauth2PermissionGrants(key), 
      'entities', options) as Observable<ODataEntities<OAuth2PermissionGrant>>;
  }
  public addOAuth2PermissionGrantToOauth2PermissionGrants(key: EntityKey<ServicePrincipal>, target: ODataEntityResource<ODataEntities<OAuth2PermissionGrant>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.oauth2PermissionGrants(key).reference()
      .add(target);
  }
  public removeOAuth2PermissionGrantFromOauth2PermissionGrants(key: EntityKey<ServicePrincipal>, {target, etag}: {target?: ODataEntityResource<ODataEntities<OAuth2PermissionGrant>>, etag?: string} = {}): Observable<any> {
    return this.oauth2PermissionGrants(key).reference()
      .remove(target);
  }
  public ownedObjects(key: EntityKey<ServicePrincipal>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('ownedObjects'); 
  }
  public fetchOwnedObjects(key: EntityKey<ServicePrincipal>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.ownedObjects(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToOwnedObjects(key: EntityKey<ServicePrincipal>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.ownedObjects(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromOwnedObjects(key: EntityKey<ServicePrincipal>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.ownedObjects(key).reference()
      .remove(target);
  }
  public owners(key: EntityKey<ServicePrincipal>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('owners'); 
  }
  public fetchOwners(key: EntityKey<ServicePrincipal>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.owners(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToOwners(key: EntityKey<ServicePrincipal>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromOwners(key: EntityKey<ServicePrincipal>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .remove(target);
  }
  public transitiveMemberOf(key: EntityKey<ServicePrincipal>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('transitiveMemberOf'); 
  }
  public fetchTransitiveMemberOf(key: EntityKey<ServicePrincipal>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.transitiveMemberOf(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToTransitiveMemberOf(key: EntityKey<ServicePrincipal>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.transitiveMemberOf(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromTransitiveMemberOf(key: EntityKey<ServicePrincipal>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.transitiveMemberOf(key).reference()
      .remove(target);
  }
  //#endregion
}
