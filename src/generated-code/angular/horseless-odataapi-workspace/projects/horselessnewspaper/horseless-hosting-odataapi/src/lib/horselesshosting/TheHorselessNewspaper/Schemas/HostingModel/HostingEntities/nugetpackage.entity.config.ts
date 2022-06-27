//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { NugetPackage } from './nugetpackage.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const NugetPackageEntityConfig = {
  name: 'NugetPackage',
  keys: [{name: 'Id'}],
  fields: {
    Id: {type: 'Edm.Guid', nullable: false},
    IsSoftDeleted: {type: 'Edm.Boolean'},
    Timestamp: {type: 'Edm.Binary'},
    UpdatedAt: {type: 'Edm.DateTimeOffset'},
    DictionaryKey: {type: 'Edm.String'},
    ObjectId: {type: 'Edm.String'},
    PackageName: {type: 'Edm.String'},
    PackageId: {type: 'Edm.String'},
    Publisher: {type: 'Edm.String'},
    Version: {type: 'Edm.String'},
    CreatedAt: {type: 'Edm.DateTimeOffset'},
    DisplayName: {type: 'Edm.String'},
    AccessControlEntries: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.AccessControlEntry', collection: true, navigation: true},
    Owners: {type: 'TheHorselessNewspaper.Schemas.HostingModel.HostingEntities.Principal', collection: true, navigation: true}
  }
} as StructuredTypeConfig<NugetPackage>;
//#endregion