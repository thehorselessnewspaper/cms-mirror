//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OmaSettingStringXml } from './omasettingstringxml.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OmaSettingStringXmlComplexConfig = {
  name: 'omaSettingStringXml',
  base: 'microsoft.graph.omaSetting',
  fields: {
    fileName: {type: 'Edm.String'},
    value: {type: 'Edm.Binary', nullable: false}
  }
} as StructuredTypeConfig<OmaSettingStringXml>;
//#endregion