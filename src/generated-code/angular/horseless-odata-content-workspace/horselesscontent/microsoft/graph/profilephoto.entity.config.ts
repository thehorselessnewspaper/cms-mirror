//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProfilePhoto } from './profilephoto.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ProfilePhotoEntityConfig = {
  name: 'profilePhoto',
  base: 'microsoft.graph.entity',
  fields: {
    height: {type: 'Edm.Int32'},
    width: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<ProfilePhoto>;
//#endregion