//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkforceIntegrationSupportedEntities } from './workforceintegrationsupportedentities.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WorkforceIntegrationSupportedEntitiesConfig = {
  name: 'workforceIntegrationSupportedEntities',
  flags: true,
  members: WorkforceIntegrationSupportedEntities,
  fields: {
    none: {value: 0},
    shift: {value: 1},
    swapRequest: {value: 2},
    userShiftPreferences: {value: 8},
    openShift: {value: 16},
    openShiftRequest: {value: 32},
    offerShiftRequest: {value: 64},
    unknownFutureValue: {value: 1024}
  }
} as EnumTypeConfig<WorkforceIntegrationSupportedEntities>;
//#endregion