//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IPv4Range } from './ipv4range.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IPv4RangeComplexConfig = {
  name: 'iPv4Range',
  base: 'microsoft.graph.ipRange',
  fields: {
    lowerAddress: {type: 'Edm.String', nullable: false},
    upperAddress: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<IPv4Range>;
//#endregion