//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ExchangeIdFormat } from './exchangeidformat.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ExchangeIdFormatConfig = {
  name: 'exchangeIdFormat',
  members: ExchangeIdFormat,
  fields: {
    entryId: {value: 0},
    ewsId: {value: 1},
    immutableEntryId: {value: 2},
    restId: {value: 3},
    restImmutableEntryId: {value: 4}
  }
} as EnumTypeConfig<ExchangeIdFormat>;
//#endregion