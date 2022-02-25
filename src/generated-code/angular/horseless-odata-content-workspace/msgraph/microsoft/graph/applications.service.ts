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
import { ApiApplication } from './apiapplication.complex';
import { AppRole } from './approle.complex';
import { PublicClientApplication } from './publicclientapplication.complex';
import { InformationalUrl } from './informationalurl.complex';
import { KeyCredential } from './keycredential.complex';
import { OptionalClaims } from './optionalclaims.complex';
import { ParentalControlSettings } from './parentalcontrolsettings.complex';
import { PasswordCredential } from './passwordcredential.complex';
import { RequiredResourceAccess } from './requiredresourceaccess.complex';
import { WebApplication } from './webapplication.complex';
import { DirectoryObject } from './directoryobject.entity';
import { Application } from './application.entity';
//#endregion

@Injectable()
export class ApplicationsService extends ODataEntitySetService<Application> {
  constructor(client: ODataClient) {
    super(client, 'applications', 'microsoft.graph.application');
  }
  //#region ODataApiGen Actions
  public addKey(key: EntityKey<Application>): ODataActionResource<{keyCredential: KeyCredential, passwordCredential: PasswordCredential, proof: string}, KeyCredential> { 
    return this.entity(key).action<{keyCredential: KeyCredential, passwordCredential: PasswordCredential, proof: string}, KeyCredential>('microsoft.graph.addKey');
  }
  public callAddKey(key: EntityKey<Application>, keyCredential: KeyCredential, passwordCredential: PasswordCredential, proof: string, options?: ODataQueryArgumentsOptions<KeyCredential>) {
    return this.callAction<{keyCredential: KeyCredential, passwordCredential: PasswordCredential, proof: string}, KeyCredential>(
      {keyCredential, passwordCredential, proof}, 
      this.addKey(key), 
      'entity', options) as Observable<ODataEntity<KeyCredential>>;
  }
  public addPassword(key: EntityKey<Application>): ODataActionResource<{passwordCredential: PasswordCredential}, PasswordCredential> { 
    return this.entity(key).action<{passwordCredential: PasswordCredential}, PasswordCredential>('microsoft.graph.addPassword');
  }
  public callAddPassword(key: EntityKey<Application>, passwordCredential: PasswordCredential, options?: ODataQueryArgumentsOptions<PasswordCredential>) {
    return this.callAction<{passwordCredential: PasswordCredential}, PasswordCredential>(
      {passwordCredential}, 
      this.addPassword(key), 
      'entity', options) as Observable<ODataEntity<PasswordCredential>>;
  }
  public removeKey(key: EntityKey<Application>): ODataActionResource<{keyId: string, proof: string}, any> { 
    return this.entity(key).action<{keyId: string, proof: string}, any>('microsoft.graph.removeKey');
  }
  public callRemoveKey(key: EntityKey<Application>, keyId: string, proof: string, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<{keyId: string, proof: string}, any>(
      {keyId, proof}, 
      this.removeKey(key), 
      'none', options);
  }
  public removePassword(key: EntityKey<Application>): ODataActionResource<{keyId: string}, any> { 
    return this.entity(key).action<{keyId: string}, any>('microsoft.graph.removePassword');
  }
  public callRemovePassword(key: EntityKey<Application>, keyId: string, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<{keyId: string}, any>(
      {keyId}, 
      this.removePassword(key), 
      'none', options);
  }
  //#endregion
  //#region ODataApiGen Functions
  public delta(): ODataFunctionResource<null, Application> { 
    return this.entities().function<null, Application>('microsoft.graph.delta');
  }
  public callDelta(options?: ODataQueryArgumentsOptions<Application>) {
    return this.callFunction<null, Application>(
      null, 
      this.delta(), 
      'entities', options) as Observable<ODataEntities<Application>>;
  }
  //#endregion
  //#region ODataApiGen Navigations
  public createdOnBehalfOf(key: EntityKey<Application>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('createdOnBehalfOf'); 
  }
  public fetchCreatedOnBehalfOf(key: EntityKey<Application>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.createdOnBehalfOf(key), 
      'entity', options) as Observable<ODataEntity<DirectoryObject>>;
  }
  public setDirectoryObjectAsCreatedOnBehalfOf(key: EntityKey<Application>, target: ODataEntityResource<ODataEntity<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.createdOnBehalfOf(key).reference()
      .set(target, {etag});
  }
  public unsetDirectoryObjectAsCreatedOnBehalfOf(key: EntityKey<Application>, {target, etag}: {target?: ODataEntityResource<ODataEntity<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.createdOnBehalfOf(key).reference()
      .unset({etag});
  }
  public owners(key: EntityKey<Application>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('owners'); 
  }
  public fetchOwners(key: EntityKey<Application>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.owners(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToOwners(key: EntityKey<Application>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromOwners(key: EntityKey<Application>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .remove(target);
  }
  //#endregion
}
