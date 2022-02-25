//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RecipientScopeType } from './recipientscopetype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RecipientScopeTypeConfig = {
  name: 'recipientScopeType',
  flags: true,
  members: RecipientScopeType,
  fields: {
    none: {value: 0},
    internal: {value: 1},
    external: {value: 2},
    externalPartner: {value: 4},
    externalNonPartner: {value: 8}
  }
} as EnumTypeConfig<RecipientScopeType>;
//#endregion