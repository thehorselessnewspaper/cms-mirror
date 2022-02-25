//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedAppPolicy } from './managedapppolicy.entity';
import { WindowsInformationProtectionEnforcementLevel } from './windowsinformationprotectionenforcementlevel.enum';
import { WindowsInformationProtectionResourceCollection } from './windowsinformationprotectionresourcecollection.complex';
import { WindowsInformationProtectionDataRecoveryCertificate } from './windowsinformationprotectiondatarecoverycertificate.complex';
import { WindowsInformationProtectionApp } from './windowsinformationprotectionapp.complex';
import { WindowsInformationProtectionProxiedDomainCollection } from './windowsinformationprotectionproxieddomaincollection.complex';
import { WindowsInformationProtectionIPRangeCollection } from './windowsinformationprotectioniprangecollection.complex';
import { TargetedManagedAppPolicyAssignment } from './targetedmanagedapppolicyassignment.entity';
import { WindowsInformationProtectionAppLockerFile } from './windowsinformationprotectionapplockerfile.entity';
//#endregion

export interface WindowsInformationProtection extends ManagedAppPolicy {
  //#region ODataApiGen Properties
  enforcementLevel: WindowsInformationProtectionEnforcementLevel;
  enterpriseDomain?: string;
  enterpriseProtectedDomainNames?: WindowsInformationProtectionResourceCollection[];
  protectionUnderLockConfigRequired: boolean;
  dataRecoveryCertificate?: WindowsInformationProtectionDataRecoveryCertificate;
  revokeOnUnenrollDisabled: boolean;
  rightsManagementServicesTemplateId?: string;
  azureRightsManagementServicesAllowed: boolean;
  iconsVisible: boolean;
  protectedApps?: WindowsInformationProtectionApp[];
  exemptApps?: WindowsInformationProtectionApp[];
  enterpriseNetworkDomainNames?: WindowsInformationProtectionResourceCollection[];
  enterpriseProxiedDomains?: WindowsInformationProtectionProxiedDomainCollection[];
  enterpriseIPRanges?: WindowsInformationProtectionIPRangeCollection[];
  enterpriseIPRangesAreAuthoritative: boolean;
  enterpriseProxyServers?: WindowsInformationProtectionResourceCollection[];
  enterpriseInternalProxyServers?: WindowsInformationProtectionResourceCollection[];
  enterpriseProxyServersAreAuthoritative: boolean;
  neutralDomainResources?: WindowsInformationProtectionResourceCollection[];
  indexingEncryptedStoresOrItemsBlocked: boolean;
  smbAutoEncryptedFileExtensions?: WindowsInformationProtectionResourceCollection[];
  isAssigned: boolean;
  protectedAppLockerFiles?: WindowsInformationProtectionAppLockerFile[];
  exemptAppLockerFiles?: WindowsInformationProtectionAppLockerFile[];
  assignments?: TargetedManagedAppPolicyAssignment[];
  //#endregion
}