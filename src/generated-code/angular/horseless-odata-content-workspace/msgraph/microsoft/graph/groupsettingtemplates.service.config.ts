//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { GroupSettingTemplatesService } from './groupsettingtemplates.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const GroupSettingTemplatesServiceEntitySetConfig = {
  name: 'groupSettingTemplates',
  entityType: 'microsoft.graph.groupSettingTemplate',
  service: GroupSettingTemplatesService
} as EntitySetConfig;
//#endregion