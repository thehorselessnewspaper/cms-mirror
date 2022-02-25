//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { TeamMemberSettings } from './teammembersettings.complex';
import { TeamGuestSettings } from './teamguestsettings.complex';
import { TeamMessagingSettings } from './teammessagingsettings.complex';
import { TeamFunSettings } from './teamfunsettings.complex';
import { Schedule } from './schedule.entity';
import { Channel } from './channel.entity';
import { TeamsAppInstallation } from './teamsappinstallation.entity';
import { TeamsAsyncOperation } from './teamsasyncoperation.entity';
//#endregion

export interface Team extends Entity {
  //#region ODataApiGen Properties
  webUrl?: string;
  memberSettings?: TeamMemberSettings;
  guestSettings?: TeamGuestSettings;
  messagingSettings?: TeamMessagingSettings;
  funSettings?: TeamFunSettings;
  isArchived?: boolean;
  schedule?: Schedule;
  channels?: Channel[];
  primaryChannel?: Channel;
  installedApps?: TeamsAppInstallation[];
  operations?: TeamsAsyncOperation[];
  //#endregion
}