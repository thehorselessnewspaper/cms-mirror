//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenoteEntityHierarchyModel } from './onenoteentityhierarchymodel.entity';
import { OnenoteUserRole } from './onenoteuserrole.enum';
import { NotebookLinks } from './notebooklinks.complex';
import { OnenoteSection } from './onenotesection.entity';
import { SectionGroup } from './sectiongroup.entity';
//#endregion

export interface Notebook extends OnenoteEntityHierarchyModel {
  //#region ODataApiGen Properties
  isDefault?: boolean;
  userRole?: OnenoteUserRole;
  isShared?: boolean;
  sectionsUrl?: string;
  sectionGroupsUrl?: string;
  links?: NotebookLinks;
  sections?: OnenoteSection[];
  sectionGroups?: SectionGroup[];
  //#endregion
}