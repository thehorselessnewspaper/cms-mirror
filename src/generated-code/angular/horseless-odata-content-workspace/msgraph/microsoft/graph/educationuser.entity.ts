//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { EducationUserRole } from './educationuserrole.enum';
import { EducationExternalSource } from './educationexternalsource.enum';
import { AssignedLicense } from './assignedlicense.complex';
import { AssignedPlan } from './assignedplan.complex';
import { PasswordProfile } from './passwordprofile.complex';
import { ProvisionedPlan } from './provisionedplan.complex';
import { PhysicalAddress } from './physicaladdress.complex';
import { IdentitySet } from './identityset.complex';
import { EducationStudent } from './educationstudent.complex';
import { EducationTeacher } from './educationteacher.complex';
import { User } from './user.entity';
import { EducationClass } from './educationclass.entity';
import { EducationSchool } from './educationschool.entity';
//#endregion

export interface EducationUser extends Entity {
  //#region ODataApiGen Properties
  primaryRole: EducationUserRole;
  middleName?: string;
  externalSource?: EducationExternalSource;
  residenceAddress?: PhysicalAddress;
  mailingAddress?: PhysicalAddress;
  student?: EducationStudent;
  teacher?: EducationTeacher;
  createdBy?: IdentitySet;
  accountEnabled?: boolean;
  assignedLicenses: AssignedLicense[];
  assignedPlans: AssignedPlan[];
  businessPhones: string[];
  department?: string;
  displayName?: string;
  givenName?: string;
  mail?: string;
  mailNickname?: string;
  mobilePhone?: string;
  passwordPolicies?: string;
  passwordProfile?: PasswordProfile;
  officeLocation?: string;
  preferredLanguage?: string;
  provisionedPlans: ProvisionedPlan[];
  refreshTokensValidFromDateTime?: Date;
  showInAddressList?: boolean;
  surname?: string;
  usageLocation?: string;
  userPrincipalName?: string;
  userType?: string;
  schools?: EducationSchool[];
  classes?: EducationClass[];
  user?: User;
  //#endregion
}