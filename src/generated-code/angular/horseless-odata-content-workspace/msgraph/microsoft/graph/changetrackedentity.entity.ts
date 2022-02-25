//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { IdentitySet } from './identityset.complex';
//#endregion

export interface ChangeTrackedEntity extends Entity {
  //#region ODataApiGen Properties
  createdDateTime?: Date;
  lastModifiedDateTime?: Date;
  lastModifiedBy?: IdentitySet;
  //#endregion
}