//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MultiValueLegacyExtendedPropertyEntityConfig = {
  name: 'multiValueLegacyExtendedProperty',
  base: 'microsoft.graph.entity',
  fields: {
    value: {type: 'Edm.String', collection: true}
  }
} as StructuredTypeConfig<MultiValueLegacyExtendedProperty>;
//#endregion