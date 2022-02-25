//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { StsPolicy } from './stspolicy.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const StsPolicyEntityConfig = {
  name: 'stsPolicy',
  base: 'microsoft.graph.policyBase',
  fields: {
    definition: {type: 'Edm.String', nullable: false, collection: true},
    isOrganizationDefault: {type: 'Edm.Boolean'},
    appliesTo: {type: 'graph.directoryObject', collection: true, navigation: true}
  }
} as StructuredTypeConfig<StsPolicy>;
//#endregion