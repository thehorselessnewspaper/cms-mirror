//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnenoteEntitySchemaObjectModel } from './onenoteentityschemaobjectmodel.entity';
import { PageLinks } from './pagelinks.complex';
import { Notebook } from './notebook.entity';
import { OnenoteSection } from './onenotesection.entity';
//#endregion

export interface OnenotePage extends OnenoteEntitySchemaObjectModel {
  //#region ODataApiGen Properties
  title?: string;
  createdByAppId?: string;
  links?: PageLinks;
  contentUrl?: string;
  content?: any;
  lastModifiedDateTime?: Date;
  level?: number;
  order?: number;
  userTags?: string[];
  parentSection?: OnenoteSection;
  parentNotebook?: Notebook;
  //#endregion
}