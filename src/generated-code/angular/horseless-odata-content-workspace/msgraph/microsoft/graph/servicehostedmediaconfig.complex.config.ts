//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ServiceHostedMediaConfig } from './servicehostedmediaconfig.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ServiceHostedMediaConfigComplexConfig = {
  name: 'serviceHostedMediaConfig',
  base: 'microsoft.graph.mediaConfig',
  fields: {
    preFetchMedia: {type: 'graph.mediaInfo', collection: true}
  }
} as StructuredTypeConfig<ServiceHostedMediaConfig>;
//#endregion