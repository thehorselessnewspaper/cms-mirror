//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { BaseItemVersion } from './baseitemversion.entity';
import { FieldValueSet } from './fieldvalueset.entity';
//#endregion

export interface ListItemVersion extends BaseItemVersion {
  //#region ODataApiGen Properties
  fields?: FieldValueSet;
  //#endregion
}