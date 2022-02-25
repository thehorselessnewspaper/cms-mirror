//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TargetResource } from './targetresource.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TargetResourceComplexConfig = {
  name: 'targetResource',
  fields: {
    id: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'},
    groupType: {type: 'graph.groupType'},
    modifiedProperties: {type: 'graph.modifiedProperty', collection: true}
  }
} as StructuredTypeConfig<TargetResource>;
//#endregion