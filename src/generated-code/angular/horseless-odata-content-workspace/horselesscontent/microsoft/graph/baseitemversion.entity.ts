//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { IdentitySet } from './identityset.complex';
import { PublicationFacet } from './publicationfacet.complex';
//#endregion

export interface BaseItemVersion extends Entity {
  //#region ODataApiGen Properties
  lastModifiedBy?: IdentitySet;
  lastModifiedDateTime?: Date;
  publication?: PublicationFacet;
  //#endregion
}