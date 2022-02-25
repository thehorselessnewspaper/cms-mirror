//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OpenShiftItem } from './openshiftitem.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OpenShiftItemComplexConfig = {
  name: 'openShiftItem',
  base: 'microsoft.graph.shiftItem',
  fields: {
    openSlotCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<OpenShiftItem>;
//#endregion