//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsInformationProtectionNetworkLearningSummary } from './windowsinformationprotectionnetworklearningsummary.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsInformationProtectionNetworkLearningSummaryEntityConfig = {
  name: 'windowsInformationProtectionNetworkLearningSummary',
  base: 'microsoft.graph.entity',
  fields: {
    url: {type: 'Edm.String'},
    deviceCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<WindowsInformationProtectionNetworkLearningSummary>;
//#endregion