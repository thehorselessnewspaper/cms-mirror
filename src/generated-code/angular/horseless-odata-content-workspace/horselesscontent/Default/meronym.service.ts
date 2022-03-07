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
import { Meronym } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/meronym.entity';
import { Principal } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/principal.entity';
//#endregion

@Injectable()
export class MeronymService extends ODataEntitySetService<Meronym> {
  constructor(client: ODataClient) {
    super(client, 'Meronym', 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Meronym');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public accessControlList(key: EntityKey<Meronym>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('AccessControlList'); 
  }
  public fetchAccessControlList(key: EntityKey<Meronym>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.accessControlList(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToAccessControlList(key: EntityKey<Meronym>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.accessControlList(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromAccessControlList(key: EntityKey<Meronym>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.accessControlList(key).reference()
      .remove(target);
  }
  public holonyms(key: EntityKey<Meronym>): ODataNavigationPropertyResource<Holonym> { 
    return this.entity(key).navigationProperty<Holonym>('Holonyms'); 
  }
  public fetchHolonyms(key: EntityKey<Meronym>, options?: ODataQueryArgumentsOptions<Holonym>) {
    return this.fetchNavigationProperty<Holonym>(
      this.holonyms(key), 
      'entities', options) as Observable<ODataEntities<Holonym>>;
  }
  public addHolonymToHolonyms(key: EntityKey<Meronym>, target: ODataEntityResource<ODataEntities<Holonym>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.holonyms(key).reference()
      .add(target);
  }
  public removeHolonymFromHolonyms(key: EntityKey<Meronym>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Holonym>>, etag?: string} = {}): Observable<any> {
    return this.holonyms(key).reference()
      .remove(target);
  }
  public owners(key: EntityKey<Meronym>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('Owners'); 
  }
  public fetchOwners(key: EntityKey<Meronym>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.owners(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToOwners(key: EntityKey<Meronym>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .add(target);
  }
  public removePrincipalFromOwners(key: EntityKey<Meronym>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .remove(target);
  }
  //#endregion
}
