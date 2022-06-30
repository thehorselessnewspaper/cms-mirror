//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { PrincipalClaimService } from './principalclaim.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const PrincipalClaimServiceEntitySetConfig = {
  name: 'PrincipalClaim',
  entityType: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.PrincipalClaim',
  service: PrincipalClaimService
} as EntitySetConfig;
//#endregion
