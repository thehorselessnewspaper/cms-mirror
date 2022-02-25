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
import { TeamVisibilityType } from './teamvisibilitytype.enum';
import { ClonableTeamParts } from './clonableteamparts.enum';
import { TeamMemberSettings } from './teammembersettings.complex';
import { TeamGuestSettings } from './teamguestsettings.complex';
import { TeamMessagingSettings } from './teammessagingsettings.complex';
import { TeamFunSettings } from './teamfunsettings.complex';
import { Team } from './team.entity';
//#endregion

@Injectable()
export class TeamsService extends ODataEntitySetService<Team> {
  constructor(client: ODataClient) {
    super(client, 'teams', 'microsoft.graph.team');
  }
  //#region ODataApiGen Actions
  public clone(key: EntityKey<Team>): ODataActionResource<{displayName: string, description: string, mailNickname: string, classification: string, visibility: TeamVisibilityType, partsToClone: ClonableTeamParts}, any> { 
    return this.entity(key).action<{displayName: string, description: string, mailNickname: string, classification: string, visibility: TeamVisibilityType, partsToClone: ClonableTeamParts}, any>('microsoft.graph.clone');
  }
  public callClone(key: EntityKey<Team>, displayName: string, description: string, mailNickname: string, classification: string, visibility: TeamVisibilityType, partsToClone: ClonableTeamParts, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<{displayName: string, description: string, mailNickname: string, classification: string, visibility: TeamVisibilityType, partsToClone: ClonableTeamParts}, any>(
      {displayName, description, mailNickname, classification, visibility, partsToClone}, 
      this.clone(key), 
      'none', options);
  }
  public archive(key: EntityKey<Team>): ODataActionResource<{shouldSetSpoSiteReadOnlyForMembers: boolean}, any> { 
    return this.entity(key).action<{shouldSetSpoSiteReadOnlyForMembers: boolean}, any>('microsoft.graph.archive');
  }
  public callArchive(key: EntityKey<Team>, shouldSetSpoSiteReadOnlyForMembers: boolean, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<{shouldSetSpoSiteReadOnlyForMembers: boolean}, any>(
      {shouldSetSpoSiteReadOnlyForMembers}, 
      this.archive(key), 
      'none', options);
  }
  public unarchive(key: EntityKey<Team>): ODataActionResource<null, any> { 
    return this.entity(key).action<null, any>('microsoft.graph.unarchive');
  }
  public callUnarchive(key: EntityKey<Team>, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<null, any>(
      null, 
      this.unarchive(key), 
      'none', options);
  }
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
