//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { GroupSettingTemplate } from './groupsettingtemplate.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const GroupSettingTemplateEntityConfig = {
  name: 'groupSettingTemplate',
  base: 'microsoft.graph.directoryObject',
  open: true,
  fields: {
    displayName: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    values: {type: 'graph.settingTemplateValue', nullable: false, collection: true}
  }
} as StructuredTypeConfig<GroupSettingTemplate>;
//#endregion