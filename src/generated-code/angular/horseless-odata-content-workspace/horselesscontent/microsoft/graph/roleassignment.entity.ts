//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { RoleDefinition } from './roledefinition.entity';
//#endregion

export interface RoleAssignment extends Entity {
  //#region ODataApiGen Properties
  displayName?: string;
  description?: string;
  resourceScopes?: string[];
  roleDefinition?: RoleDefinition;
  //#endregion
}