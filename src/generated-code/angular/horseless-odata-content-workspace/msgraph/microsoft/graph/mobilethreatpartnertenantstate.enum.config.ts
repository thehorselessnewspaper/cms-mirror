//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileThreatPartnerTenantState } from './mobilethreatpartnertenantstate.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const MobileThreatPartnerTenantStateConfig = {
  name: 'mobileThreatPartnerTenantState',
  members: MobileThreatPartnerTenantState,
  fields: {
    unavailable: {value: 0},
    available: {value: 1},
    enabled: {value: 2},
    unresponsive: {value: 3}
  }
} as EnumTypeConfig<MobileThreatPartnerTenantState>;
//#endregion