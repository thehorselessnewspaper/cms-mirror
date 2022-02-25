//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MeetingRequestType } from './meetingrequesttype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const MeetingRequestTypeConfig = {
  name: 'meetingRequestType',
  members: MeetingRequestType,
  fields: {
    none: {value: 0},
    newMeetingRequest: {value: 1},
    fullUpdate: {value: 65536},
    informationalUpdate: {value: 131072},
    silentUpdate: {value: 262144},
    outdated: {value: 524288},
    principalWantsCopy: {value: 1048576}
  }
} as EnumTypeConfig<MeetingRequestType>;
//#endregion