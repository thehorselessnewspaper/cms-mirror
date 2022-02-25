//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UserSettings } from './usersettings.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const UserSettingsEntityConfig = {
  name: 'userSettings',
  base: 'microsoft.graph.entity',
  fields: {
    contributionToContentDiscoveryDisabled: {type: 'Edm.Boolean', nullable: false},
    contributionToContentDiscoveryAsOrganizationDisabled: {type: 'Edm.Boolean', nullable: false},
    shiftPreferences: {type: 'graph.shiftPreferences', navigation: true}
  }
} as StructuredTypeConfig<UserSettings>;
//#endregion