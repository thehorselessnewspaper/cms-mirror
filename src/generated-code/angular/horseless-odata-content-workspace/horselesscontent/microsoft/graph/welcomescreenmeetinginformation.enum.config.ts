//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WelcomeScreenMeetingInformation } from './welcomescreenmeetinginformation.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WelcomeScreenMeetingInformationConfig = {
  name: 'welcomeScreenMeetingInformation',
  members: WelcomeScreenMeetingInformation,
  fields: {
    userDefined: {value: 0},
    showOrganizerAndTimeOnly: {value: 1},
    showOrganizerAndTimeAndSubject: {value: 2}
  }
} as EnumTypeConfig<WelcomeScreenMeetingInformation>;
//#endregion