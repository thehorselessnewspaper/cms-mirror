//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsMobileMSI } from './windowsmobilemsi.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsMobileMSIEntityConfig = {
  name: 'windowsMobileMSI',
  base: 'microsoft.graph.mobileLobApp',
  fields: {
    commandLine: {type: 'Edm.String'},
    productCode: {type: 'Edm.String'},
    productVersion: {type: 'Edm.String'},
    ignoreVersionDetection: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<WindowsMobileMSI>;
//#endregion