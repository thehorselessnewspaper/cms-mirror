﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Session } from './session.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SessionEntityConfig = {
  name: 'session',
  base: 'microsoft.graph.entity',
  fields: {
    modalities: {type: 'microsoft.graph.callRecords.modality', nullable: false, collection: true},
    startDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    endDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    caller: {type: 'microsoft.graph.callRecords.endpoint'},
    callee: {type: 'microsoft.graph.callRecords.endpoint'},
    failureInfo: {type: 'microsoft.graph.callRecords.failureInfo'},
    segments: {type: 'microsoft.graph.callRecords.segment', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Session>;
//#endregion