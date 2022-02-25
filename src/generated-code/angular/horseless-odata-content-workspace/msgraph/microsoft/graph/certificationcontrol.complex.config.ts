//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CertificationControl } from './certificationcontrol.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CertificationControlComplexConfig = {
  name: 'certificationControl',
  open: true,
  fields: {
    name: {type: 'Edm.String'},
    url: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<CertificationControl>;
//#endregion