//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagementAgentType } from './managementagenttype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ManagementAgentTypeConfig = {
  name: 'managementAgentType',
  members: ManagementAgentType,
  fields: {
    eas: {value: 1},
    mdm: {value: 2},
    easMdm: {value: 3},
    intuneClient: {value: 4},
    easIntuneClient: {value: 5},
    configurationManagerClient: {value: 8},
    configurationManagerClientMdm: {value: 10},
    configurationManagerClientMdmEas: {value: 11},
    unknown: {value: 16},
    jamf: {value: 32},
    googleCloudDevicePolicyController: {value: 64}
  }
} as EnumTypeConfig<ManagementAgentType>;
//#endregion