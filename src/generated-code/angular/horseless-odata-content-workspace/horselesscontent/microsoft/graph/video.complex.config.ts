//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Video } from './video.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const VideoComplexConfig = {
  name: 'video',
  fields: {
    audioBitsPerSample: {type: 'Edm.Int32'},
    audioChannels: {type: 'Edm.Int32'},
    audioFormat: {type: 'Edm.String'},
    audioSamplesPerSecond: {type: 'Edm.Int32'},
    bitrate: {type: 'Edm.Int32'},
    duration: {type: 'Edm.Int64'},
    fourCC: {type: 'Edm.String'},
    frameRate: {type: 'Edm.Double'},
    height: {type: 'Edm.Int32'},
    width: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<Video>;
//#endregion