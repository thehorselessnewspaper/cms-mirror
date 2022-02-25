//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenoteSourceService } from './onenotesourceservice.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const OnenoteSourceServiceConfig = {
  name: 'onenoteSourceService',
  members: OnenoteSourceService,
  fields: {
    Unknown: {value: 0},
    OneDrive: {value: 1},
    OneDriveForBusiness: {value: 2},
    OnPremOneDriveForBusiness: {value: 3}
  }
} as EnumTypeConfig<OnenoteSourceService>;
//#endregion