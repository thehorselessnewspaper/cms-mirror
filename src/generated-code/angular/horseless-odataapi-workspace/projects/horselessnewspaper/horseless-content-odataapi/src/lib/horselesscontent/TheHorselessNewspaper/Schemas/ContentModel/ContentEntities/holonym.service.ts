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
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AccessControlEntry } from './accesscontrolentry.entity';
import { Holonym } from './holonym.entity';
import { Meronym } from './meronym.entity';
import { Principal } from './principal.entity';
import { Taxon } from './taxon.entity';
//#endregion

@Injectable()
export class HolonymService extends ODataEntitySetService<Holonym> {
  constructor(client: ODataClient) {
    super(client, 'Holonym', 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Holonym');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public accessControlEntries(key: EntityKey<Holonym>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('AccessControlEntries'); 
  }
  public fetchAccessControlEntries(key: EntityKey<Holonym>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.accessControlEntries(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToAccessControlEntries(key: EntityKey<Holonym>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromAccessControlEntries(key: EntityKey<Holonym>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .remove(target);
  }
  public meronyms(key: EntityKey<Holonym>): ODataNavigationPropertyResource<Meronym> { 
    return this.entity(key).navigationProperty<Meronym>('Meronyms'); 
  }
  public fetchMeronyms(key: EntityKey<Holonym>, options?: ODataQueryArgumentsOptions<Meronym>) {
    return this.fetchNavigationProperty<Meronym>(
      this.meronyms(key), 
      'entities', options) as Observable<ODataEntities<Meronym>>;
  }
  public addMeronymToMeronyms(key: EntityKey<Holonym>, target: ODataEntityResource<ODataEntities<Meronym>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.meronyms(key).reference()
      .add(target);
  }
  public removeMeronymFromMeronyms(key: EntityKey<Holonym>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Meronym>>, etag?: string} = {}): Observable<any> {
    return this.meronyms(key).reference()
      .remove(target);
  }
  public owners(key: EntityKey<Holonym>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('Owners'); 
  }
  public fetchOwners(key: EntityKey<Holonym>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.owners(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToOwners(key: EntityKey<Holonym>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .add(target);
  }
  public removePrincipalFromOwners(key: EntityKey<Holonym>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .remove(target);
  }
  public taxons(key: EntityKey<Holonym>): ODataNavigationPropertyResource<Taxon> { 
    return this.entity(key).navigationProperty<Taxon>('Taxons'); 
  }
  public fetchTaxons(key: EntityKey<Holonym>, options?: ODataQueryArgumentsOptions<Taxon>) {
    return this.fetchNavigationProperty<Taxon>(
      this.taxons(key), 
      'entities', options) as Observable<ODataEntities<Taxon>>;
  }
  public addTaxonToTaxons(key: EntityKey<Holonym>, target: ODataEntityResource<ODataEntities<Taxon>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.taxons(key).reference()
      .add(target);
  }
  public removeTaxonFromTaxons(key: EntityKey<Holonym>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Taxon>>, etag?: string} = {}): Observable<any> {
    return this.taxons(key).reference()
      .remove(target);
  }
  //#endregion
}
