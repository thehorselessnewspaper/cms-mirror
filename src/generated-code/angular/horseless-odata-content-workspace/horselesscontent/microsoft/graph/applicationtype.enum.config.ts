//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ApplicationType } from './applicationtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ApplicationTypeConfig = {
  name: 'applicationType',
  members: ApplicationType,
  fields: {
    universal: {value: 1},
    desktop: {value: 2}
  }
} as EnumTypeConfig<ApplicationType>;
//#endregion