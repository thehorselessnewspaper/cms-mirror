//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosLobAppAssignmentSettings } from './ioslobappassignmentsettings.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosLobAppAssignmentSettingsComplexConfig = {
  name: 'iosLobAppAssignmentSettings',
  base: 'microsoft.graph.mobileAppAssignmentSettings',
  fields: {
    vpnConfigurationId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<IosLobAppAssignmentSettings>;
//#endregion