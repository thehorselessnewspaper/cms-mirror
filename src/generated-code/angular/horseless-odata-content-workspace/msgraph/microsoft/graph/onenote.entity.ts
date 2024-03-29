﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { Notebook } from './notebook.entity';
import { OnenoteSection } from './onenotesection.entity';
import { SectionGroup } from './sectiongroup.entity';
import { OnenotePage } from './onenotepage.entity';
import { OnenoteResource } from './onenoteresource.entity';
import { OnenoteOperation } from './onenoteoperation.entity';
//#endregion

export interface Onenote extends Entity {
  //#region ODataApiGen Properties
  notebooks?: Notebook[];
  sections?: OnenoteSection[];
  sectionGroups?: SectionGroup[];
  pages?: OnenotePage[];
  resources?: OnenoteResource[];
  operations?: OnenoteOperation[];
  //#endregion
}