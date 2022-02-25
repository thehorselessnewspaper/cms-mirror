//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MailDestinationRoutingReason } from './maildestinationroutingreason.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const MailDestinationRoutingReasonConfig = {
  name: 'mailDestinationRoutingReason',
  members: MailDestinationRoutingReason,
  fields: {
    none: {value: 0},
    mailFlowRule: {value: 1},
    safeSender: {value: 2},
    blockedSender: {value: 3},
    advancedSpamFiltering: {value: 4},
    domainAllowList: {value: 5},
    domainBlockList: {value: 6},
    notInAddressBook: {value: 7},
    firstTimeSender: {value: 8},
    autoPurgeToInbox: {value: 9},
    autoPurgeToJunk: {value: 10},
    autoPurgeToDeleted: {value: 11},
    outbound: {value: 12},
    notJunk: {value: 13},
    junk: {value: 14},
    unknownFutureValue: {value: 15}
  }
} as EnumTypeConfig<MailDestinationRoutingReason>;
//#endregion