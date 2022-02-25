//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LicenseAssignmentState } from './licenseassignmentstate.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const LicenseAssignmentStateComplexConfig = {
  name: 'licenseAssignmentState',
  fields: {
    skuId: {type: 'Edm.Guid'},
    disabledPlans: {type: 'Edm.Guid', collection: true},
    assignedByGroup: {type: 'Edm.String'},
    state: {type: 'Edm.String'},
    error: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<LicenseAssignmentState>;
//#endregion