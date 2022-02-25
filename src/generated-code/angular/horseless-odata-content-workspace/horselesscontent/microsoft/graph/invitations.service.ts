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
import { InvitedUserMessageInfo } from './invitedusermessageinfo.complex';
import { Invitation } from './invitation.entity';
import { User } from './user.entity';
//#endregion

@Injectable()
export class InvitationsService extends ODataEntitySetService<Invitation> {
  constructor(client: ODataClient) {
    super(client, 'invitations', 'microsoft.graph.invitation');
  }
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public invitedUser(key: EntityKey<Invitation>): ODataNavigationPropertyResource<User> { 
    return this.entity(key).navigationProperty<User>('invitedUser'); 
  }
  public fetchInvitedUser(key: EntityKey<Invitation>, options?: ODataQueryArgumentsOptions<User>) {
    return this.fetchNavigationProperty<User>(
      this.invitedUser(key), 
      'entity', options) as Observable<ODataEntity<User>>;
  }
  public setUserAsInvitedUser(key: EntityKey<Invitation>, target: ODataEntityResource<ODataEntity<User>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.invitedUser(key).reference()
      .set(target, {etag});
  }
  public unsetUserAsInvitedUser(key: EntityKey<Invitation>, {target, etag}: {target?: ODataEntityResource<ODataEntity<User>>, etag?: string} = {}): Observable<any> {
    return this.invitedUser(key).reference()
      .unset({etag});
  }
  //#endregion
}
