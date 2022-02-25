//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IntuneBrand } from './intunebrand.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IntuneBrandComplexConfig = {
  name: 'intuneBrand',
  fields: {
    displayName: {type: 'Edm.String'},
    themeColor: {type: 'graph.rgbColor'},
    showLogo: {type: 'Edm.Boolean', nullable: false},
    lightBackgroundLogo: {type: 'graph.mimeContent'},
    darkBackgroundLogo: {type: 'graph.mimeContent'},
    showNameNextToLogo: {type: 'Edm.Boolean', nullable: false},
    showDisplayNameNextToLogo: {type: 'Edm.Boolean', nullable: false},
    contactITName: {type: 'Edm.String'},
    contactITPhoneNumber: {type: 'Edm.String'},
    contactITEmailAddress: {type: 'Edm.String'},
    contactITNotes: {type: 'Edm.String'},
    onlineSupportSiteUrl: {type: 'Edm.String'},
    onlineSupportSiteName: {type: 'Edm.String'},
    privacyUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<IntuneBrand>;
//#endregion