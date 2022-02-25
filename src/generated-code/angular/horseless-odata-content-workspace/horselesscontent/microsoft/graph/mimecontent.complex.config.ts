//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MimeContent } from './mimecontent.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MimeContentComplexConfig = {
  name: 'mimeContent',
  fields: {
    type: {type: 'Edm.String'},
    value: {type: 'Edm.Binary'}
  }
} as StructuredTypeConfig<MimeContent>;
//#endregion