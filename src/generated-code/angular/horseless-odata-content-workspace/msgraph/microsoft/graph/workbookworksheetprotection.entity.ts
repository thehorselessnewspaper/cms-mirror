//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { WorkbookWorksheetProtectionOptions } from './workbookworksheetprotectionoptions.complex';
//#endregion

export interface WorkbookWorksheetProtection extends Entity {
  //#region ODataApiGen Properties
  options?: WorkbookWorksheetProtectionOptions;
  protected: boolean;
  //#endregion
}