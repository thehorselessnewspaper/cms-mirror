//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsInformationProtectionEnforcementLevel } from './windowsinformationprotectionenforcementlevel.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WindowsInformationProtectionEnforcementLevelConfig = {
  name: 'windowsInformationProtectionEnforcementLevel',
  members: WindowsInformationProtectionEnforcementLevel,
  fields: {
    noProtection: {value: 0},
    encryptAndAuditOnly: {value: 1},
    encryptAuditAndPrompt: {value: 2},
    encryptAuditAndBlock: {value: 3}
  }
} as EnumTypeConfig<WindowsInformationProtectionEnforcementLevel>;
//#endregion