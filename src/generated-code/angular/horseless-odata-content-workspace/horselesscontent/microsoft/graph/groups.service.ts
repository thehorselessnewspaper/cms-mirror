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
import { AssignedLicense } from './assignedlicense.complex';
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.complex';
import { AssignedLabel } from './assignedlabel.complex';
import { LicenseProcessingState } from './licenseprocessingstate.complex';
import { DirectoryObject } from './directoryobject.entity';
import { User } from './user.entity';
import { Group } from './group.entity';
import { DriveItem } from './driveitem.entity';
//#endregion

@Injectable()
export class GroupsService extends ODataEntitySetService<Group> {
  constructor(client: ODataClient) {
    super(client, 'groups', 'microsoft.graph.group');
  }
  //#region ODataApiGen Actions
  public assignLicense(key: EntityKey<Group>): ODataActionResource<{addLicenses: AssignedLicense[], removeLicenses: string[]}, Group> { 
    return this.entity(key).action<{addLicenses: AssignedLicense[], removeLicenses: string[]}, Group>('microsoft.graph.assignLicense');
  }
  public callAssignLicense(key: EntityKey<Group>, addLicenses: AssignedLicense[], removeLicenses: string[], options?: ODataQueryArgumentsOptions<Group>) {
    return this.callAction<{addLicenses: AssignedLicense[], removeLicenses: string[]}, Group>(
      {addLicenses, removeLicenses}, 
      this.assignLicense(key), 
      'entity', options) as Observable<ODataEntity<Group>>;
  }
  public validateProperties(key: EntityKey<Group>): ODataActionResource<{displayName: string, mailNickname: string, onBehalfOfUserId: string}, any> { 
    return this.entity(key).action<{displayName: string, mailNickname: string, onBehalfOfUserId: string}, any>('microsoft.graph.validateProperties');
  }
  public callValidateProperties(key: EntityKey<Group>, displayName: string, mailNickname: string, onBehalfOfUserId: string, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<{displayName: string, mailNickname: string, onBehalfOfUserId: string}, any>(
      {displayName, mailNickname, onBehalfOfUserId}, 
      this.validateProperties(key), 
      'none', options);
  }
  public subscribeByMail(key: EntityKey<Group>): ODataActionResource<null, any> { 
    return this.entity(key).action<null, any>('microsoft.graph.subscribeByMail');
  }
  public callSubscribeByMail(key: EntityKey<Group>, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<null, any>(
      null, 
      this.subscribeByMail(key), 
      'none', options);
  }
  public unsubscribeByMail(key: EntityKey<Group>): ODataActionResource<null, any> { 
    return this.entity(key).action<null, any>('microsoft.graph.unsubscribeByMail');
  }
  public callUnsubscribeByMail(key: EntityKey<Group>, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<null, any>(
      null, 
      this.unsubscribeByMail(key), 
      'none', options);
  }
  public addFavorite(key: EntityKey<Group>): ODataActionResource<null, any> { 
    return this.entity(key).action<null, any>('microsoft.graph.addFavorite');
  }
  public callAddFavorite(key: EntityKey<Group>, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<null, any>(
      null, 
      this.addFavorite(key), 
      'none', options);
  }
  public removeFavorite(key: EntityKey<Group>): ODataActionResource<null, any> { 
    return this.entity(key).action<null, any>('microsoft.graph.removeFavorite');
  }
  public callRemoveFavorite(key: EntityKey<Group>, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<null, any>(
      null, 
      this.removeFavorite(key), 
      'none', options);
  }
  public resetUnseenCount(key: EntityKey<Group>): ODataActionResource<null, any> { 
    return this.entity(key).action<null, any>('microsoft.graph.resetUnseenCount');
  }
  public callResetUnseenCount(key: EntityKey<Group>, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<null, any>(
      null, 
      this.resetUnseenCount(key), 
      'none', options);
  }
  public renew(key: EntityKey<Group>): ODataActionResource<null, any> { 
    return this.entity(key).action<null, any>('microsoft.graph.renew');
  }
  public callRenew(key: EntityKey<Group>, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<null, any>(
      null, 
      this.renew(key), 
      'none', options);
  }
  //#endregion
  //#region ODataApiGen Functions
  public delta(): ODataFunctionResource<null, Group> { 
    return this.entities().function<null, Group>('microsoft.graph.delta');
  }
  public callDelta(options?: ODataQueryArgumentsOptions<Group>) {
    return this.callFunction<null, Group>(
      null, 
      this.delta(), 
      'entities', options) as Observable<ODataEntities<Group>>;
  }
  //#endregion
  //#region ODataApiGen Navigations
  public createdOnBehalfOf(key: EntityKey<Group>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('createdOnBehalfOf'); 
  }
  public fetchCreatedOnBehalfOf(key: EntityKey<Group>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.createdOnBehalfOf(key), 
      'entity', options) as Observable<ODataEntity<DirectoryObject>>;
  }
  public setDirectoryObjectAsCreatedOnBehalfOf(key: EntityKey<Group>, target: ODataEntityResource<ODataEntity<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.createdOnBehalfOf(key).reference()
      .set(target, {etag});
  }
  public unsetDirectoryObjectAsCreatedOnBehalfOf(key: EntityKey<Group>, {target, etag}: {target?: ODataEntityResource<ODataEntity<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.createdOnBehalfOf(key).reference()
      .unset({etag});
  }
  public createdByUser(key: EntityKey<Group>): ODataNavigationPropertyResource<User> { 
    return this.entity(key).navigationProperty<User>('createdByUser'); 
  }
  public fetchCreatedByUser(key: EntityKey<Group>, options?: ODataQueryArgumentsOptions<User>) {
    return this.fetchNavigationProperty<User>(
      this.createdByUser(key), 
      'entity', options) as Observable<ODataEntity<User>>;
  }
  public setUserAsCreatedByUser(key: EntityKey<Group>, target: ODataEntityResource<ODataEntity<User>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.createdByUser(key).reference()
      .set(target, {etag});
  }
  public unsetUserAsCreatedByUser(key: EntityKey<Group>, {target, etag}: {target?: ODataEntityResource<ODataEntity<User>>, etag?: string} = {}): Observable<any> {
    return this.createdByUser(key).reference()
      .unset({etag});
  }
  public lastModifiedByUser(key: EntityKey<Group>): ODataNavigationPropertyResource<User> { 
    return this.entity(key).navigationProperty<User>('lastModifiedByUser'); 
  }
  public fetchLastModifiedByUser(key: EntityKey<Group>, options?: ODataQueryArgumentsOptions<User>) {
    return this.fetchNavigationProperty<User>(
      this.lastModifiedByUser(key), 
      'entity', options) as Observable<ODataEntity<User>>;
  }
  public setUserAsLastModifiedByUser(key: EntityKey<Group>, target: ODataEntityResource<ODataEntity<User>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.lastModifiedByUser(key).reference()
      .set(target, {etag});
  }
  public unsetUserAsLastModifiedByUser(key: EntityKey<Group>, {target, etag}: {target?: ODataEntityResource<ODataEntity<User>>, etag?: string} = {}): Observable<any> {
    return this.lastModifiedByUser(key).reference()
      .unset({etag});
  }
  public memberOf(key: EntityKey<Group>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('memberOf'); 
  }
  public fetchMemberOf(key: EntityKey<Group>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.memberOf(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToMemberOf(key: EntityKey<Group>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.memberOf(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromMemberOf(key: EntityKey<Group>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.memberOf(key).reference()
      .remove(target);
  }
  public members(key: EntityKey<Group>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('members'); 
  }
  public fetchMembers(key: EntityKey<Group>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.members(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToMembers(key: EntityKey<Group>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.members(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromMembers(key: EntityKey<Group>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.members(key).reference()
      .remove(target);
  }
  public owners(key: EntityKey<Group>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('owners'); 
  }
  public fetchOwners(key: EntityKey<Group>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.owners(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToOwners(key: EntityKey<Group>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromOwners(key: EntityKey<Group>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.owners(key).reference()
      .remove(target);
  }
  public transitiveMemberOf(key: EntityKey<Group>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('transitiveMemberOf'); 
  }
  public fetchTransitiveMemberOf(key: EntityKey<Group>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.transitiveMemberOf(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToTransitiveMemberOf(key: EntityKey<Group>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.transitiveMemberOf(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromTransitiveMemberOf(key: EntityKey<Group>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.transitiveMemberOf(key).reference()
      .remove(target);
  }
  public transitiveMembers(key: EntityKey<Group>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('transitiveMembers'); 
  }
  public fetchTransitiveMembers(key: EntityKey<Group>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.transitiveMembers(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToTransitiveMembers(key: EntityKey<Group>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.transitiveMembers(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromTransitiveMembers(key: EntityKey<Group>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.transitiveMembers(key).reference()
      .remove(target);
  }
  //#endregion
}
