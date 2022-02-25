//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SchedulingGroup } from './schedulinggroup.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SchedulingGroupEntityConfig = {
  name: 'schedulingGroup',
  base: 'microsoft.graph.changeTrackedEntity',
  fields: {
    displayName: {type: 'Edm.String'},
    isActive: {type: 'Edm.Boolean'},
    userIds: {type: 'Edm.String', collection: true}
  }
} as StructuredTypeConfig<SchedulingGroup>;
//#endregion