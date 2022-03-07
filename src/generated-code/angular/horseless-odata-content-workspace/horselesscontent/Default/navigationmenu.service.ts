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
import { NavigationMenu } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/navigationmenu.entity';
import { NavigationMenuItem } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/navigationmenuitem.entity';
import { Principal } from '../TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/principal.entity';
//#endregion

@Injectable()
export class NavigationMenuService extends ODataEntitySetService<NavigationMenu> {
  constructor(client: ODataClient) {
    super(client, 'NavigationMenu', 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.NavigationMenu');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public accessControlList(key: EntityKey<NavigationMenu>): ODataNavigationPropertyResource<AccessControlEntry> { 
    return this.entity(key).navigationProperty<AccessControlEntry>('AccessControlList'); 
  }
  public fetchAccessControlList(key: EntityKey<NavigationMenu>, options?: ODataQueryArgumentsOptions<AccessControlEntry>) {
    return this.fetchNavigationProperty<AccessControlEntry>(
      this.accessControlList(key), 
      'entities', options) as Observable<ODataEntities<AccessControlEntry>>;
  }
  public addAccessControlEntryToAccessControlList(key: EntityKey<NavigationMenu>, target: ODataEntityResource<ODataEntities<AccessControlEntry>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.accessControlList(key).reference()
      .add(target);
  }
  public removeAccessControlEntryFromAccessControlList(key: EntityKey<NavigationMenu>, {target, etag}: {target?: ODataEntityResource<ODataEntities<AccessControlEntry>>, etag?: string} = {}): Observable<any> {
    return this.accessControlList(key).reference()
      .remove(target);
  }
  public childNavigationMenuItems(key: EntityKey<NavigationMenu>): ODataNavigationPropertyResource<NavigationMenuItem> { 
    return this.entity(key).navigationProperty<NavigationMenuItem>('ChildNavigationMenuItems'); 
  }
  public fetchChildNavigationMenuItems(key: EntityKey<NavigationMenu>, options?: ODataQueryArgumentsOptions<NavigationMenuItem>) {
    return this.fetchNavigationProperty<NavigationMenuItem>(
      this.childNavigationMenuItems(key), 
      'entities', options) as Observable<ODataEntities<NavigationMenuItem>>;
  }
  public addNavigationMenuItemToChildNavigationMenuItems(key: EntityKey<NavigationMenu>, target: ODataEntityResource<ODataEntities<NavigationMenuItem>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.childNavigationMenuItems(key).reference()
      .add(target);
  }
  public removeNavigationMenuItemFromChildNavigationMenuItems(key: EntityKey<NavigationMenu>, {target, etag}: {target?: ODataEntityResource<ODataEntities<NavigationMenuItem>>, etag?: string} = {}): Observable<any> {
    return this.childNavigationMenuItems(key).reference()
      .remove(target);
  }
  public children(key: EntityKey<NavigationMenu>): ODataNavigationPropertyResource<NavigationMenu> { 
    return this.entity(key).navigationProperty<NavigationMenu>('Children'); 
  }
  public fetchChildren(key: EntityKey<NavigationMenu>, options?: ODataQueryArgumentsOptions<NavigationMenu>) {
    return this.fetchNavigationProperty<NavigationMenu>(
      this.children(key), 
      'entities', options) as Observable<ODataEntities<NavigationMenu>>;
  }
  public addNavigationMenuToChildren(key: EntityKey<NavigationMenu>, target: ODataEntityResource<ODataEntities<NavigationMenu>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.children(key).reference()
      .add(target);
  }
  public removeNavigationMenuFromChildren(key: EntityKey<NavigationMenu>, {target, etag}: {target?: ODataEntityResource<ODataEntities<NavigationMenu>>, etag?: string} = {}): Observable<any> {
    return this.children(key).reference()
      .remove(target);
  }
  public owners(key: EntityKey<NavigationMenu>): ODataNavigationPropertyResource<Principal> { 
    return this.entity(key).navigationProperty<Principal>('Owners'); 
  }
  public fetchOwners(key: EntityKey<NavigationMenu>, options?: ODataQueryArgumentsOptions<Principal>) {
    return this.fetchNavigationProperty<Principal>(
      this.owners(key), 
      'entities', options) as Observable<ODataEntities<Principal>>;
  }
  public addPrincipalToOwners(key: EntityKey<NavigationMenu>, target: ODataEntityResource<ODataEntities<Principal>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .add(target);
  }
  public removePrincipalFromOwners(key: EntityKey<NavigationMenu>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Principal>>, etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .remove(target);
  }
  public parents(key: EntityKey<NavigationMenu>): ODataNavigationPropertyResource<NavigationMenu> { 
    return this.entity(key).navigationProperty<NavigationMenu>('Parents'); 
  }
  public fetchParents(key: EntityKey<NavigationMenu>, options?: ODataQueryArgumentsOptions<NavigationMenu>) {
    return this.fetchNavigationProperty<NavigationMenu>(
      this.parents(key), 
      'entities', options) as Observable<ODataEntities<NavigationMenu>>;
  }
  public addNavigationMenuToParents(key: EntityKey<NavigationMenu>, target: ODataEntityResource<ODataEntities<NavigationMenu>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.parents(key).reference()
      .add(target);
  }
  public removeNavigationMenuFromParents(key: EntityKey<NavigationMenu>, {target, etag}: {target?: ODataEntityResource<ODataEntities<NavigationMenu>>, etag?: string} = {}): Observable<any> {
    return this.parents(key).reference()
      .remove(target);
  }
  //#endregion
}
