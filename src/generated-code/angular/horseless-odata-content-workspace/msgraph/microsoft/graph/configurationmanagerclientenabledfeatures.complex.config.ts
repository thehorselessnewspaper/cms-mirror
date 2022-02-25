//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ConfigurationManagerClientEnabledFeatures } from './configurationmanagerclientenabledfeatures.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ConfigurationManagerClientEnabledFeaturesComplexConfig = {
  name: 'configurationManagerClientEnabledFeatures',
  fields: {
    inventory: {type: 'Edm.Boolean', nullable: false},
    modernApps: {type: 'Edm.Boolean', nullable: false},
    resourceAccess: {type: 'Edm.Boolean', nullable: false},
    deviceConfiguration: {type: 'Edm.Boolean', nullable: false},
    compliancePolicy: {type: 'Edm.Boolean', nullable: false},
    windowsUpdateForBusiness: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<ConfigurationManagerClientEnabledFeatures>;
//#endregion