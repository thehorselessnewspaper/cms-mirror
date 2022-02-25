//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsInformationProtectionPinCharacterRequirements } from './windowsinformationprotectionpincharacterrequirements.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WindowsInformationProtectionPinCharacterRequirementsConfig = {
  name: 'windowsInformationProtectionPinCharacterRequirements',
  members: WindowsInformationProtectionPinCharacterRequirements,
  fields: {
    notAllow: {value: 0},
    requireAtLeastOne: {value: 1},
    allow: {value: 2}
  }
} as EnumTypeConfig<WindowsInformationProtectionPinCharacterRequirements>;
//#endregion