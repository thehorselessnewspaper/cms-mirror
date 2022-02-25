//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EBookInstallSummary } from './ebookinstallsummary.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EBookInstallSummaryEntityConfig = {
  name: 'eBookInstallSummary',
  base: 'microsoft.graph.entity',
  fields: {
    installedDeviceCount: {type: 'Edm.Int32', nullable: false},
    failedDeviceCount: {type: 'Edm.Int32', nullable: false},
    notInstalledDeviceCount: {type: 'Edm.Int32', nullable: false},
    installedUserCount: {type: 'Edm.Int32', nullable: false},
    failedUserCount: {type: 'Edm.Int32', nullable: false},
    notInstalledUserCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<EBookInstallSummary>;
//#endregion