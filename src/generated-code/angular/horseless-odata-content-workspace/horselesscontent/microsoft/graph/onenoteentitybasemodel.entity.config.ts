//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenoteEntityBaseModel } from './onenoteentitybasemodel.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OnenoteEntityBaseModelEntityConfig = {
  name: 'onenoteEntityBaseModel',
  base: 'microsoft.graph.entity',
  fields: {
    self: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<OnenoteEntityBaseModel>;
//#endregion