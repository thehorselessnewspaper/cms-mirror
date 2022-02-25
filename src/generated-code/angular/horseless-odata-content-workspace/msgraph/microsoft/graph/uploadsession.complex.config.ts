//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UploadSession } from './uploadsession.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const UploadSessionComplexConfig = {
  name: 'uploadSession',
  fields: {
    uploadUrl: {type: 'Edm.String'},
    expirationDateTime: {type: 'Edm.DateTimeOffset'},
    nextExpectedRanges: {type: 'Edm.String', collection: true}
  }
} as StructuredTypeConfig<UploadSession>;
//#endregion