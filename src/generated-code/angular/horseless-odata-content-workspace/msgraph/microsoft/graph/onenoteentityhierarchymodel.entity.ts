//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenoteEntitySchemaObjectModel } from './onenoteentityschemaobjectmodel.entity';
import { IdentitySet } from './identityset.complex';
//#endregion

export interface OnenoteEntityHierarchyModel extends OnenoteEntitySchemaObjectModel {
  //#region ODataApiGen Properties
  displayName?: string;
  createdBy?: IdentitySet;
  lastModifiedBy?: IdentitySet;
  lastModifiedDateTime?: Date;
  //#endregion
}