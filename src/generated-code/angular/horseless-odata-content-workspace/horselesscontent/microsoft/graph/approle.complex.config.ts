//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AppRole } from './approle.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AppRoleComplexConfig = {
  name: 'appRole',
  fields: {
    allowedMemberTypes: {type: 'Edm.String', nullable: false, collection: true},
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    id: {type: 'Edm.Guid', nullable: false},
    isEnabled: {type: 'Edm.Boolean', nullable: false},
    origin: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<AppRole>;
//#endregion