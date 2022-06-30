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
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { HorselessContent } from './horselesscontent.entity';
import { MIMEType } from './mimetype.entity';
import { Principal } from './principal.entity';
//#endregion

@Injectable()
export class MIMETypeService extends ODataEntitySetService<MIMEType> {
  constructor(client: ODataClient) {
    super(client, 'MIMEType', 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.MIMEType');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public accessControlEntries(key: EntityKey<MIMEType>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('AccessControlEntries'); 
  }
  public fetchAccessControlEntries(key: EntityKey<MIMEType>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.accessControlEntries(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToAccessControlEntries(key: EntityKey<MIMEType>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromAccessControlEntries(key: EntityKey<MIMEType>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .remove(target);
  }
  public horselessContents(key: EntityKey<MIMEType>): ODataNavigationPropertyResource<HorselessContent> { 
    return this.entity(key).navigationProperty<HorselessContent>('HorselessContents'); 
  }
  public fetchHorselessContents(key: EntityKey<MIMEType>, options?: ODataQueryArgumentsOptions<HorselessContent>) {
    return this.fetchNavigationProperty<HorselessContent>(
      this.horselessContents(key), 
      'entities', options) as Observable<ODataEntities<HorselessContent>>;
  }
  public addHorselessContentToHorselessContents(key: EntityKey<MIMEType>, target: ODataEntityResource<ODataEntities<HorselessContent>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.horselessContents(key).reference()
      .add(target);
  }
  public removeHorselessContentFromHorselessContents(key: EntityKey<MIMEType>, {target, etag}: {target?: ODataEntityResource<ODataEntities<HorselessContent>>, etag?: string} = {}): Observable<any> {
    return this.horselessContents(key).reference()
      .remove(target);
  }
  public owners(key: EntityKey<MIMEType>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('Owners'); 
  }
  public fetchOwners(key: EntityKey<MIMEType>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.owners(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToOwners(key: EntityKey<MIMEType>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .add(target);
  }
  public removePrincipalFromOwners(key: EntityKey<MIMEType>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .remove(target);
  }
  //#endregion
}
