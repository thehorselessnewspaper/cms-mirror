//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DomainState } from './domainstate.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DomainStateComplexConfig = {
  name: 'domainState',
  fields: {
    status: {type: 'Edm.String'},
    operation: {type: 'Edm.String'},
    lastActionDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<DomainState>;
//#endregion