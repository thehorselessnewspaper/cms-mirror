//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PolicyBase } from './policybase.entity';
import { DirectoryObject } from './directoryobject.entity';
//#endregion

export interface StsPolicy extends PolicyBase {
  //#region ODataApiGen Properties
  definition: string[];
  isOrganizationDefault?: boolean;
  appliesTo?: DirectoryObject[];
  //#endregion
}