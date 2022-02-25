//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Contract } from './contract.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ContractEntityConfig = {
  name: 'contract',
  base: 'microsoft.graph.directoryObject',
  open: true,
  fields: {
    contractType: {type: 'Edm.String'},
    customerId: {type: 'Edm.Guid'},
    defaultDomainName: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Contract>;
//#endregion