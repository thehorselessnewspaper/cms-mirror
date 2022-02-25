//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DelegateMeetingMessageDeliveryOptions } from './delegatemeetingmessagedeliveryoptions.enum';
import { AutomaticRepliesSetting } from './automaticrepliessetting.complex';
import { LocaleInfo } from './localeinfo.complex';
import { WorkingHours } from './workinghours.complex';
//#endregion

export interface MailboxSettings {
  //#region ODataApiGen Properties
  automaticRepliesSetting?: AutomaticRepliesSetting;
  archiveFolder?: string;
  timeZone?: string;
  language?: LocaleInfo;
  delegateMeetingMessageDeliveryOptions?: DelegateMeetingMessageDeliveryOptions;
  workingHours?: WorkingHours;
  dateFormat?: string;
  timeFormat?: string;
  //#endregion
}