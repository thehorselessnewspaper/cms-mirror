//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsInformationProtectionDesktopApp } from './windowsinformationprotectiondesktopapp.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsInformationProtectionDesktopAppComplexConfig = {
  name: 'windowsInformationProtectionDesktopApp',
  base: 'microsoft.graph.windowsInformationProtectionApp',
  fields: {
    binaryName: {type: 'Edm.String', nullable: false},
    binaryVersionLow: {type: 'Edm.String'},
    binaryVersionHigh: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WindowsInformationProtectionDesktopApp>;
//#endregion