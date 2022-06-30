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
import { NavigationMenu } from './navigationmenu.entity';
import { NavigationMenuItem } from './navigationmenuitem.entity';
import { Principal } from './principal.entity';
//#endregion

@Injectable()
export class NavigationMenuItemService extends ODataEntitySetService<NavigationMenuItem> {
  constructor(client: ODataClient) {
    super(client, 'NavigationMenuItem', 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.NavigationMenuItem');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public accessControlEntries(key: EntityKey<NavigationMenuItem>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('AccessControlEntries'); 
  }
  public fetchAccessControlEntries(key: EntityKey<NavigationMenuItem>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.accessControlEntries(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToAccessControlEntries(key: EntityKey<NavigationMenuItem>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromAccessControlEntries(key: EntityKey<NavigationMenuItem>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.accessControlEntries(key).reference()
      .remove(target);
  }
  public childNavigationItems(key: EntityKey<NavigationMenuItem>): ODataNavigationPropertyResource<NavigationMenuItem> { 
    return this.entity(key).navigationProperty<NavigationMenuItem>('ChildNavigationItems'); 
  }
  public fetchChildNavigationItems(key: EntityKey<NavigationMenuItem>, options?: ODataQueryArgumentsOptions<NavigationMenuItem>) {
    return this.fetchNavigationProperty<NavigationMenuItem>(
      this.childNavigationItems(key), 
      'entities', options) as Observable<ODataEntities<NavigationMenuItem>>;
  }
  public addNavigationMenuItemToChildNavigationItems(key: EntityKey<NavigationMenuItem>, target: ODataEntityResource<ODataEntities<NavigationMenuItem>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.childNavigationItems(key).reference()
      .add(target);
  }
  public removeNavigationMenuItemFromChildNavigationItems(key: EntityKey<NavigationMenuItem>, {target, etag}: {target?: ODataEntityResource<ODataEntities<NavigationMenuItem>>, etag?: string} = {}): Observable<any> {
    return this.childNavigationItems(key).reference()
      .remove(target);
  }
  public owners(key: EntityKey<NavigationMenuItem>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('Owners'); 
  }
  public fetchOwners(key: EntityKey<NavigationMenuItem>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.owners(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToOwners(key: EntityKey<NavigationMenuItem>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .add(target);
  }
  public removePrincipalFromOwners(key: EntityKey<NavigationMenuItem>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .remove(target);
  }
  public parentNavigationItems(key: EntityKey<NavigationMenuItem>): ODataNavigationPropertyResource<NavigationMenuItem> { 
    return this.entity(key).navigationProperty<NavigationMenuItem>('ParentNavigationItems'); 
  }
  public fetchParentNavigationItems(key: EntityKey<NavigationMenuItem>, options?: ODataQueryArgumentsOptions<NavigationMenuItem>) {
    return this.fetchNavigationProperty<NavigationMenuItem>(
      this.parentNavigationItems(key), 
      'entities', options) as Observable<ODataEntities<NavigationMenuItem>>;
  }
  public addNavigationMenuItemToParentNavigationItems(key: EntityKey<NavigationMenuItem>, target: ODataEntityResource<ODataEntities<NavigationMenuItem>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.parentNavigationItems(key).reference()
      .add(target);
  }
  public removeNavigationMenuItemFromParentNavigationItems(key: EntityKey<NavigationMenuItem>, {target, etag}: {target?: ODataEntityResource<ODataEntities<NavigationMenuItem>>, etag?: string} = {}): Observable<any> {
    return this.parentNavigationItems(key).reference()
      .remove(target);
  }
  public parentNavigationMenus(key: EntityKey<NavigationMenuItem>): ODataNavigationPropertyResource<NavigationMenu> { 
    return this.entity(key).navigationProperty<NavigationMenu>('ParentNavigationMenus'); 
  }
  public fetchParentNavigationMenus(key: EntityKey<NavigationMenuItem>, options?: ODataQueryArgumentsOptions<NavigationMenu>) {
    return this.fetchNavigationProperty<NavigationMenu>(
      this.parentNavigationMenus(key), 
      'entities', options) as Observable<ODataEntities<NavigationMenu>>;
  }
  public addNavigationMenuToParentNavigationMenus(key: EntityKey<NavigationMenuItem>, target: ODataEntityResource<ODataEntities<NavigationMenu>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.parentNavigationMenus(key).reference()
      .add(target);
  }
  public removeNavigationMenuFromParentNavigationMenus(key: EntityKey<NavigationMenuItem>, {target, etag}: {target?: ODataEntityResource<ODataEntities<NavigationMenu>>, etag?: string} = {}): Observable<any> {
    return this.parentNavigationMenus(key).reference()
      .remove(target);
  }
  //#endregion
}
