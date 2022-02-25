//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AddIn } from './addin.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AddInComplexConfig = {
  name: 'addIn',
  fields: {
    id: {type: 'Edm.Guid'},
    type: {type: 'Edm.String', nullable: false},
    properties: {type: 'graph.keyValue', nullable: false, collection: true}
  }
} as StructuredTypeConfig<AddIn>;
//#endregion