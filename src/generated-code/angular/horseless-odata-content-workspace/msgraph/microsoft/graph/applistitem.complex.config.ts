//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AppListItem } from './applistitem.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AppListItemComplexConfig = {
  name: 'appListItem',
  fields: {
    name: {type: 'Edm.String', nullable: false},
    publisher: {type: 'Edm.String'},
    appStoreUrl: {type: 'Edm.String'},
    appId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<AppListItem>;
//#endregion