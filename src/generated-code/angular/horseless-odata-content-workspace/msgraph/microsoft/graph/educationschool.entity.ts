//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EducationOrganization } from './educationorganization.entity';
import { PhysicalAddress } from './physicaladdress.complex';
import { IdentitySet } from './identityset.complex';
import { EducationClass } from './educationclass.entity';
import { EducationUser } from './educationuser.entity';
//#endregion

export interface EducationSchool extends EducationOrganization {
  //#region ODataApiGen Properties
  principalEmail?: string;
  principalName?: string;
  externalPrincipalId?: string;
  lowestGrade?: string;
  highestGrade?: string;
  schoolNumber?: string;
  externalId?: string;
  phone?: string;
  fax?: string;
  createdBy?: IdentitySet;
  address?: PhysicalAddress;
  classes?: EducationClass[];
  users?: EducationUser[];
  //#endregion
}