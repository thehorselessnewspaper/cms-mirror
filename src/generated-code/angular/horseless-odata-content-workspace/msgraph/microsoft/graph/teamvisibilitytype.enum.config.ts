//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeamVisibilityType } from './teamvisibilitytype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const TeamVisibilityTypeConfig = {
  name: 'teamVisibilityType',
  members: TeamVisibilityType,
  fields: {
    private: {value: 0},
    public: {value: 1},
    hiddenMembership: {value: 2},
    unknownFutureValue: {value: 3}
  }
} as EnumTypeConfig<TeamVisibilityType>;
//#endregion