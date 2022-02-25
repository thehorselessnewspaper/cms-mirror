//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ClonableTeamParts } from './clonableteamparts.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ClonableTeamPartsConfig = {
  name: 'clonableTeamParts',
  flags: true,
  members: ClonableTeamParts,
  fields: {
    apps: {value: 1},
    tabs: {value: 2},
    settings: {value: 4},
    channels: {value: 8},
    members: {value: 16}
  }
} as EnumTypeConfig<ClonableTeamParts>;
//#endregion