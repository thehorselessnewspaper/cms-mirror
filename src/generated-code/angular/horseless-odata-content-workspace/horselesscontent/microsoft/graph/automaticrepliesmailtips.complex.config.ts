//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AutomaticRepliesMailTips } from './automaticrepliesmailtips.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AutomaticRepliesMailTipsComplexConfig = {
  name: 'automaticRepliesMailTips',
  fields: {
    message: {type: 'Edm.String'},
    messageLanguage: {type: 'graph.localeInfo'},
    scheduledStartTime: {type: 'graph.dateTimeTimeZone'},
    scheduledEndTime: {type: 'graph.dateTimeTimeZone'}
  }
} as StructuredTypeConfig<AutomaticRepliesMailTips>;
//#endregion