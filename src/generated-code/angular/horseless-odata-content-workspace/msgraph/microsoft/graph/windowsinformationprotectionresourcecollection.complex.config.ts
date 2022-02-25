//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsInformationProtectionResourceCollection } from './windowsinformationprotectionresourcecollection.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsInformationProtectionResourceCollectionComplexConfig = {
  name: 'windowsInformationProtectionResourceCollection',
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    resources: {type: 'Edm.String', collection: true}
  }
} as StructuredTypeConfig<WindowsInformationProtectionResourceCollection>;
//#endregion