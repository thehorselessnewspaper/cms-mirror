//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EditionUpgradeConfiguration } from './editionupgradeconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EditionUpgradeConfigurationEntityConfig = {
  name: 'editionUpgradeConfiguration',
  base: 'microsoft.graph.deviceConfiguration',
  fields: {
    licenseType: {type: 'graph.editionUpgradeLicenseType', nullable: false},
    targetEdition: {type: 'graph.windows10EditionType', nullable: false},
    license: {type: 'Edm.String'},
    productKey: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<EditionUpgradeConfiguration>;
//#endregion