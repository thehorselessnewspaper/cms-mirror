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
import { GroupLifecyclePolicy } from './grouplifecyclepolicy.entity';
//#endregion

@Injectable()
export class GroupLifecyclePoliciesService extends ODataEntitySetService<GroupLifecyclePolicy> {
  constructor(client: ODataClient) {
    super(client, 'groupLifecyclePolicies', 'microsoft.graph.groupLifecyclePolicy');
  }
  //#region ODataApiGen Actions
  public addGroup(key: EntityKey<GroupLifecyclePolicy>): ODataActionResource<{groupId: string}, boolean> { 
    return this.entity(key).action<{groupId: string}, boolean>('microsoft.graph.addGroup');
  }
  public callAddGroup(key: EntityKey<GroupLifecyclePolicy>, groupId: string, options?: ODataQueryArgumentsOptions<boolean>) {
    return this.callAction<{groupId: string}, boolean>(
      {groupId}, 
      this.addGroup(key), 
      'property', options) as Observable<ODataProperty<boolean>>;
  }
  public removeGroup(key: EntityKey<GroupLifecyclePolicy>): ODataActionResource<{groupId: string}, boolean> { 
    return this.entity(key).action<{groupId: string}, boolean>('microsoft.graph.removeGroup');
  }
  public callRemoveGroup(key: EntityKey<GroupLifecyclePolicy>, groupId: string, options?: ODataQueryArgumentsOptions<boolean>) {
    return this.callAction<{groupId: string}, boolean>(
      {groupId}, 
      this.removeGroup(key), 
      'property', options) as Observable<ODataProperty<boolean>>;
  }
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
