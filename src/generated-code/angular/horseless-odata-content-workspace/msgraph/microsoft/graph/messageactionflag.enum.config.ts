//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MessageActionFlag } from './messageactionflag.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const MessageActionFlagConfig = {
  name: 'messageActionFlag',
  members: MessageActionFlag,
  fields: {
    any: {value: 0},
    call: {value: 1},
    doNotForward: {value: 2},
    followUp: {value: 3},
    fyi: {value: 4},
    forward: {value: 5},
    noResponseNecessary: {value: 6},
    read: {value: 7},
    reply: {value: 8},
    replyToAll: {value: 9},
    review: {value: 10}
  }
} as EnumTypeConfig<MessageActionFlag>;
//#endregion