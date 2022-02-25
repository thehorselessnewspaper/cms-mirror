//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { DirectoryAudit } from './directoryaudit.entity';
import { SignIn } from './signin.entity';
import { RestrictedSignIn } from './restrictedsignin.entity';
//#endregion

export interface AuditLogRoot extends Entity {
  //#region ODataApiGen Properties
  signIns?: SignIn[];
  directoryAudits?: DirectoryAudit[];
  restrictedSignIns?: RestrictedSignIn[];
  //#endregion
}