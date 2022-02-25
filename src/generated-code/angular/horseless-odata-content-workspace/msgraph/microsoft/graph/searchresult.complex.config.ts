//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SearchResult } from './searchresult.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SearchResultComplexConfig = {
  name: 'searchResult',
  fields: {
    onClickTelemetryUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SearchResult>;
//#endregion