//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsInformationProtectionIPRangeCollection } from './windowsinformationprotectioniprangecollection.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsInformationProtectionIPRangeCollectionComplexConfig = {
  name: 'windowsInformationProtectionIPRangeCollection',
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    ranges: {type: 'graph.ipRange', nullable: false, collection: true}
  }
} as StructuredTypeConfig<WindowsInformationProtectionIPRangeCollection>;
//#endregion