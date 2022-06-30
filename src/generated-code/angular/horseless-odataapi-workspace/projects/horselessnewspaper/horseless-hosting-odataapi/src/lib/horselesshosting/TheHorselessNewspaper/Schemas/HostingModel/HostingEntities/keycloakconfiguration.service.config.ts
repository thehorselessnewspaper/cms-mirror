//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { KeyCloakConfigurationService } from './keycloakconfiguration.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const KeyCloakConfigurationServiceEntitySetConfig = {
  name: 'KeyCloakConfiguration',
  entityType: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.KeyCloakConfiguration',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: KeyCloakConfigurationService
} as EntitySetConfig;
//#endregion