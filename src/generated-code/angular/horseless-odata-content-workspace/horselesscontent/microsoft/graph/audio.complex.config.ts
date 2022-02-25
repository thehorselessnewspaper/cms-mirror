//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Audio } from './audio.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AudioComplexConfig = {
  name: 'audio',
  fields: {
    album: {type: 'Edm.String'},
    albumArtist: {type: 'Edm.String'},
    artist: {type: 'Edm.String'},
    bitrate: {type: 'Edm.Int64'},
    composers: {type: 'Edm.String'},
    copyright: {type: 'Edm.String'},
    disc: {type: 'Edm.Int16'},
    discCount: {type: 'Edm.Int16'},
    duration: {type: 'Edm.Int64'},
    genre: {type: 'Edm.String'},
    hasDrm: {type: 'Edm.Boolean'},
    isVariableBitrate: {type: 'Edm.Boolean'},
    title: {type: 'Edm.String'},
    track: {type: 'Edm.Int32'},
    trackCount: {type: 'Edm.Int32'},
    year: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<Audio>;
//#endregion