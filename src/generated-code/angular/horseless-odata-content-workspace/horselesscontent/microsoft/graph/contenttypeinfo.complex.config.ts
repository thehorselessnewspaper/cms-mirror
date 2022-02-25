//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ContentTypeInfo } from './contenttypeinfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ContentTypeInfoComplexConfig = {
  name: 'contentTypeInfo',
  fields: {
    id: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ContentTypeInfo>;
//#endregion