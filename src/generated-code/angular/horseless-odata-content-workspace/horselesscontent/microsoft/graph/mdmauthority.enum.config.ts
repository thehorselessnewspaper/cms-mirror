//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MdmAuthority } from './mdmauthority.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const MdmAuthorityConfig = {
  name: 'mdmAuthority',
  members: MdmAuthority,
  fields: {
    unknown: {value: 0},
    intune: {value: 1},
    sccm: {value: 2},
    office365: {value: 3}
  }
} as EnumTypeConfig<MdmAuthority>;
//#endregion