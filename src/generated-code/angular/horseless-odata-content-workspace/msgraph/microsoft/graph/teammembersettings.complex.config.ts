//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeamMemberSettings } from './teammembersettings.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TeamMemberSettingsComplexConfig = {
  name: 'teamMemberSettings',
  fields: {
    allowCreateUpdateChannels: {type: 'Edm.Boolean'},
    allowDeleteChannels: {type: 'Edm.Boolean'},
    allowAddRemoveApps: {type: 'Edm.Boolean'},
    allowCreateUpdateRemoveTabs: {type: 'Edm.Boolean'},
    allowCreateUpdateRemoveConnectors: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<TeamMemberSettings>;
//#endregion