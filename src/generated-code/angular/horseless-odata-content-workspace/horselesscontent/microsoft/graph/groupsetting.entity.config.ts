//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { GroupSetting } from './groupsetting.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const GroupSettingEntityConfig = {
  name: 'groupSetting',
  base: 'microsoft.graph.entity',
  open: true,
  fields: {
    displayName: {type: 'Edm.String'},
    templateId: {type: 'Edm.String'},
    values: {type: 'graph.settingValue', nullable: false, collection: true}
  }
} as StructuredTypeConfig<GroupSetting>;
//#endregion