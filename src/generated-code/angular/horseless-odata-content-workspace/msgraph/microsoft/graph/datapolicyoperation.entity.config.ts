//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DataPolicyOperation } from './datapolicyoperation.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DataPolicyOperationEntityConfig = {
  name: 'dataPolicyOperation',
  base: 'microsoft.graph.entity',
  fields: {
    completedDateTime: {type: 'Edm.DateTimeOffset'},
    status: {type: 'graph.dataPolicyOperationStatus'},
    storageLocation: {type: 'Edm.String'},
    userId: {type: 'Edm.String', nullable: false},
    submittedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    progress: {type: 'Edm.Double', nullable: false}
  }
} as StructuredTypeConfig<DataPolicyOperation>;
//#endregion