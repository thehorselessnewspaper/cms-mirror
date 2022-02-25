//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedEBook } from './managedebook.entity';
//#endregion

export interface IosVppEBook extends ManagedEBook {
  //#region ODataApiGen Properties
  vppTokenId: string;
  appleId?: string;
  vppOrganizationName?: string;
  genres?: string[];
  language?: string;
  seller?: string;
  totalLicenseCount: number;
  usedLicenseCount: number;
  //#endregion
}