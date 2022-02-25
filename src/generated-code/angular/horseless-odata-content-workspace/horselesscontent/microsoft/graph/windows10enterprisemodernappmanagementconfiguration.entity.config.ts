//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Windows10EnterpriseModernAppManagementConfiguration } from './windows10enterprisemodernappmanagementconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const Windows10EnterpriseModernAppManagementConfigurationEntityConfig = {
  name: 'windows10EnterpriseModernAppManagementConfiguration',
  base: 'microsoft.graph.deviceConfiguration',
  fields: {
    uninstallBuiltInApps: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<Windows10EnterpriseModernAppManagementConfiguration>;
//#endregion