//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaStream } from './mediastream.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MediaStreamComplexConfig = {
  name: 'mediaStream',
  fields: {
    mediaType: {type: 'graph.modality', nullable: false},
    label: {type: 'Edm.String'},
    sourceId: {type: 'Edm.String', nullable: false},
    direction: {type: 'graph.mediaDirection', nullable: false},
    serverMuted: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<MediaStream>;
//#endregion