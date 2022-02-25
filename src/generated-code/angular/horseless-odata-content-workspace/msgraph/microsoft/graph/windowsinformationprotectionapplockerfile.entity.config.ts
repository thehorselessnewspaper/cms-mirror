//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsInformationProtectionAppLockerFile } from './windowsinformationprotectionapplockerfile.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsInformationProtectionAppLockerFileEntityConfig = {
  name: 'windowsInformationProtectionAppLockerFile',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String'},
    fileHash: {type: 'Edm.String'},
    file: {type: 'Edm.Binary'},
    version: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WindowsInformationProtectionAppLockerFile>;
//#endregion