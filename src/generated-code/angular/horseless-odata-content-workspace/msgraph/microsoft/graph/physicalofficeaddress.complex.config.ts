//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PhysicalOfficeAddress } from './physicalofficeaddress.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PhysicalOfficeAddressComplexConfig = {
  name: 'physicalOfficeAddress',
  fields: {
    city: {type: 'Edm.String'},
    countryOrRegion: {type: 'Edm.String'},
    officeLocation: {type: 'Edm.String'},
    postalCode: {type: 'Edm.String'},
    state: {type: 'Edm.String'},
    street: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PhysicalOfficeAddress>;
//#endregion