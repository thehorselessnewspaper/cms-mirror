//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
//#endregion

export interface Windows10SecureAssessmentConfiguration extends DeviceConfiguration {
  //#region ODataApiGen Properties
  launchUri?: string;
  configurationAccount?: string;
  allowPrinting: boolean;
  allowScreenCapture: boolean;
  allowTextSuggestion: boolean;
  //#endregion
}