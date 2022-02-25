//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookFilterCriteria } from './workbookfiltercriteria.complex';
//#endregion

export interface WorkbookFilter extends Entity {
  //#region ODataApiGen Properties
  criteria?: WorkbookFilterCriteria;
  //#endregion
}