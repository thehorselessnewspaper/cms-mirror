//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AdministrativeUnit } from './administrativeunit.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AdministrativeUnitEntityConfig = {
  name: 'administrativeUnit',
  base: 'microsoft.graph.directoryObject',
  open: true,
  fields: {
    
  }
} as StructuredTypeConfig<AdministrativeUnit>;
//#endregion