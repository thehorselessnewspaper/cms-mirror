//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosVppAppAssignmentSettings } from './iosvppappassignmentsettings.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosVppAppAssignmentSettingsComplexConfig = {
  name: 'iosVppAppAssignmentSettings',
  base: 'microsoft.graph.mobileAppAssignmentSettings',
  fields: {
    useDeviceLicensing: {type: 'Edm.Boolean', nullable: false},
    vpnConfigurationId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<IosVppAppAssignmentSettings>;
//#endregion