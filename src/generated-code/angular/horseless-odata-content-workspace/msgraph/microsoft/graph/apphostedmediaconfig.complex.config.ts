//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AppHostedMediaConfig } from './apphostedmediaconfig.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AppHostedMediaConfigComplexConfig = {
  name: 'appHostedMediaConfig',
  base: 'microsoft.graph.mediaConfig',
  fields: {
    blob: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<AppHostedMediaConfig>;
//#endregion