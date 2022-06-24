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
  creation: new Date('2022-06-24T04:22:52.8229188+00:00'),
  schemas: [
    ContentEntitiesSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion