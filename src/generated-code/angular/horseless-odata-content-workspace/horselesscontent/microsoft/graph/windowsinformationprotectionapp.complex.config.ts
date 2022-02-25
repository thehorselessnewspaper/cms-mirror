//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsInformationProtectionApp } from './windowsinformationprotectionapp.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsInformationProtectionAppComplexConfig = {
  name: 'windowsInformationProtectionApp',
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    description: {type: 'Edm.String'},
    publisherName: {type: 'Edm.String'},
    productName: {type: 'Edm.String'},
    denied: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<WindowsInformationProtectionApp>;
//#endregion