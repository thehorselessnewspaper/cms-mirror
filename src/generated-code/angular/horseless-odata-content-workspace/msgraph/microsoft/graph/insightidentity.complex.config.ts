//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { InsightIdentity } from './insightidentity.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const InsightIdentityComplexConfig = {
  name: 'insightIdentity',
  fields: {
    displayName: {type: 'Edm.String'},
    id: {type: 'Edm.String'},
    address: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<InsightIdentity>;
//#endregion