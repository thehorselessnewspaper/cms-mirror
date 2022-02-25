//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LocationConstraint } from './locationconstraint.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const LocationConstraintComplexConfig = {
  name: 'locationConstraint',
  fields: {
    locations: {type: 'graph.locationConstraintItem', collection: true},
    isRequired: {type: 'Edm.Boolean'},
    suggestLocation: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<LocationConstraint>;
//#endregion