//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ScheduleEntity } from './scheduleentity.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ScheduleEntityComplexConfig = {
  name: 'scheduleEntity',
  fields: {
    startDateTime: {type: 'Edm.DateTimeOffset'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    theme: {type: 'graph.scheduleEntityTheme', nullable: false}
  }
} as StructuredTypeConfig<ScheduleEntity>;
//#endregion