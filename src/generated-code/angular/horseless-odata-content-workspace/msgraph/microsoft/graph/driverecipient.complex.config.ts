//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DriveRecipient } from './driverecipient.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DriveRecipientComplexConfig = {
  name: 'driveRecipient',
  fields: {
    alias: {type: 'Edm.String'},
    email: {type: 'Edm.String'},
    objectId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DriveRecipient>;
//#endregion