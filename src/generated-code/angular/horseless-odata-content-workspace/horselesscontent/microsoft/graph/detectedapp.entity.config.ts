//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DetectedApp } from './detectedapp.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DetectedAppEntityConfig = {
  name: 'detectedApp',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String'},
    version: {type: 'Edm.String'},
    sizeInByte: {type: 'Edm.Int64', nullable: false},
    deviceCount: {type: 'Edm.Int32', nullable: false},
    managedDevices: {type: 'graph.managedDevice', collection: true, navigation: true}
  }
} as StructuredTypeConfig<DetectedApp>;
//#endregion