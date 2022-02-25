//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { GroupType } from './grouptype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const GroupTypeConfig = {
  name: 'groupType',
  members: GroupType,
  fields: {
    unifiedGroups: {value: 0},
    azureAD: {value: 1},
    unknownFutureValue: {value: 2}
  }
} as EnumTypeConfig<GroupType>;
//#endregion