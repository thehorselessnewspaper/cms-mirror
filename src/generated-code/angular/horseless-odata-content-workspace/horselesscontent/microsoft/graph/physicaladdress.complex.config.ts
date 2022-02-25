//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PhysicalAddress } from './physicaladdress.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PhysicalAddressComplexConfig = {
  name: 'physicalAddress',
  fields: {
    street: {type: 'Edm.String'},
    city: {type: 'Edm.String'},
    state: {type: 'Edm.String'},
    countryOrRegion: {type: 'Edm.String'},
    postalCode: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PhysicalAddress>;
//#endregion