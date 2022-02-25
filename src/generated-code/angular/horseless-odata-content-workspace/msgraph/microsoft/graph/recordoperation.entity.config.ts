//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RecordOperation } from './recordoperation.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const RecordOperationEntityConfig = {
  name: 'recordOperation',
  base: 'microsoft.graph.commsOperation',
  open: true,
  fields: {
    recordingLocation: {type: 'Edm.String'},
    recordingAccessToken: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<RecordOperation>;
//#endregion