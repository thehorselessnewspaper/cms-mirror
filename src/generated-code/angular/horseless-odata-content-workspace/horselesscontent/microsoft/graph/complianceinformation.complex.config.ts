//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ComplianceInformation } from './complianceinformation.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ComplianceInformationComplexConfig = {
  name: 'complianceInformation',
  open: true,
  fields: {
    certificationControls: {type: 'graph.certificationControl', collection: true},
    certificationName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ComplianceInformation>;
//#endregion