//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TeamClassSettings } from './teamclasssettings.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TeamClassSettingsComplexConfig = {
  name: 'teamClassSettings',
  fields: {
    notifyGuardiansAboutAssignments: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<TeamClassSettings>;
//#endregion