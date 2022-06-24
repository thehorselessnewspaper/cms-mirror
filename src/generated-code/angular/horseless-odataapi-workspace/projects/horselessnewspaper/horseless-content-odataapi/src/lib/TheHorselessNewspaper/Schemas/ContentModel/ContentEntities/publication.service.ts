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
import { AccessControlEntry } from './accesscontrolentry.entity';
import { ContentCollection } from './contentcollection.entity';
import { Principal } from './principal.entity';
import { Publication } from './publication.entity';
//#endregion

@Injectable()
export class PublicationService extends ODataEntitySetService<Publication> {
  constructor(client: ODataClient) {
    super(client, 'Publication', 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Publication');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public accessControlEntries(key: EntityKey<Publication>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('AccessControlEntries'); 
  }
  public fetchAccessControlEntries(key: EntityKey<Publication>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.accessControlEntries(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToAccessControlEntries(key: EntityKey<Publication>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromAccessControlEntries(key: EntityKey<Publication>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .remove(target);
  }
  public contentCollections(key: EntityKey<Publication>): ODataNavigationPropertyResource<ContentCollection> { 
    return this.entity(key).navigationProperty<ContentCollection>('ContentCollections'); 
  }
  public fetchContentCollections(key: EntityKey<Publication>, options?: ODataQueryArgumentsOptions<ContentCollection>) {
    return this.fetchNavigationProperty<ContentCollection>(
      this.contentCollections(key), 
      'entities', options) as Observable<ODataEntities<ContentCollection>>;
  }
  public addContentCollectionToContentCollections(key: EntityKey<Publication>, target: ODataEntityResource<ODataEntities<ContentCollection>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.contentCollections(key).reference()
      .add(target);
  }
  public removeContentCollectionFromContentCollections(key: EntityKey<Publication>, {target, etag}: {target?: ODataEntityResource<ODataEntities<ContentCollection>>, etag?: string} = {}): Observable<any> {
    return this.contentCollections(key).reference()
      .remove(target);
  }
  public owners(key: EntityKey<Publication>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('Owners'); 
  }
  public fetchOwners(key: EntityKey<Publication>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.owners(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToOwners(key: EntityKey<Publication>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .add(target);
  }
  public removePrincipalFromOwners(key: EntityKey<Publication>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .remove(target);
  }
  public publicationChildrens(key: EntityKey<Publication>): ODataNavigationPropertyResource<Publication> { 
    return this.entity(key).navigationProperty<Publication>('PublicationChildrens'); 
  }
  public fetchPublicationChildrens(key: EntityKey<Publication>, options?: ODataQueryArgumentsOptions<Publication>) {
    return this.fetchNavigationProperty<Publication>(
      this.publicationChildrens(key), 
      'entities', options) as Observable<ODataEntities<Publication>>;
  }
  public addPublicationToPublicationChildrens(key: EntityKey<Publication>, target: ODataEntityResource<ODataEntities<Publication>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.publicationChildrens(key).reference()
      .add(target);
  }
  public removePublicationFromPublicationChildrens(key: EntityKey<Publication>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Publication>>, etag?: string} = {}): Observable<any> {
    return this.publicationChildrens(key).reference()
      .remove(target);
  }
  public publicationParents(key: EntityKey<Publication>): ODataNavigationPropertyResource<Publication> { 
    return this.entity(key).navigationProperty<Publication>('PublicationParents'); 
  }
  public fetchPublicationParents(key: EntityKey<Publication>, options?: ODataQueryArgumentsOptions<Publication>) {
    return this.fetchNavigationProperty<Publication>(
      this.publicationParents(key), 
      'entities', options) as Observable<ODataEntities<Publication>>;
  }
  public addPublicationToPublicationParents(key: EntityKey<Publication>, target: ODataEntityResource<ODataEntities<Publication>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.publicationParents(key).reference()
      .add(target);
  }
  public removePublicationFromPublicationParents(key: EntityKey<Publication>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Publication>>, etag?: string} = {}): Observable<any> {
    return this.publicationParents(key).reference()
      .remove(target);
  }
  //#endregion
}
