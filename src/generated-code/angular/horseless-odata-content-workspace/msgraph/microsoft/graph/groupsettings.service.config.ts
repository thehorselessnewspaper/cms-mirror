//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { GroupSettingsService } from './groupsettings.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const GroupSettingsServiceEntitySetConfig = {
  name: 'groupSettings',
  entityType: 'microsoft.graph.groupSetting',
  service: GroupSettingsService
} as EntitySetConfig;
//#endregion