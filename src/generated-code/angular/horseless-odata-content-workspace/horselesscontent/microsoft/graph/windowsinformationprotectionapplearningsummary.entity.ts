//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ApplicationType } from './applicationtype.enum';
//#endregion

export interface WindowsInformationProtectionAppLearningSummary extends Entity {
  //#region ODataApiGen Properties
  applicationName?: string;
  applicationType: ApplicationType;
  deviceCount: number;
  //#endregion
}