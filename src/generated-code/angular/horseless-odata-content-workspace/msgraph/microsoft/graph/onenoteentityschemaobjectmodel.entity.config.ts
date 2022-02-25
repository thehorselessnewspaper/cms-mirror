//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenoteEntitySchemaObjectModel } from './onenoteentityschemaobjectmodel.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OnenoteEntitySchemaObjectModelEntityConfig = {
  name: 'onenoteEntitySchemaObjectModel',
  base: 'microsoft.graph.onenoteEntityBaseModel',
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<OnenoteEntitySchemaObjectModel>;
//#endregion