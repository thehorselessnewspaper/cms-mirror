//#region ODataApiGen ODataImports
import {
  ApiConfig,
  EDM_PARSERS
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { GraphSchema } from './microsoft/graph/graph.schema';
import { CallRecordsSchema } from './microsoft/graph/callRecords/callrecords.schema';
//#endregion

//#region ODataApiGen ApiConfig
export const HorselessContentConfig = {
  serviceRootUrl: '',
  name: 'HorselessContent',
  version: '4.0',
  creation: new Date('2022-02-23T10:14:45.6760390+00:00'),
  schemas: [
    GraphSchema,
    CallRecordsSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion