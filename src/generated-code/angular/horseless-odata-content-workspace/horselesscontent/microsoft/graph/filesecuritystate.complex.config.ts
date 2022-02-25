//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FileSecurityState } from './filesecuritystate.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const FileSecurityStateComplexConfig = {
  name: 'fileSecurityState',
  fields: {
    fileHash: {type: 'graph.fileHash'},
    name: {type: 'Edm.String'},
    path: {type: 'Edm.String'},
    riskScore: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<FileSecurityState>;
//#endregion