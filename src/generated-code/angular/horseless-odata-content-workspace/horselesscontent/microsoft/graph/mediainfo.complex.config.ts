//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MediaInfo } from './mediainfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MediaInfoComplexConfig = {
  name: 'mediaInfo',
  fields: {
    uri: {type: 'Edm.String', nullable: false},
    resourceId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<MediaInfo>;
//#endregion