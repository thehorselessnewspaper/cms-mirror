//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TokenLifetimePolicy } from './tokenlifetimepolicy.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TokenLifetimePolicyEntityConfig = {
  name: 'tokenLifetimePolicy',
  base: 'microsoft.graph.stsPolicy',
  fields: {
    
  }
} as StructuredTypeConfig<TokenLifetimePolicy>;
//#endregion