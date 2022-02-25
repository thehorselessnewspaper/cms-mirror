//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LocationType } from './locationtype.enum';
import { LocationUniqueIdType } from './locationuniqueidtype.enum';
import { PhysicalAddress } from './physicaladdress.complex';
import { OutlookGeoCoordinates } from './outlookgeocoordinates.complex';
//#endregion

export interface Location {
  //#region ODataApiGen Properties
  displayName?: string;
  locationEmailAddress?: string;
  address?: PhysicalAddress;
  locationUri?: string;
  coordinates?: OutlookGeoCoordinates;
  locationType?: LocationType;
  uniqueId?: string;
  uniqueIdType?: LocationUniqueIdType;
  //#endregion
}