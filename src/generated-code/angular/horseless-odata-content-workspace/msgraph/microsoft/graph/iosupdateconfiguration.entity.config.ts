//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosUpdateConfiguration } from './iosupdateconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosUpdateConfigurationEntityConfig = {
  name: 'iosUpdateConfiguration',
  base: 'microsoft.graph.deviceConfiguration',
  fields: {
    activeHoursStart: {type: 'Edm.TimeOfDay', nullable: false},
    activeHoursEnd: {type: 'Edm.TimeOfDay', nullable: false},
    scheduledInstallDays: {type: 'graph.dayOfWeek', nullable: false, collection: true},
    utcTimeOffsetInMinutes: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<IosUpdateConfiguration>;
//#endregion