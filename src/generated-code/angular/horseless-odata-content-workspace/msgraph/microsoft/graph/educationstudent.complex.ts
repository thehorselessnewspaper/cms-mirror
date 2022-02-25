//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EducationGender } from './educationgender.enum';
//#endregion

export interface EducationStudent {
  //#region ODataApiGen Properties
  graduationYear?: string;
  grade?: string;
  birthDate?: Date;
  gender?: EducationGender;
  studentNumber?: string;
  externalId?: string;
  //#endregion
}