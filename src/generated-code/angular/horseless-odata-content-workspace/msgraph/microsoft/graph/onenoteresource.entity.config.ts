//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenoteResource } from './onenoteresource.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OnenoteResourceEntityConfig = {
  name: 'onenoteResource',
  base: 'microsoft.graph.onenoteEntityBaseModel',
  fields: {
    content: {type: 'Edm.Stream'},
    contentUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<OnenoteResource>;
//#endregion