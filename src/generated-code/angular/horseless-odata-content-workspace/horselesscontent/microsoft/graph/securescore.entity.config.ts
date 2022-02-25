//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SecureScore } from './securescore.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SecureScoreEntityConfig = {
  name: 'secureScore',
  base: 'microsoft.graph.entity',
  open: true,
  fields: {
    activeUserCount: {type: 'Edm.Int32'},
    averageComparativeScores: {type: 'graph.averageComparativeScore', collection: true},
    azureTenantId: {type: 'Edm.String', nullable: false},
    controlScores: {type: 'graph.controlScore', collection: true},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    currentScore: {type: 'Edm.Double'},
    enabledServices: {type: 'Edm.String', collection: true},
    licensedUserCount: {type: 'Edm.Int32'},
    maxScore: {type: 'Edm.Double'},
    vendorInformation: {type: 'graph.securityVendorInformation'}
  }
} as StructuredTypeConfig<SecureScore>;
//#endregion