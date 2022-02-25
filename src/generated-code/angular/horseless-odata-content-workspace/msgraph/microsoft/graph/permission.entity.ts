//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { IdentitySet } from './identityset.complex';
import { ItemReference } from './itemreference.complex';
import { SharingInvitation } from './sharinginvitation.complex';
import { SharingLink } from './sharinglink.complex';
//#endregion

export interface Permission extends Entity {
  //#region ODataApiGen Properties
  expirationDateTime?: Date;
  grantedTo?: IdentitySet;
  grantedToIdentities?: IdentitySet[];
  hasPassword?: boolean;
  inheritedFrom?: ItemReference;
  invitation?: SharingInvitation;
  link?: SharingLink;
  roles?: string[];
  shareId?: string;
  //#endregion
}