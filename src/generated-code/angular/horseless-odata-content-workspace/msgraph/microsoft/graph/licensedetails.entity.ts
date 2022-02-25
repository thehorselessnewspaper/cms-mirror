//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ServicePlanInfo } from './serviceplaninfo.complex';
//#endregion

export interface LicenseDetails extends Entity {
  //#region ODataApiGen Properties
  servicePlans: ServicePlanInfo[];
  skuId?: string;
  skuPartNumber?: string;
  //#endregion
}