//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SettingTemplateValue } from './settingtemplatevalue.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SettingTemplateValueComplexConfig = {
  name: 'settingTemplateValue',
  fields: {
    name: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    defaultValue: {type: 'Edm.String'},
    description: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SettingTemplateValue>;
//#endregion