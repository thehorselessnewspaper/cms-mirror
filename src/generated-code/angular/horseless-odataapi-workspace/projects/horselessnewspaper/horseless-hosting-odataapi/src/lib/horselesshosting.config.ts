//#region ODataApiGen ODataImports
import {
  ApiConfig,
  EDM_PARSERS
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { HostingEntitiesSchema } from './TheHorselessNewspaper/Schemas/HostingModel/HostingEntities/hostingentities.schema';
//#endregion

//#region ODataApiGen ApiConfig
export const HorselessHostingConfig = {
  serviceRootUrl: '',
  name: 'HorselessHosting',
  version: '4.0',
  creation: new Date('2022-06-24T04:24:13.7543396+00:00'),
  schemas: [
    HostingEntitiesSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;
//#endregion