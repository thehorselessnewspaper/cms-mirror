//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenoteEntityHierarchyModel } from './onenoteentityhierarchymodel.entity';
import { Notebook } from './notebook.entity';
import { OnenoteSection } from './onenotesection.entity';
//#endregion

export interface SectionGroup extends OnenoteEntityHierarchyModel {
  //#region ODataApiGen Properties
  sectionsUrl?: string;
  sectionGroupsUrl?: string;
  parentNotebook?: Notebook;
  parentSectionGroup?: SectionGroup;
  sections?: OnenoteSection[];
  sectionGroups?: SectionGroup[];
  //#endregion
}