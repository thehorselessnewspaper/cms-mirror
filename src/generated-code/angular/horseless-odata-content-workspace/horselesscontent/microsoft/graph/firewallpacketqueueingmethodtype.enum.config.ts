//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FirewallPacketQueueingMethodType } from './firewallpacketqueueingmethodtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const FirewallPacketQueueingMethodTypeConfig = {
  name: 'firewallPacketQueueingMethodType',
  members: FirewallPacketQueueingMethodType,
  fields: {
    deviceDefault: {value: 0},
    disabled: {value: 1},
    queueInbound: {value: 2},
    queueOutbound: {value: 3},
    queueBoth: {value: 4}
  }
} as EnumTypeConfig<FirewallPacketQueueingMethodType>;
//#endregion