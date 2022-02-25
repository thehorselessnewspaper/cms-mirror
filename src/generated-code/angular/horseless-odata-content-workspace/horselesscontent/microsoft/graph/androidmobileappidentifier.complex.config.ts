//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AndroidMobileAppIdentifier } from './androidmobileappidentifier.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AndroidMobileAppIdentifierComplexConfig = {
  name: 'androidMobileAppIdentifier',
  base: 'microsoft.graph.mobileAppIdentifier',
  fields: {
    packageId: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<AndroidMobileAppIdentifier>;
//#endregion