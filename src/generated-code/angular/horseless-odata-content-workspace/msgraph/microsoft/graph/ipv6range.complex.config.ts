//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IPv6Range } from './ipv6range.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IPv6RangeComplexConfig = {
  name: 'iPv6Range',
  base: 'microsoft.graph.ipRange',
  fields: {
    lowerAddress: {type: 'Edm.String', nullable: false},
    upperAddress: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<IPv6Range>;
//#endregion