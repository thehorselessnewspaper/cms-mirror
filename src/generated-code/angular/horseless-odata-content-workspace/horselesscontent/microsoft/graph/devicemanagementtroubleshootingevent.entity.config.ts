//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceManagementTroubleshootingEvent } from './devicemanagementtroubleshootingevent.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceManagementTroubleshootingEventEntityConfig = {
  name: 'deviceManagementTroubleshootingEvent',
  base: 'microsoft.graph.entity',
  fields: {
    eventDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    correlationId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DeviceManagementTroubleshootingEvent>;
//#endregion