//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MicrosoftStoreForBusinessAppAssignmentSettings } from './microsoftstoreforbusinessappassignmentsettings.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MicrosoftStoreForBusinessAppAssignmentSettingsComplexConfig = {
  name: 'microsoftStoreForBusinessAppAssignmentSettings',
  base: 'microsoft.graph.mobileAppAssignmentSettings',
  fields: {
    useDeviceContext: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<MicrosoftStoreForBusinessAppAssignmentSettings>;
//#endregion