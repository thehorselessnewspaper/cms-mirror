//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryObject } from './directoryobject.entity';
import { MdmAuthority } from './mdmauthority.enum';
import { AssignedPlan } from './assignedplan.complex';
import { ProvisionedPlan } from './provisionedplan.complex';
import { PrivacyProfile } from './privacyprofile.complex';
import { VerifiedDomain } from './verifieddomain.complex';
import { Extension } from './extension.entity';
import { CertificateBasedAuthConfiguration } from './certificatebasedauthconfiguration.entity';
//#endregion

export interface Organization extends DirectoryObject {
  //#region ODataApiGen Properties
  assignedPlans: AssignedPlan[];
  businessPhones: string[];
  city?: string;
  country?: string;
  countryLetterCode?: string;
  createdDateTime?: Date;
  displayName?: string;
  marketingNotificationEmails: string[];
  onPremisesLastSyncDateTime?: Date;
  onPremisesSyncEnabled?: boolean;
  postalCode?: string;
  preferredLanguage?: string;
  privacyProfile?: PrivacyProfile;
  provisionedPlans: ProvisionedPlan[];
  securityComplianceNotificationMails: string[];
  securityComplianceNotificationPhones: string[];
  state?: string;
  street?: string;
  technicalNotificationMails: string[];
  verifiedDomains: VerifiedDomain[];
  mobileDeviceManagementAuthority: MdmAuthority;
  certificateBasedAuthConfiguration?: CertificateBasedAuthConfiguration[];
  extensions?: Extension[];
  //#endregion
}