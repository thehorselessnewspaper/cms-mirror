//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LocationConstraintItem } from './locationconstraintitem.complex';
//#endregion

export interface LocationConstraint {
  //#region ODataApiGen Properties
  locations?: LocationConstraintItem[];
  isRequired?: boolean;
  suggestLocation?: boolean;
  //#endregion
}