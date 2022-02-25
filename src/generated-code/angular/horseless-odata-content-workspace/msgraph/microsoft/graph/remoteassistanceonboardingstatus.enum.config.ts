//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RemoteAssistanceOnboardingStatus } from './remoteassistanceonboardingstatus.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RemoteAssistanceOnboardingStatusConfig = {
  name: 'remoteAssistanceOnboardingStatus',
  members: RemoteAssistanceOnboardingStatus,
  fields: {
    notOnboarded: {value: 0},
    onboarding: {value: 1},
    onboarded: {value: 2}
  }
} as EnumTypeConfig<RemoteAssistanceOnboardingStatus>;
//#endregion