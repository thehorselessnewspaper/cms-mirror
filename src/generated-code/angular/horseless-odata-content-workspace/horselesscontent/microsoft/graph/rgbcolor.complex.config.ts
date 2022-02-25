//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RgbColor } from './rgbcolor.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const RgbColorComplexConfig = {
  name: 'rgbColor',
  fields: {
    r: {type: 'Edm.Byte', nullable: false},
    g: {type: 'Edm.Byte', nullable: false},
    b: {type: 'Edm.Byte', nullable: false}
  }
} as StructuredTypeConfig<RgbColor>;
//#endregion