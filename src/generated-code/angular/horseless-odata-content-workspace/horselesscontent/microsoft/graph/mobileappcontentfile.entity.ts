//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { MobileAppContentFileUploadState } from './mobileappcontentfileuploadstate.enum';
//#endregion

export interface MobileAppContentFile extends Entity {
  //#region ODataApiGen Properties
  azureStorageUri?: string;
  isCommitted: boolean;
  createdDateTime: Date;
  name?: string;
  size: number;
  sizeEncrypted: number;
  azureStorageUriExpirationDateTime?: Date;
  manifest?: ArrayBuffer;
  uploadState: MobileAppContentFileUploadState;
  //#endregion
}