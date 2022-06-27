//#region ODataApiGen ODataImports
import {
  ApiConfig,
  EDM_PARSERS
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ContentEntitiesSchema } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/contententities.schema';
//#endregion

//#region ODataApiGen ApiConfig
export const HorselessContentConfig = {
  serviceRootUrl: '',
  name: 'HorselessContent',
  version: '4.0',
  creation: new Date('2022-06-27T15:03:21.9241087+00:00'),
  schemas: [
    ContentEntitiesSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion