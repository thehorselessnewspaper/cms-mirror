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
import { ACEPermissionScope } from './acepermissionscope.enum';
import { ACEPermission } from './acepermission.enum';
import { ACEPermissionType } from './acepermissiontype.enum';
import { AccessControlEntry } from './accesscontrolentry.entity';
import { ContentCollection } from './contentcollection.entity';
import { HorselessContent } from './horselesscontent.entity';
import { HorselessSession } from './horselesssession.entity';
import { HorselessView } from './horselessview.entity';
import { Principal } from './principal.entity';
import { Publication } from './publication.entity';
import { Tenant } from './tenant.entity';
//#endregion

@Injectable()
export class AccessControlEntryService extends ODataEntitySetService<AccessControlEntry> {
  constructor(client: ODataClient) {
    super(client, 'AccessControlEntry', 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry');
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
  public managedContentCollections(key: EntityKey<AccessControlEntry>): ODataNavigationPropertyResource<ContentCollection> { 
    return this.entity(key).navigationProperty<ContentCollection>('ManagedContentCollections'); 
  }
  public fetchManagedContentCollections(key: EntityKey<AccessControlEntry>, options?: ODataQueryArgumentsOptions<ContentCollection>) {
    return this.fetchNavigationProperty<ContentCollection>(
      this.managedContentCollections(key), 
      'entities', options) as Observable<ODataEntities<ContentCollection>>;
  }
  public addContentCollectionToManagedContentCollections(key: EntityKey<AccessControlEntry>, target: ODataEntityResource<ODataEntities<ContentCollection>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.managedContentCollections(key).reference()
      .add(target);
  }
  public removeContentCollectionFromManagedContentCollections(key: EntityKey<AccessControlEntry>, {target, etag}: {target?: ODataEntityResource<ODataEntities<ContentCollection>>, etag?: string} = {}): Observable<any> {
    return this.managedContentCollections(key).reference()
      .remove(target);
  }
  public managedHorselessContents(key: EntityKey<AccessControlEntry>): ODataNavigationPropertyResource<HorselessContent> { 
    return this.entity(key).navigationProperty<HorselessContent>('ManagedHorselessContents'); 
  }
  public fetchManagedHorselessContents(key: EntityKey<AccessControlEntry>, options?: ODataQueryArgumentsOptions<HorselessContent>) {
    return this.fetchNavigationProperty<HorselessContent>(
      this.managedHorselessContents(key), 
      'entities', options) as Observable<ODataEntities<HorselessContent>>;
  }
  public addHorselessContentToManagedHorselessContents(key: EntityKey<AccessControlEntry>, target: ODataEntityResource<ODataEntities<HorselessContent>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.managedHorselessContents(key).reference()
      .add(target);
  }
  public removeHorselessContentFromManagedHorselessContents(key: EntityKey<AccessControlEntry>, {target, etag}: {target?: ODataEntityResource<ODataEntities<HorselessContent>>, etag?: string} = {}): Observable<any> {
    return this.managedHorselessContents(key).reference()
      .remove(target);
  }
  public managedHorselessViews(key: EntityKey<AccessControlEntry>): ODataNavigationPropertyResource<HorselessView> { 
    return this.entity(key).navigationProperty<HorselessView>('ManagedHorselessViews'); 
  }
  public fetchManagedHorselessViews(key: EntityKey<AccessControlEntry>, options?: ODataQueryArgumentsOptions<HorselessView>) {
    return this.fetchNavigationProperty<HorselessView>(
      this.managedHorselessViews(key), 
      'entities', options) as Observable<ODataEntities<HorselessView>>;
  }
  public addHorselessViewToManagedHorselessViews(key: EntityKey<AccessControlEntry>, target: ODataEntityResource<ODataEntities<HorselessView>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.managedHorselessViews(key).reference()
      .add(target);
  }
  public removeHorselessViewFromManagedHorselessViews(key: EntityKey<AccessControlEntry>, {target, etag}: {target?: ODataEntityResource<ODataEntities<HorselessView>>, etag?: string} = {}): Observable<any> {
    return this.managedHorselessViews(key).reference()
      .remove(target);
  }
  public managedPublications(key: EntityKey<AccessControlEntry>): ODataNavigationPropertyResource<Publication> { 
    return this.entity(key).navigationProperty<Publication>('ManagedPublications'); 
  }
  public fetchManagedPublications(key: EntityKey<AccessControlEntry>, options?: ODataQueryArgumentsOptions<Publication>) {
    return this.fetchNavigationProperty<Publication>(
      this.managedPublications(key), 
      'entities', options) as Observable<ODataEntities<Publication>>;
  }
  public addPublicationToManagedPublications(key: EntityKey<AccessControlEntry>, target: ODataEntityResource<ODataEntities<Publication>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.managedPublications(key).reference()
      .add(target);
  }
  public removePublicationFromManagedPublications(key: EntityKey<AccessControlEntry>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Publication>>, etag?: string} = {}): Observable<any> {
    return this.managedPublications(key).reference()
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
  public subjectHorselessSessions(key: EntityKey<AccessControlEntry>): ODataNavigationPropertyResource<HorselessSession> { 
    return this.entity(key).navigationProperty<HorselessSession>('SubjectHorselessSessions'); 
  }
  public fetchSubjectHorselessSessions(key: EntityKey<AccessControlEntry>, options?: ODataQueryArgumentsOptions<HorselessSession>) {
    return this.fetchNavigationProperty<HorselessSession>(
      this.subjectHorselessSessions(key), 
      'entities', options) as Observable<ODataEntities<HorselessSession>>;
  }
  public addHorselessSessionToSubjectHorselessSessions(key: EntityKey<AccessControlEntry>, target: ODataEntityResource<ODataEntities<HorselessSession>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.subjectHorselessSessions(key).reference()
      .add(target);
  }
  public removeHorselessSessionFromSubjectHorselessSessions(key: EntityKey<AccessControlEntry>, {target, etag}: {target?: ODataEntityResource<ODataEntities<HorselessSession>>, etag?: string} = {}): Observable<any> {
    return this.subjectHorselessSessions(key).reference()
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
