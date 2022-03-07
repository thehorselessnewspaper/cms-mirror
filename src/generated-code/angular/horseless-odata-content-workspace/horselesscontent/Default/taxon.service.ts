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
import { AccessControlEntry } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/accesscontrolentry.entity';
import { Holonym } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/holonym.entity';
import { Principal } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/principal.entity';
import { Taxon } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/taxon.entity';
import { Taxonomy } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/taxonomy.entity';
//#endregion

@Injectable()
export class TaxonService extends ODataEntitySetService<Taxon> {
  constructor(client: ODataClient) {
    super(client, 'Taxon', 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Taxon');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public accessControlList(key: EntityKey<Taxon>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('AccessControlList'); 
  }
  public fetchAccessControlList(key: EntityKey<Taxon>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.accessControlList(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToAccessControlList(key: EntityKey<Taxon>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.accessControlList(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromAccessControlList(key: EntityKey<Taxon>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.accessControlList(key).reference()
      .remove(target);
  }
  public antecedentTaxons(key: EntityKey<Taxon>): ODataNavigationPropertyResource<Taxon> { 
    return this.entity(key).navigationProperty<Taxon>('AntecedentTaxons'); 
  }
  public fetchAntecedentTaxons(key: EntityKey<Taxon>, options?: ODataQueryArgumentsOptions<Taxon>) {
    return this.fetchNavigationProperty<Taxon>(
      this.antecedentTaxons(key), 
      'entities', options) as Observable<ODataEntities<Taxon>>;
  }
  public addTaxonToAntecedentTaxons(key: EntityKey<Taxon>, target: ODataEntityResource<ODataEntities<Taxon>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.antecedentTaxons(key).reference()
      .add(target);
  }
  public removeTaxonFromAntecedentTaxons(key: EntityKey<Taxon>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Taxon>>, etag?: string} = {}): Observable<any> {
    return this.antecedentTaxons(key).reference()
      .remove(target);
  }
  public derivativeTaxons(key: EntityKey<Taxon>): ODataNavigationPropertyResource<Taxon> { 
    return this.entity(key).navigationProperty<Taxon>('DerivativeTaxons'); 
  }
  public fetchDerivativeTaxons(key: EntityKey<Taxon>, options?: ODataQueryArgumentsOptions<Taxon>) {
    return this.fetchNavigationProperty<Taxon>(
      this.derivativeTaxons(key), 
      'entities', options) as Observable<ODataEntities<Taxon>>;
  }
  public addTaxonToDerivativeTaxons(key: EntityKey<Taxon>, target: ODataEntityResource<ODataEntities<Taxon>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.derivativeTaxons(key).reference()
      .add(target);
  }
  public removeTaxonFromDerivativeTaxons(key: EntityKey<Taxon>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Taxon>>, etag?: string} = {}): Observable<any> {
    return this.derivativeTaxons(key).reference()
      .remove(target);
  }
  public holonyms(key: EntityKey<Taxon>): ODataNavigationPropertyResource<Holonym> { 
    return this.entity(key).navigationProperty<Holonym>('Holonyms'); 
  }
  public fetchHolonyms(key: EntityKey<Taxon>, options?: ODataQueryArgumentsOptions<Holonym>) {
    return this.fetchNavigationProperty<Holonym>(
      this.holonyms(key), 
      'entities', options) as Observable<ODataEntities<Holonym>>;
  }
  public addHolonymToHolonyms(key: EntityKey<Taxon>, target: ODataEntityResource<ODataEntities<Holonym>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.holonyms(key).reference()
      .add(target);
  }
  public removeHolonymFromHolonyms(key: EntityKey<Taxon>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Holonym>>, etag?: string} = {}): Observable<any> {
    return this.holonyms(key).reference()
      .remove(target);
  }
  public owners(key: EntityKey<Taxon>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('Owners'); 
  }
  public fetchOwners(key: EntityKey<Taxon>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.owners(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToOwners(key: EntityKey<Taxon>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .add(target);
  }
  public removePrincipalFromOwners(key: EntityKey<Taxon>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .remove(target);
  }
  public taxonomies(key: EntityKey<Taxon>): ODataNavigationPropertyResource<Taxonomy> { 
    return this.entity(key).navigationProperty<Taxonomy>('Taxonomies'); 
  }
  public fetchTaxonomies(key: EntityKey<Taxon>, options?: ODataQueryArgumentsOptions<Taxonomy>) {
    return this.fetchNavigationProperty<Taxonomy>(
      this.taxonomies(key), 
      'entities', options) as Observable<ODataEntities<Taxonomy>>;
  }
  public addTaxonomyToTaxonomies(key: EntityKey<Taxon>, target: ODataEntityResource<ODataEntities<Taxonomy>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.taxonomies(key).reference()
      .add(target);
  }
  public removeTaxonomyFromTaxonomies(key: EntityKey<Taxon>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Taxonomy>>, etag?: string} = {}): Observable<any> {
    return this.taxonomies(key).reference()
      .remove(target);
  }
  //#endregion
}
