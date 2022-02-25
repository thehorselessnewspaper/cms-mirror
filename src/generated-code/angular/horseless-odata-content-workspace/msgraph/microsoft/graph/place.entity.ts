//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { PhysicalAddress } from './physicaladdress.complex';
import { OutlookGeoCoordinates } from './outlookgeocoordinates.complex';
//#endregion

export interface Place extends Entity {
  //#region ODataApiGen Properties
  displayName: string;
  geoCoordinates?: OutlookGeoCoordinates;
  phone?: string;
  address?: PhysicalAddress;
  //#endregion
}