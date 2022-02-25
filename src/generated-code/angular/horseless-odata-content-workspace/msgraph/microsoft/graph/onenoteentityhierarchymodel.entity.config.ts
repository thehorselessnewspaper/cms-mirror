//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenoteEntityHierarchyModel } from './onenoteentityhierarchymodel.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OnenoteEntityHierarchyModelEntityConfig = {
  name: 'onenoteEntityHierarchyModel',
  base: 'microsoft.graph.onenoteEntitySchemaObjectModel',
  fields: {
    displayName: {type: 'Edm.String'},
    createdBy: {type: 'graph.identitySet'},
    lastModifiedBy: {type: 'graph.identitySet'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<OnenoteEntityHierarchyModel>;
//#endregion