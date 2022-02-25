//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsDefenderAdvancedThreatProtectionConfiguration } from './windowsdefenderadvancedthreatprotectionconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsDefenderAdvancedThreatProtectionConfigurationEntityConfig = {
  name: 'windowsDefenderAdvancedThreatProtectionConfiguration',
  base: 'microsoft.graph.deviceConfiguration',
  fields: {
    allowSampleSharing: {type: 'Edm.Boolean', nullable: false},
    enableExpeditedTelemetryReporting: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<WindowsDefenderAdvancedThreatProtectionConfiguration>;
//#endregion