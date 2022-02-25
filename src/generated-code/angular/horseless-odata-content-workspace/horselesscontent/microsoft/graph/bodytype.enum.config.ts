//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { BodyType } from './bodytype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const BodyTypeConfig = {
  name: 'bodyType',
  members: BodyType,
  fields: {
    text: {value: 0},
    html: {value: 1}
  }
} as EnumTypeConfig<BodyType>;
//#endregion