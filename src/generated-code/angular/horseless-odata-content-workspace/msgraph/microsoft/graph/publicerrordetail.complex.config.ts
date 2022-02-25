//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PublicErrorDetail } from './publicerrordetail.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PublicErrorDetailComplexConfig = {
  name: 'publicErrorDetail',
  fields: {
    code: {type: 'Edm.String'},
    message: {type: 'Edm.String'},
    target: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PublicErrorDetail>;
//#endregion