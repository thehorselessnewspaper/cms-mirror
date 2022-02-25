//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { EducationClass } from './educationclass.entity';
import { EducationSchool } from './educationschool.entity';
import { EducationUser } from './educationuser.entity';
//#endregion

export interface EducationRoot extends Entity {
  //#region ODataApiGen Properties
  classes?: EducationClass[];
  schools?: EducationSchool[];
  users?: EducationUser[];
  me?: EducationUser;
  //#endregion
}