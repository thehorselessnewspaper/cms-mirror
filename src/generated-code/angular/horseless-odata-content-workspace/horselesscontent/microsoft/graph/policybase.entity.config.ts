//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PolicyBase } from './policybase.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PolicyBaseEntityConfig = {
  name: 'policyBase',
  base: 'microsoft.graph.directoryObject',
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PolicyBase>;
//#endregion