//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosMobileAppIdentifier } from './iosmobileappidentifier.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosMobileAppIdentifierComplexConfig = {
  name: 'iosMobileAppIdentifier',
  base: 'microsoft.graph.mobileAppIdentifier',
  fields: {
    bundleId: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<IosMobileAppIdentifier>;
//#endregion