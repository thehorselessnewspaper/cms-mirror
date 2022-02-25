//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileAppCategory } from './mobileappcategory.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MobileAppCategoryEntityConfig = {
  name: 'mobileAppCategory',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as StructuredTypeConfig<MobileAppCategory>;
//#endregion