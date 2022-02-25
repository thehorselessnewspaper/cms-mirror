//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosStoreAppAssignmentSettings } from './iosstoreappassignmentsettings.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosStoreAppAssignmentSettingsComplexConfig = {
  name: 'iosStoreAppAssignmentSettings',
  base: 'microsoft.graph.mobileAppAssignmentSettings',
  fields: {
    vpnConfigurationId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<IosStoreAppAssignmentSettings>;
//#endregion