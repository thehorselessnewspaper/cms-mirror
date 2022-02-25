//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeamGuestSettings } from './teamguestsettings.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TeamGuestSettingsComplexConfig = {
  name: 'teamGuestSettings',
  fields: {
    allowCreateUpdateChannels: {type: 'Edm.Boolean'},
    allowDeleteChannels: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<TeamGuestSettings>;
//#endregion