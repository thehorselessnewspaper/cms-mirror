//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AssignedLabel } from './assignedlabel.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AssignedLabelComplexConfig = {
  name: 'assignedLabel',
  fields: {
    labelId: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<AssignedLabel>;
//#endregion