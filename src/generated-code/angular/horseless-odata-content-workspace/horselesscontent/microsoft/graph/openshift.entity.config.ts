//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OpenShift } from './openshift.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OpenShiftEntityConfig = {
  name: 'openShift',
  base: 'microsoft.graph.changeTrackedEntity',
  fields: {
    sharedOpenShift: {type: 'graph.openShiftItem'},
    draftOpenShift: {type: 'graph.openShiftItem'},
    schedulingGroupId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<OpenShift>;
//#endregion