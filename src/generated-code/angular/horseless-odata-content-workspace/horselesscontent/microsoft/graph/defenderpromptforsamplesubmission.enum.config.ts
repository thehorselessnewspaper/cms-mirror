//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DefenderPromptForSampleSubmission } from './defenderpromptforsamplesubmission.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const DefenderPromptForSampleSubmissionConfig = {
  name: 'defenderPromptForSampleSubmission',
  members: DefenderPromptForSampleSubmission,
  fields: {
    userDefined: {value: 0},
    alwaysPrompt: {value: 1},
    promptBeforeSendingPersonalData: {value: 2},
    neverSendData: {value: 3},
    sendAllDataWithoutPrompting: {value: 4}
  }
} as EnumTypeConfig<DefenderPromptForSampleSubmission>;
//#endregion