//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { GroupLifecyclePolicy } from './grouplifecyclepolicy.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const GroupLifecyclePolicyEntityConfig = {
  name: 'groupLifecyclePolicy',
  base: 'microsoft.graph.entity',
  fields: {
    groupLifetimeInDays: {type: 'Edm.Int32'},
    managedGroupTypes: {type: 'Edm.String'},
    alternateNotificationEmails: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<GroupLifecyclePolicy>;
//#endregion