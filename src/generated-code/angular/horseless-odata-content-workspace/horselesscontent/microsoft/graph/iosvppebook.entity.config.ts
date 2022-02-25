//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosVppEBook } from './iosvppebook.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosVppEBookEntityConfig = {
  name: 'iosVppEBook',
  base: 'microsoft.graph.managedEBook',
  fields: {
    vppTokenId: {type: 'Edm.Guid', nullable: false},
    appleId: {type: 'Edm.String'},
    vppOrganizationName: {type: 'Edm.String'},
    genres: {type: 'Edm.String', collection: true},
    language: {type: 'Edm.String'},
    seller: {type: 'Edm.String'},
    totalLicenseCount: {type: 'Edm.Int32', nullable: false},
    usedLicenseCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<IosVppEBook>;
//#endregion