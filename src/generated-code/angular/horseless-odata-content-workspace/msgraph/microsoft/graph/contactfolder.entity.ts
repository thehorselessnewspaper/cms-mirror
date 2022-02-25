//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { Contact } from './contact.entity';
import { SingleValueLegacyExtendedProperty } from './singlevaluelegacyextendedproperty.entity';
import { MultiValueLegacyExtendedProperty } from './multivaluelegacyextendedproperty.entity';
//#endregion

export interface ContactFolder extends Entity {
  //#region ODataApiGen Properties
  parentFolderId?: string;
  displayName?: string;
  singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
  multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
  contacts?: Contact[];
  childFolders?: ContactFolder[];
  //#endregion
}