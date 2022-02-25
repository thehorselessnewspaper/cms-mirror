//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DriveItemUploadableProperties } from './driveitemuploadableproperties.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DriveItemUploadablePropertiesComplexConfig = {
  name: 'driveItemUploadableProperties',
  fields: {
    description: {type: 'Edm.String'},
    fileSystemInfo: {type: 'graph.fileSystemInfo'},
    name: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DriveItemUploadableProperties>;
//#endregion