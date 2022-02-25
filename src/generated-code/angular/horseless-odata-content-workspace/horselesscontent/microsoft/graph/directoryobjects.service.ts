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
import { DirectoryObject } from './directoryobject.entity';
//#endregion

@Injectable()
export class DirectoryObjectsService extends ODataEntitySetService<DirectoryObject> {
  constructor(client: ODataClient) {
    super(client, 'directoryObjects', 'microsoft.graph.directoryObject');
  }
  //#region ODataApiGen Actions
  public getByIds(): ODataActionResource<{ids: string[], types: string[]}, DirectoryObject> { 
    return this.entities().action<{ids: string[], types: string[]}, DirectoryObject>('microsoft.graph.getByIds');
  }
  public callGetByIds(ids: string[], types: string[], options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.callAction<{ids: string[], types: string[]}, DirectoryObject>(
      {ids, types}, 
      this.getByIds(), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public validateProperties(): ODataActionResource<{entityType: string, displayName: string, mailNickname: string, onBehalfOfUserId: string}, any> { 
    return this.entities().action<{entityType: string, displayName: string, mailNickname: string, onBehalfOfUserId: string}, any>('microsoft.graph.validateProperties');
  }
  public callValidateProperties(entityType: string, displayName: string, mailNickname: string, onBehalfOfUserId: string, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<{entityType: string, displayName: string, mailNickname: string, onBehalfOfUserId: string}, any>(
      {entityType, displayName, mailNickname, onBehalfOfUserId}, 
      this.validateProperties(), 
      'none', options);
  }
  public checkMemberGroups(key: EntityKey<DirectoryObject>): ODataActionResource<{groupIds: string[]}, string> { 
    return this.entity(key).action<{groupIds: string[]}, string>('microsoft.graph.checkMemberGroups');
  }
  public callCheckMemberGroups(key: EntityKey<DirectoryObject>, groupIds: string[], options?: ODataQueryArgumentsOptions<string>) {
    return this.callAction<{groupIds: string[]}, string>(
      {groupIds}, 
      this.checkMemberGroups(key), 
      'property', options) as Observable<ODataProperty<string>>;
  }
  public checkMemberObjects(key: EntityKey<DirectoryObject>): ODataActionResource<{ids: string[]}, string> { 
    return this.entity(key).action<{ids: string[]}, string>('microsoft.graph.checkMemberObjects');
  }
  public callCheckMemberObjects(key: EntityKey<DirectoryObject>, ids: string[], options?: ODataQueryArgumentsOptions<string>) {
    return this.callAction<{ids: string[]}, string>(
      {ids}, 
      this.checkMemberObjects(key), 
      'property', options) as Observable<ODataProperty<string>>;
  }
  public getMemberGroups(key: EntityKey<DirectoryObject>): ODataActionResource<{securityEnabledOnly: boolean}, string> { 
    return this.entity(key).action<{securityEnabledOnly: boolean}, string>('microsoft.graph.getMemberGroups');
  }
  public callGetMemberGroups(key: EntityKey<DirectoryObject>, securityEnabledOnly: boolean, options?: ODataQueryArgumentsOptions<string>) {
    return this.callAction<{securityEnabledOnly: boolean}, string>(
      {securityEnabledOnly}, 
      this.getMemberGroups(key), 
      'property', options) as Observable<ODataProperty<string>>;
  }
  public getMemberObjects(key: EntityKey<DirectoryObject>): ODataActionResource<{securityEnabledOnly: boolean}, string> { 
    return this.entity(key).action<{securityEnabledOnly: boolean}, string>('microsoft.graph.getMemberObjects');
  }
  public callGetMemberObjects(key: EntityKey<DirectoryObject>, securityEnabledOnly: boolean, options?: ODataQueryArgumentsOptions<string>) {
    return this.callAction<{securityEnabledOnly: boolean}, string>(
      {securityEnabledOnly}, 
      this.getMemberObjects(key), 
      'property', options) as Observable<ODataProperty<string>>;
  }
  public restore(key: EntityKey<DirectoryObject>): ODataActionResource<null, DirectoryObject> { 
    return this.entity(key).action<null, DirectoryObject>('microsoft.graph.restore');
  }
  public callRestore(key: EntityKey<DirectoryObject>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.callAction<null, DirectoryObject>(
      null, 
      this.restore(key), 
      'entity', options) as Observable<ODataEntity<DirectoryObject>>;
  }
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
