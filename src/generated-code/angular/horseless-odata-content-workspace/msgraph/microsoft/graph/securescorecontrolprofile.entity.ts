//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { SecurityVendorInformation } from './securityvendorinformation.complex';
import { ComplianceInformation } from './complianceinformation.complex';
import { SecureScoreControlStateUpdate } from './securescorecontrolstateupdate.complex';
//#endregion

export interface SecureScoreControlProfile extends Entity {
  //#region ODataApiGen Properties
  actionType?: string;
  actionUrl?: string;
  azureTenantId: string;
  complianceInformation?: ComplianceInformation[];
  controlCategory?: string;
  controlStateUpdates?: SecureScoreControlStateUpdate[];
  deprecated?: boolean;
  implementationCost?: string;
  lastModifiedDateTime?: Date;
  maxScore?: number;
  rank?: number;
  remediation?: string;
  remediationImpact?: string;
  service?: string;
  threats?: string[];
  tier?: string;
  title?: string;
  userImpact?: string;
  vendorInformation?: SecurityVendorInformation;
  //#endregion
}