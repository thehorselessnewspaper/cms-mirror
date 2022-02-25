//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ResourceVisualization } from './resourcevisualization.complex';
import { ResourceReference } from './resourcereference.complex';
import { SharingDetail } from './sharingdetail.complex';
//#endregion

export interface SharedInsight extends Entity {
  //#region ODataApiGen Properties
  lastShared?: SharingDetail;
  sharingHistory?: SharingDetail[];
  resourceVisualization?: ResourceVisualization;
  resourceReference?: ResourceReference;
  lastSharedMethod?: Entity;
  resource?: Entity;
  //#endregion
}