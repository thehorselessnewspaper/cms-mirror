//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TelecomExpenseManagementPartner } from './telecomexpensemanagementpartner.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TelecomExpenseManagementPartnerEntityConfig = {
  name: 'telecomExpenseManagementPartner',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String'},
    url: {type: 'Edm.String'},
    appAuthorized: {type: 'Edm.Boolean', nullable: false},
    enabled: {type: 'Edm.Boolean', nullable: false},
    lastConnectionDateTime: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as StructuredTypeConfig<TelecomExpenseManagementPartner>;
//#endregion