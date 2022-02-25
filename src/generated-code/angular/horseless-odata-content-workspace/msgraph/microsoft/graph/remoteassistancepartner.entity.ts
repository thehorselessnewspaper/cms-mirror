//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { RemoteAssistanceOnboardingStatus } from './remoteassistanceonboardingstatus.enum';
//#endregion

export interface RemoteAssistancePartner extends Entity {
  //#region ODataApiGen Properties
  displayName?: string;
  onboardingUrl?: string;
  onboardingStatus: RemoteAssistanceOnboardingStatus;
  lastConnectionDateTime: Date;
  //#endregion
}