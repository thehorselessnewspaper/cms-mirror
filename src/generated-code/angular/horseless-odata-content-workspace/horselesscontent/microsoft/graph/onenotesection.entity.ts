//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenoteEntityHierarchyModel } from './onenoteentityhierarchymodel.entity';
import { SectionLinks } from './sectionlinks.complex';
import { Notebook } from './notebook.entity';
import { SectionGroup } from './sectiongroup.entity';
import { OnenotePage } from './onenotepage.entity';
//#endregion

export interface OnenoteSection extends OnenoteEntityHierarchyModel {
  //#region ODataApiGen Properties
  isDefault?: boolean;
  links?: SectionLinks;
  pagesUrl?: string;
  parentNotebook?: Notebook;
  parentSectionGroup?: SectionGroup;
  pages?: OnenotePage[];
  //#endregion
}