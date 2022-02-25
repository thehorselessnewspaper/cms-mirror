//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceCategory } from './devicecategory.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceCategoryEntityConfig = {
  name: 'deviceCategory',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String'},
    description: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DeviceCategory>;
//#endregion