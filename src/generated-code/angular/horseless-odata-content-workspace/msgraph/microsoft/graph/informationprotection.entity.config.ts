//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { InformationProtection } from './informationprotection.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const InformationProtectionEntityConfig = {
  name: 'informationProtection',
  base: 'microsoft.graph.entity',
  fields: {
    threatAssessmentRequests: {type: 'graph.threatAssessmentRequest', collection: true, navigation: true}
  }
} as StructuredTypeConfig<InformationProtection>;
//#endregion