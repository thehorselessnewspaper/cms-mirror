//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileAppContentFileUploadState } from './mobileappcontentfileuploadstate.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const MobileAppContentFileUploadStateConfig = {
  name: 'mobileAppContentFileUploadState',
  members: MobileAppContentFileUploadState,
  fields: {
    success: {value: 0},
    transientError: {value: 1},
    error: {value: 2},
    unknown: {value: 3},
    azureStorageUriRequestSuccess: {value: 100},
    azureStorageUriRequestPending: {value: 101},
    azureStorageUriRequestFailed: {value: 102},
    azureStorageUriRequestTimedOut: {value: 103},
    azureStorageUriRenewalSuccess: {value: 200},
    azureStorageUriRenewalPending: {value: 201},
    azureStorageUriRenewalFailed: {value: 202},
    azureStorageUriRenewalTimedOut: {value: 203},
    commitFileSuccess: {value: 300},
    commitFilePending: {value: 301},
    commitFileFailed: {value: 302},
    commitFileTimedOut: {value: 303}
  }
} as EnumTypeConfig<MobileAppContentFileUploadState>;
//#endregion