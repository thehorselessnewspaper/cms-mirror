//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SelectionLikelihoodInfo } from './selectionlikelihoodinfo.enum';
//#endregion

export interface ScoredEmailAddress {
  //#region ODataApiGen Properties
  address?: string;
  relevanceScore?: number;
  selectionLikelihood?: SelectionLikelihoodInfo;
  itemId?: string;
  //#endregion
}