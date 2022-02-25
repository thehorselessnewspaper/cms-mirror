//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AppliedConditionalAccessPolicy } from './appliedconditionalaccesspolicy.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AppliedConditionalAccessPolicyComplexConfig = {
  name: 'appliedConditionalAccessPolicy',
  fields: {
    id: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    enforcedGrantControls: {type: 'Edm.String', collection: true},
    enforcedSessionControls: {type: 'Edm.String', collection: true},
    result: {type: 'graph.appliedConditionalAccessPolicyResult'}
  }
} as StructuredTypeConfig<AppliedConditionalAccessPolicy>;
//#endregion