//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DriveItemVersion } from './driveitemversion.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DriveItemVersionEntityConfig = {
  name: 'driveItemVersion',
  base: 'microsoft.graph.baseItemVersion',
  fields: {
    content: {type: 'Edm.Stream'},
    size: {type: 'Edm.Int64'}
  }
} as StructuredTypeConfig<DriveItemVersion>;
//#endregion