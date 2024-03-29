﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FailureStage } from './failurestage.enum';
//#endregion

export interface FailureInfo {
  //#region ODataApiGen Properties
  stage: FailureStage;
  reason?: string;
  //#endregion
}