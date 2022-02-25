//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CloudCommunications } from './cloudcommunications.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CloudCommunicationsEntityConfig = {
  name: 'cloudCommunications',
  base: 'microsoft.graph.entity',
  fields: {
    calls: {type: 'graph.call', collection: true, navigation: true},
    callRecords: {type: 'microsoft.graph.callRecords.callRecord', collection: true, navigation: true},
    onlineMeetings: {type: 'graph.onlineMeeting', collection: true, navigation: true}
  }
} as StructuredTypeConfig<CloudCommunications>;
//#endregion