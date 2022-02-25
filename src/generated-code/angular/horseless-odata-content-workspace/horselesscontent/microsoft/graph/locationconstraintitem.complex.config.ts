//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LocationConstraintItem } from './locationconstraintitem.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const LocationConstraintItemComplexConfig = {
  name: 'locationConstraintItem',
  base: 'microsoft.graph.location',
  fields: {
    resolveAvailability: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<LocationConstraintItem>;
//#endregion