//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ServicePlanInfo } from './serviceplaninfo.complex';
import { LicenseUnitsDetail } from './licenseunitsdetail.complex';
//#endregion

export interface SubscribedSku extends Entity {
  //#region ODataApiGen Properties
  capabilityStatus?: string;
  consumedUnits?: number;
  prepaidUnits?: LicenseUnitsDetail;
  servicePlans: ServicePlanInfo[];
  skuId?: string;
  skuPartNumber?: string;
  appliesTo?: string;
  //#endregion
}