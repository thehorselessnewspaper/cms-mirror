//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenotePatchInsertPosition } from './onenotepatchinsertposition.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const OnenotePatchInsertPositionConfig = {
  name: 'onenotePatchInsertPosition',
  members: OnenotePatchInsertPosition,
  fields: {
    After: {value: 0},
    Before: {value: 1}
  }
} as EnumTypeConfig<OnenotePatchInsertPosition>;
//#endregion