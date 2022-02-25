//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WorkforceIntegration } from './workforceintegration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WorkforceIntegrationEntityConfig = {
  name: 'workforceIntegration',
  base: 'microsoft.graph.changeTrackedEntity',
  fields: {
    displayName: {type: 'Edm.String'},
    apiVersion: {type: 'Edm.Int32'},
    encryption: {type: 'graph.workforceIntegrationEncryption'},
    isActive: {type: 'Edm.Boolean'},
    url: {type: 'Edm.String'},
    supportedEntities: {type: 'graph.workforceIntegrationSupportedEntities'}
  }
} as StructuredTypeConfig<WorkforceIntegration>;
//#endregion