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
export const MsGraphConfig = {
  serviceRootUrl: '',
  name: 'MsGraph',
  version: '4.0',
  creation: new Date('2022-02-23T10:12:39.1560597+00:00'),
  schemas: [
    GraphSchema,
    CallRecordsSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion