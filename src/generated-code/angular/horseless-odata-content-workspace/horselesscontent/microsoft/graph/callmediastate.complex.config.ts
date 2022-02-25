//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CallMediaState } from './callmediastate.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CallMediaStateComplexConfig = {
  name: 'callMediaState',
  fields: {
    audio: {type: 'graph.mediaState'}
  }
} as StructuredTypeConfig<CallMediaState>;
//#endregion