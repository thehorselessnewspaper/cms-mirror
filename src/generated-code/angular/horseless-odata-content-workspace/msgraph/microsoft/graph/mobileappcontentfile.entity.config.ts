//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileAppContentFile } from './mobileappcontentfile.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MobileAppContentFileEntityConfig = {
  name: 'mobileAppContentFile',
  base: 'microsoft.graph.entity',
  fields: {
    azureStorageUri: {type: 'Edm.String'},
    isCommitted: {type: 'Edm.Boolean', nullable: false},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    name: {type: 'Edm.String'},
    size: {type: 'Edm.Int64', nullable: false},
    sizeEncrypted: {type: 'Edm.Int64', nullable: false},
    azureStorageUriExpirationDateTime: {type: 'Edm.DateTimeOffset'},
    manifest: {type: 'Edm.Binary'},
    uploadState: {type: 'graph.mobileAppContentFileUploadState', nullable: false}
  }
} as StructuredTypeConfig<MobileAppContentFile>;
//#endregion