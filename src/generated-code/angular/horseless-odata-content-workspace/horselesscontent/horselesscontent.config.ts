//#region ODataApiGen ODataImports
import {
  ApiConfig,
  EDM_PARSERS
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ContentEntitiesSchema } from './TheHorselessNewspaper/Schemas/ContentModel/ContentEntities/contententities.schema';
import { DefaultSchema } from './Default/default.schema';
//#endregion

//#region ODataApiGen ApiConfig
export const HorselessContentConfig = {
  serviceRootUrl: '',
  name: 'HorselessContent',
  version: '4.0',
  creation: new Date('2022-03-06T04:34:53.4870393+00:00'),
  schemas: [
    ContentEntitiesSchema,
    DefaultSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion