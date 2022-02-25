//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OpenShiftChangeRequest } from './openshiftchangerequest.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OpenShiftChangeRequestEntityConfig = {
  name: 'openShiftChangeRequest',
  base: 'microsoft.graph.scheduleChangeRequest',
  fields: {
    openShiftId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<OpenShiftChangeRequest>;
//#endregion