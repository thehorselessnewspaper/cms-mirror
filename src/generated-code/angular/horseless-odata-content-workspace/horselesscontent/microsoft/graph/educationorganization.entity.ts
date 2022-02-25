//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { EducationExternalSource } from './educationexternalsource.enum';
//#endregion

export interface EducationOrganization extends Entity {
  //#region ODataApiGen Properties
  displayName: string;
  description?: string;
  externalSource?: EducationExternalSource;
  //#endregion
}