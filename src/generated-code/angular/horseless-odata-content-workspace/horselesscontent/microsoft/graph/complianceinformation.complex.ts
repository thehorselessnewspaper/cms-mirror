//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CertificationControl } from './certificationcontrol.complex';
//#endregion

export interface ComplianceInformation {
  //#region ODataApiGen Properties
  certificationControls?: CertificationControl[];
  certificationName?: string;
  //#endregion
}