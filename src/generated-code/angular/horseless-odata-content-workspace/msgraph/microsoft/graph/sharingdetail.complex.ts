//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ResourceReference } from './resourcereference.complex';
import { InsightIdentity } from './insightidentity.complex';
//#endregion

export interface SharingDetail {
  //#region ODataApiGen Properties
  sharedBy?: InsightIdentity;
  sharedDateTime?: Date;
  sharingSubject?: string;
  sharingType?: string;
  sharingReference?: ResourceReference;
  //#endregion
}