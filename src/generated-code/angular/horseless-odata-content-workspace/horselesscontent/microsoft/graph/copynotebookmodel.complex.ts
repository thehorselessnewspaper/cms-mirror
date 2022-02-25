//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenoteUserRole } from './onenoteuserrole.enum';
import { IdentitySet } from './identityset.complex';
import { NotebookLinks } from './notebooklinks.complex';
//#endregion

export interface CopyNotebookModel {
  //#region ODataApiGen Properties
  isDefault?: boolean;
  userRole?: OnenoteUserRole;
  isShared?: boolean;
  sectionsUrl?: string;
  sectionGroupsUrl?: string;
  links?: NotebookLinks;
  name?: string;
  createdBy?: string;
  createdByIdentity?: IdentitySet;
  lastModifiedBy?: string;
  lastModifiedByIdentity?: IdentitySet;
  lastModifiedTime?: Date;
  id?: string;
  self?: string;
  createdTime?: Date;
  //#endregion
}