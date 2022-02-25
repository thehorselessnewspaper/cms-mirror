//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SecureScoreControlStateUpdate } from './securescorecontrolstateupdate.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SecureScoreControlStateUpdateComplexConfig = {
  name: 'secureScoreControlStateUpdate',
  fields: {
    assignedTo: {type: 'Edm.String'},
    comment: {type: 'Edm.String'},
    state: {type: 'Edm.String'},
    updatedBy: {type: 'Edm.String'},
    updatedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<SecureScoreControlStateUpdate>;
//#endregion