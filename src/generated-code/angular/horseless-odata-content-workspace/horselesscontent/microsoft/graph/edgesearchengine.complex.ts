//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EdgeSearchEngineBase } from './edgesearchenginebase.complex';
import { EdgeSearchEngineType } from './edgesearchenginetype.enum';
//#endregion

export interface EdgeSearchEngine extends EdgeSearchEngineBase {
  //#region ODataApiGen Properties
  edgeSearchEngineType: EdgeSearchEngineType;
  //#endregion
}