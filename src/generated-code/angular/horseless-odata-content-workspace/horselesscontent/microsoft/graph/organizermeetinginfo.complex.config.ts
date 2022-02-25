//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OrganizerMeetingInfo } from './organizermeetinginfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OrganizerMeetingInfoComplexConfig = {
  name: 'organizerMeetingInfo',
  base: 'microsoft.graph.meetingInfo',
  open: true,
  fields: {
    organizer: {type: 'graph.identitySet', nullable: false}
  }
} as StructuredTypeConfig<OrganizerMeetingInfo>;
//#endregion