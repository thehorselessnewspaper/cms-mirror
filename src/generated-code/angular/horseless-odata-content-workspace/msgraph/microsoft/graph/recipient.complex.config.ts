//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Recipient } from './recipient.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const RecipientComplexConfig = {
  name: 'recipient',
  fields: {
    emailAddress: {type: 'graph.emailAddress'}
  }
} as StructuredTypeConfig<Recipient>;
//#endregion