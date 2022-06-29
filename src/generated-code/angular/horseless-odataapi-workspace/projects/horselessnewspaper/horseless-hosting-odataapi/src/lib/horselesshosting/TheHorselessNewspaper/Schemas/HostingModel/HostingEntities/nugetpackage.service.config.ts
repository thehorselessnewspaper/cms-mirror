//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { NugetPackageService } from './nugetpackage.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const NugetPackageServiceEntitySetConfig = {
  name: 'NugetPackage',
  entityType: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.NugetPackage',
  annotations: [
  {
    "term": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Timestamp"
    ]
  }
],
  service: NugetPackageService
} as EntitySetConfig;
//#endregion