//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SignIn } from './signin.entity';
//#endregion

export interface RestrictedSignIn extends SignIn {
  //#region ODataApiGen Properties
  targetTenantId?: string;
  //#endregion
}