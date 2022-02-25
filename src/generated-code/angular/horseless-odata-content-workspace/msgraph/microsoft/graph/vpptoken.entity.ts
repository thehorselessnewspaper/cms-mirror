//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { VppTokenAccountType } from './vpptokenaccounttype.enum';
import { VppTokenState } from './vpptokenstate.enum';
import { VppTokenSyncStatus } from './vpptokensyncstatus.enum';
//#endregion

export interface VppToken extends Entity {
  //#region ODataApiGen Properties
  organizationName?: string;
  vppTokenAccountType: VppTokenAccountType;
  appleId?: string;
  expirationDateTime: Date;
  lastSyncDateTime: Date;
  token?: string;
  lastModifiedDateTime: Date;
  state: VppTokenState;
  lastSyncStatus: VppTokenSyncStatus;
  automaticallyUpdateApps: boolean;
  countryOrRegion?: string;
  //#endregion
}