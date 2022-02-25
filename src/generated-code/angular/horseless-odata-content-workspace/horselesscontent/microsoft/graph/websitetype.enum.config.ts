//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WebsiteType } from './websitetype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WebsiteTypeConfig = {
  name: 'websiteType',
  members: WebsiteType,
  fields: {
    other: {value: 0},
    home: {value: 1},
    work: {value: 2},
    blog: {value: 3},
    profile: {value: 4}
  }
} as EnumTypeConfig<WebsiteType>;
//#endregion