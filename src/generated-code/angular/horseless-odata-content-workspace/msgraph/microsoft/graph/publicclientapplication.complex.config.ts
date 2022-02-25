//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PublicClientApplication } from './publicclientapplication.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PublicClientApplicationComplexConfig = {
  name: 'publicClientApplication',
  fields: {
    redirectUris: {type: 'Edm.String', nullable: false, collection: true}
  }
} as StructuredTypeConfig<PublicClientApplication>;
//#endregion