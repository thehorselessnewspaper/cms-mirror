﻿//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { PrincipalService } from './principal.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const PrincipalServiceEntitySetConfig = {
  name: 'Principal',
  entityType: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Principal',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: PrincipalService
} as EntitySetConfig;
//#endregion