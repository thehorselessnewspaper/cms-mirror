//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Security } from './security.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SecurityEntityConfig = {
  name: 'security',
  base: 'microsoft.graph.entity',
  fields: {
    alerts: {type: 'graph.alert', collection: true, navigation: true},
    secureScoreControlProfiles: {type: 'graph.secureScoreControlProfile', collection: true, navigation: true},
    secureScores: {type: 'graph.secureScore', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Security>;
//#endregion