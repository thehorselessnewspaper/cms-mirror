//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileAppContent } from './mobileappcontent.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MobileAppContentEntityConfig = {
  name: 'mobileAppContent',
  base: 'microsoft.graph.entity',
  fields: {
    files: {type: 'graph.mobileAppContentFile', collection: true, navigation: true}
  }
} as StructuredTypeConfig<MobileAppContent>;
//#endregion