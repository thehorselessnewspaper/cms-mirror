//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AutomaticRepliesSetting } from './automaticrepliessetting.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AutomaticRepliesSettingComplexConfig = {
  name: 'automaticRepliesSetting',
  fields: {
    status: {type: 'graph.automaticRepliesStatus'},
    externalAudience: {type: 'graph.externalAudienceScope'},
    scheduledStartDateTime: {type: 'graph.dateTimeTimeZone'},
    scheduledEndDateTime: {type: 'graph.dateTimeTimeZone'},
    internalReplyMessage: {type: 'Edm.String'},
    externalReplyMessage: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<AutomaticRepliesSetting>;
//#endregion