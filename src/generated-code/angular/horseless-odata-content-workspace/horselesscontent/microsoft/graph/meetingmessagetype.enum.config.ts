//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MeetingMessageType } from './meetingmessagetype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const MeetingMessageTypeConfig = {
  name: 'meetingMessageType',
  members: MeetingMessageType,
  fields: {
    none: {value: 0},
    meetingRequest: {value: 1},
    meetingCancelled: {value: 2},
    meetingAccepted: {value: 3},
    meetingTenativelyAccepted: {value: 4},
    meetingDeclined: {value: 5}
  }
} as EnumTypeConfig<MeetingMessageType>;
//#endregion