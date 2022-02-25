//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppAvailability } from './managedappavailability.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ManagedAppAvailabilityConfig = {
  name: 'managedAppAvailability',
  members: ManagedAppAvailability,
  fields: {
    global: {value: 0},
    lineOfBusiness: {value: 1}
  }
} as EnumTypeConfig<ManagedAppAvailability>;
//#endregion