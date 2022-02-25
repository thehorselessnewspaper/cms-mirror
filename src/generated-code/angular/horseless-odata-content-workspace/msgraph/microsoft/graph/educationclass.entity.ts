//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { EducationExternalSource } from './educationexternalsource.enum';
import { IdentitySet } from './identityset.complex';
import { EducationTerm } from './educationterm.complex';
import { Group } from './group.entity';
import { EducationSchool } from './educationschool.entity';
import { EducationUser } from './educationuser.entity';
//#endregion

export interface EducationClass extends Entity {
  //#region ODataApiGen Properties
  displayName: string;
  mailNickname: string;
  description?: string;
  createdBy?: IdentitySet;
  classCode?: string;
  externalName?: string;
  externalId?: string;
  externalSource?: EducationExternalSource;
  term?: EducationTerm;
  schools?: EducationSchool[];
  members?: EducationUser[];
  teachers?: EducationUser[];
  group?: Group;
  //#endregion
}