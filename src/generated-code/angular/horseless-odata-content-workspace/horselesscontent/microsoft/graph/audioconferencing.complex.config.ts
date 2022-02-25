//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AudioConferencing } from './audioconferencing.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AudioConferencingComplexConfig = {
  name: 'audioConferencing',
  fields: {
    conferenceId: {type: 'Edm.String'},
    tollNumber: {type: 'Edm.String'},
    tollFreeNumber: {type: 'Edm.String'},
    dialinUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<AudioConferencing>;
//#endregion