//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { UserAgent } from './useragent.complex';
import { ClientPlatform } from './clientplatform.enum';
import { ProductFamily } from './productfamily.enum';
//#endregion

export interface ClientUserAgent extends UserAgent {
  //#region ODataApiGen Properties
  platform: ClientPlatform;
  productFamily: ProductFamily;
  //#endregion
}