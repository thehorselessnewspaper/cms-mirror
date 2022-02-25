//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileAppPublishingState } from './mobileapppublishingstate.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const MobileAppPublishingStateConfig = {
  name: 'mobileAppPublishingState',
  members: MobileAppPublishingState,
  fields: {
    notPublished: {value: 0},
    processing: {value: 1},
    published: {value: 2}
  }
} as EnumTypeConfig<MobileAppPublishingState>;
//#endregion