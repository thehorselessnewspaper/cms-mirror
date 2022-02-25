//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OptionalClaim } from './optionalclaim.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OptionalClaimComplexConfig = {
  name: 'optionalClaim',
  fields: {
    name: {type: 'Edm.String', nullable: false},
    source: {type: 'Edm.String'},
    essential: {type: 'Edm.Boolean', nullable: false},
    additionalProperties: {type: 'Edm.String', collection: true}
  }
} as StructuredTypeConfig<OptionalClaim>;
//#endregion