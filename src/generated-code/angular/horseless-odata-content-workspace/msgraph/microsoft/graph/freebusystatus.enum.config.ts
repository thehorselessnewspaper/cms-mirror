//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FreeBusyStatus } from './freebusystatus.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const FreeBusyStatusConfig = {
  name: 'freeBusyStatus',
  members: FreeBusyStatus,
  fields: {
    free: {value: 0},
    tentative: {value: 1},
    busy: {value: 2},
    oof: {value: 3},
    workingElsewhere: {value: 4},
    unknown: {value: -1}
  }
} as EnumTypeConfig<FreeBusyStatus>;
//#endregion