//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EditionUpgradeLicenseType } from './editionupgradelicensetype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const EditionUpgradeLicenseTypeConfig = {
  name: 'editionUpgradeLicenseType',
  members: EditionUpgradeLicenseType,
  fields: {
    productKey: {value: 0},
    licenseFile: {value: 1}
  }
} as EnumTypeConfig<EditionUpgradeLicenseType>;
//#endregion