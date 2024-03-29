﻿import { Injectable } from '@angular/core';
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
import { AccessControlEntry } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/accesscontrolentry.entity';
import { ContentCollection } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/contentcollection.entity';
import { HorselessContent } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/horselesscontent.entity';
import { Principal } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/principal.entity';
import { Publication } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/publication.entity';
import { Taxonomy } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/taxonomy.entity';
import { Tenant } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/tenant.entity';
//#endregion

@Injectable()
export class ContentCollectionService extends ODataEntitySetService<ContentCollection> {
  constructor(client: ODataClient) {
    super(client, 'ContentCollection', 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.ContentCollection');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public accessControlList(key: EntityKey<ContentCollection>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('AccessControlList'); 
  }
  public fetchAccessControlList(key: EntityKey<ContentCollection>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.accessControlList(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToAccessControlList(key: EntityKey<ContentCollection>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.accessControlList(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromAccessControlList(key: EntityKey<ContentCollection>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.accessControlList(key).reference()
      .remove(target);
  }
  public childContentCollections(key: EntityKey<ContentCollection>): ODataNavigationPropertyResource<ContentCollection> { 
    return this.entity(key).navigationProperty<ContentCollection>('ChildContentCollections'); 
  }
  public fetchChildContentCollections(key: EntityKey<ContentCollection>, options?: ODataQueryArgumentsOptions<ContentCollection>) {
    return this.fetchNavigationProperty<ContentCollection>(
      this.childContentCollections(key), 
      'entities', options) as Observable<ODataEntities<ContentCollection>>;
  }
  public addContentCollectionToChildContentCollections(key: EntityKey<ContentCollection>, target: ODataEntityResource<ODataEntities<ContentCollection>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.childContentCollections(key).reference()
      .add(target);
  }
  public removeContentCollectionFromChildContentCollections(key: EntityKey<ContentCollection>, {target, etag}: {target?: ODataEntityResource<ODataEntities<ContentCollection>>, etag?: string} = {}): Observable<any> {
    return this.childContentCollections(key).reference()
      .remove(target);
  }
  public mimeContents(key: EntityKey<ContentCollection>): ODataNavigationPropertyResource<HorselessContent> { 
    return this.entity(key).navigationProperty<HorselessContent>('MimeContents'); 
  }
  public fetchMimeContents(key: EntityKey<ContentCollection>, options?: ODataQueryArgumentsOptions<HorselessContent>) {
    return this.fetchNavigationProperty<HorselessContent>(
      this.mimeContents(key), 
      'entities', options) as Observable<ODataEntities<HorselessContent>>;
  }
  public addHorselessContentToMimeContents(key: EntityKey<ContentCollection>, target: ODataEntityResource<ODataEntities<HorselessContent>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.mimeContents(key).reference()
      .add(target);
  }
  public removeHorselessContentFromMimeContents(key: EntityKey<ContentCollection>, {target, etag}: {target?: ODataEntityResource<ODataEntities<HorselessContent>>, etag?: string} = {}): Observable<any> {
    return this.mimeContents(key).reference()
      .remove(target);
  }
  public owners(key: EntityKey<ContentCollection>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('Owners'); 
  }
  public fetchOwners(key: EntityKey<ContentCollection>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.owners(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToOwners(key: EntityKey<ContentCollection>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .add(target);
  }
  public removePrincipalFromOwners(key: EntityKey<ContentCollection>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .remove(target);
  }
  public parentContentCollections(key: EntityKey<ContentCollection>): ODataNavigationPropertyResource<ContentCollection> { 
    return this.entity(key).navigationProperty<ContentCollection>('ParentContentCollections'); 
  }
  public fetchParentContentCollections(key: EntityKey<ContentCollection>, options?: ODataQueryArgumentsOptions<ContentCollection>) {
    return this.fetchNavigationProperty<ContentCollection>(
      this.parentContentCollections(key), 
      'entities', options) as Observable<ODataEntities<ContentCollection>>;
  }
  public addContentCollectionToParentContentCollections(key: EntityKey<ContentCollection>, target: ODataEntityResource<ODataEntities<ContentCollection>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.parentContentCollections(key).reference()
      .add(target);
  }
  public removeContentCollectionFromParentContentCollections(key: EntityKey<ContentCollection>, {target, etag}: {target?: ODataEntityResource<ODataEntities<ContentCollection>>, etag?: string} = {}): Observable<any> {
    return this.parentContentCollections(key).reference()
      .remove(target);
  }
  public publications(key: EntityKey<ContentCollection>): ODataNavigationPropertyResource<Publication> { 
    return this.entity(key).navigationProperty<Publication>('Publications'); 
  }
  public fetchPublications(key: EntityKey<ContentCollection>, options?: ODataQueryArgumentsOptions<Publication>) {
    return this.fetchNavigationProperty<Publication>(
      this.publications(key), 
      'entities', options) as Observable<ODataEntities<Publication>>;
  }
  public addPublicationToPublications(key: EntityKey<ContentCollection>, target: ODataEntityResource<ODataEntities<Publication>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.publications(key).reference()
      .add(target);
  }
  public removePublicationFromPublications(key: EntityKey<ContentCollection>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Publication>>, etag?: string} = {}): Observable<any> {
    return this.publications(key).reference()
      .remove(target);
  }
  public taxonomies(key: EntityKey<ContentCollection>): ODataNavigationPropertyResource<Taxonomy> { 
    return this.entity(key).navigationProperty<Taxonomy>('Taxonomies'); 
  }
  public fetchTaxonomies(key: EntityKey<ContentCollection>, options?: ODataQueryArgumentsOptions<Taxonomy>) {
    return this.fetchNavigationProperty<Taxonomy>(
      this.taxonomies(key), 
      'entities', options) as Observable<ODataEntities<Taxonomy>>;
  }
  public addTaxonomyToTaxonomies(key: EntityKey<ContentCollection>, target: ODataEntityResource<ODataEntities<Taxonomy>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.taxonomies(key).reference()
      .add(target);
  }
  public removeTaxonomyFromTaxonomies(key: EntityKey<ContentCollection>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Taxonomy>>, etag?: string} = {}): Observable<any> {
    return this.taxonomies(key).reference()
      .remove(target);
  }
  public tenants(key: EntityKey<ContentCollection>): ODataNavigationPropertyResource<Tenant> { 
    return this.entity(key).navigationProperty<Tenant>('Tenants'); 
  }
  public fetchTenants(key: EntityKey<ContentCollection>, options?: ODataQueryArgumentsOptions<Tenant>) {
    return this.fetchNavigationProperty<Tenant>(
      this.tenants(key), 
      'entities', options) as Observable<ODataEntities<Tenant>>;
  }
  public addTenantToTenants(key: EntityKey<ContentCollection>, target: ODataEntityResource<ODataEntities<Tenant>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.tenants(key).reference()
      .add(target);
  }
  public removeTenantFromTenants(key: EntityKey<ContentCollection>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Tenant>>, etag?: string} = {}): Observable<any> {
    return this.tenants(key).reference()
      .remove(target);
  }
  //#endregion
}
