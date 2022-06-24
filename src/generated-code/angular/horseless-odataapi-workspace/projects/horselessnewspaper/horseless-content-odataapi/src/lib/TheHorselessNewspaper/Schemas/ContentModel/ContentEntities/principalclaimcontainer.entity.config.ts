//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PrincipalClaimContainer } from './principalclaimcontainer.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PrincipalClaimContainerEntityConfig = {
  name: 'PrincipalClaimContainer',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    ObjectId: {type: 'Edm.String'},
    DisplayName: {type: 'Edm.String'},
    PrincipalId: {type: 'Edm.Guid'},
    PrincipalClaim: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.PrincipalClaim', collection: true, navigation: true},
    Principal: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', navigation: true, referentials: [{property: 'PrincipalId', referencedProperty: 'Id'}]},
    AccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.ContentModel.ContentEntities.Principal', collection: true, navigation: true}
  }
} as StructuredTypeConfig<PrincipalClaimContainer>;
//#endregion