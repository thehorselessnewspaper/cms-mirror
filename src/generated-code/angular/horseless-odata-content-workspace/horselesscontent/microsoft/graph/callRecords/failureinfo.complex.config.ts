//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FailureInfo } from './failureinfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const FailureInfoComplexConfig = {
  name: 'failureInfo',
  fields: {
    stage: {type: 'microsoft.graph.callRecords.failureStage', nullable: false},
    reason: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<FailureInfo>;
//#endregion