//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { IdentitySet } from './identityset.complex';
import { ItemReference } from './itemreference.complex';
import { User } from './user.entity';
//#endregion

export interface BaseItem extends Entity {
  //#region ODataApiGen Properties
  createdBy?: IdentitySet;
  createdDateTime: Date;
  description?: string;
  eTag?: string;
  lastModifiedBy?: IdentitySet;
  lastModifiedDateTime: Date;
  name?: string;
  parentReference?: ItemReference;
  webUrl?: string;
  createdByUser?: User;
  lastModifiedByUser?: User;
  //#endregion
}