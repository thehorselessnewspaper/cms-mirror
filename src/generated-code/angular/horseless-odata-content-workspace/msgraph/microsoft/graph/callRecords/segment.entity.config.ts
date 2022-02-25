//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Segment } from './segment.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SegmentEntityConfig = {
  name: 'segment',
  base: 'microsoft.graph.entity',
  fields: {
    startDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    endDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    caller: {type: 'microsoft.graph.callRecords.endpoint'},
    callee: {type: 'microsoft.graph.callRecords.endpoint'},
    failureInfo: {type: 'microsoft.graph.callRecords.failureInfo'},
    media: {type: 'microsoft.graph.callRecords.media', collection: true}
  }
} as StructuredTypeConfig<Segment>;
//#endregion