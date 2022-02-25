//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AssignedLicense } from './assignedlicense.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AssignedLicenseComplexConfig = {
  name: 'assignedLicense',
  fields: {
    disabledPlans: {type: 'Edm.Guid', nullable: false, collection: true},
    skuId: {type: 'Edm.Guid'}
  }
} as StructuredTypeConfig<AssignedLicense>;
//#endregion