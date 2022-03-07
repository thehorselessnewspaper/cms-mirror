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
import { ContentCollection } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/contentcollection.entity';
import { Taxon } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/taxon.entity';
import { Taxonomy } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/taxonomy.entity';
//#endregion

@Injectable()
export class TaxonomyService extends ODataEntitySetService<Taxonomy> {
  constructor(client: ODataClient) {
    super(client, 'Taxonomy', 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Taxonomy');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public contentCollections(key: EntityKey<Taxonomy>): ODataNavigationPropertyResource<ContentCollection> { 
    return this.entity(key).navigationProperty<ContentCollection>('ContentCollections'); 
  }
  public fetchContentCollections(key: EntityKey<Taxonomy>, options?: ODataQueryArgumentsOptions<ContentCollection>) {
    return this.fetchNavigationProperty<ContentCollection>(
      this.contentCollections(key), 
      'entities', options) as Observable<ODataEntities<ContentCollection>>;
  }
  public addContentCollectionToContentCollections(key: EntityKey<Taxonomy>, target: ODataEntityResource<ODataEntities<ContentCollection>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.contentCollections(key).reference()
      .add(target);
  }
  public removeContentCollectionFromContentCollections(key: EntityKey<Taxonomy>, {target, etag}: {target?: ODataEntityResource<ODataEntities<ContentCollection>>, etag?: string} = {}): Observable<any> {
    return this.contentCollections(key).reference()
      .remove(target);
  }
  public taxons(key: EntityKey<Taxonomy>): ODataNavigationPropertyResource<Taxon> { 
    return this.entity(key).navigationProperty<Taxon>('Taxons'); 
  }
  public fetchTaxons(key: EntityKey<Taxonomy>, options?: ODataQueryArgumentsOptions<Taxon>) {
    return this.fetchNavigationProperty<Taxon>(
      this.taxons(key), 
      'entities', options) as Observable<ODataEntities<Taxon>>;
  }
  public addTaxonToTaxons(key: EntityKey<Taxonomy>, target: ODataEntityResource<ODataEntities<Taxon>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.taxons(key).reference()
      .add(target);
  }
  public removeTaxonFromTaxons(key: EntityKey<Taxonomy>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Taxon>>, etag?: string} = {}): Observable<any> {
    return this.taxons(key).reference()
      .remove(target);
  }
  //#endregion
}
