//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from '@vigouredelaruse/angular-odata';//#endregion

//#region ODataApiGen Imports
import { PrincipalClaim } from './principalclaim.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PrincipalClaimEntityConfig = {
  name: 'PrincipalClaim',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    ClaimType: {type: 'Edm.String', nullable: false},
    ClaimValue: {type: 'Edm.String', nullable: false},
    ClaimValueType: {type: 'Edm.String', nullable: false},
    ClaimIssuer: {type: 'Edm.String', nullable: false},
    PrincipalClaimContainerId: {type: 'Edm.Guid'},
    AccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true},
    PrincipalClaimContainer: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.PrincipalClaimContainer', navigation: true, referentials: [{property: 'PrincipalClaimContainerId', referencedProperty: 'Id'}]}
  }
} as StructuredTypeConfig<PrincipalClaim>;
//#endregion