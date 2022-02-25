//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Shared } from './shared.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SharedComplexConfig = {
  name: 'shared',
  fields: {
    owner: {type: 'graph.identitySet'},
    scope: {type: 'Edm.String'},
    sharedBy: {type: 'graph.identitySet'},
    sharedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<Shared>;
//#endregion