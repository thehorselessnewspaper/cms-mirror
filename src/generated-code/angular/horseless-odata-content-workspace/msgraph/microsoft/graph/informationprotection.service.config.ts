//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { InformationProtectionService } from './informationprotection.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const InformationProtectionServiceEntitySetConfig = {
  name: 'informationProtection',
  entityType: 'microsoft.graph.informationProtection',
  service: InformationProtectionService
} as EntitySetConfig;
//#endregion