//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OnPremisesProvisioningErrorComplexConfig = {
  name: 'onPremisesProvisioningError',
  fields: {
    value: {type: 'Edm.String'},
    category: {type: 'Edm.String'},
    propertyCausingError: {type: 'Edm.String'},
    occurredDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<OnPremisesProvisioningError>;
//#endregion