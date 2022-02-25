//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ExternalAudienceScope } from './externalaudiencescope.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const ExternalAudienceScopeConfig = {
  name: 'externalAudienceScope',
  members: ExternalAudienceScope,
  fields: {
    none: {value: 0},
    contactsOnly: {value: 1},
    all: {value: 2}
  }
} as EnumTypeConfig<ExternalAudienceScope>;
//#endregion