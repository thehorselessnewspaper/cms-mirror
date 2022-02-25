//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsInformationProtectionAppLearningSummary } from './windowsinformationprotectionapplearningsummary.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsInformationProtectionAppLearningSummaryEntityConfig = {
  name: 'windowsInformationProtectionAppLearningSummary',
  base: 'microsoft.graph.entity',
  fields: {
    applicationName: {type: 'Edm.String'},
    applicationType: {type: 'graph.applicationType', nullable: false},
    deviceCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<WindowsInformationProtectionAppLearningSummary>;
//#endregion