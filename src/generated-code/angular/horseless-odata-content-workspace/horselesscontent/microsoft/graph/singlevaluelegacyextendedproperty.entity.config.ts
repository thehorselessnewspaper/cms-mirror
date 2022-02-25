//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SingleValueLegacyExtendedPropertyEntityConfig = {
  name: 'singleValueLegacyExtendedProperty',
  base: 'microsoft.graph.entity',
  fields: {
    value: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SingleValueLegacyExtendedProperty>;
//#endregion