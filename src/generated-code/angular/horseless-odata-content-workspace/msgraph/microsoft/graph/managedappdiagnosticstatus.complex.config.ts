//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppDiagnosticStatus } from './managedappdiagnosticstatus.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedAppDiagnosticStatusComplexConfig = {
  name: 'managedAppDiagnosticStatus',
  fields: {
    validationName: {type: 'Edm.String'},
    state: {type: 'Edm.String'},
    mitigationInstruction: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ManagedAppDiagnosticStatus>;
//#endregion