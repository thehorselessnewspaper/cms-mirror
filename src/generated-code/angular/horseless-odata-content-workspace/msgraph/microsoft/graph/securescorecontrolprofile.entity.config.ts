﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SecureScoreControlProfile } from './securescorecontrolprofile.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SecureScoreControlProfileEntityConfig = {
  name: 'secureScoreControlProfile',
  base: 'microsoft.graph.entity',
  open: true,
  fields: {
    actionType: {type: 'Edm.String'},
    actionUrl: {type: 'Edm.String'},
    azureTenantId: {type: 'Edm.String', nullable: false},
    complianceInformation: {type: 'graph.complianceInformation', collection: true},
    controlCategory: {type: 'Edm.String'},
    controlStateUpdates: {type: 'graph.secureScoreControlStateUpdate', collection: true},
    deprecated: {type: 'Edm.Boolean'},
    implementationCost: {type: 'Edm.String'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    maxScore: {type: 'Edm.Double'},
    rank: {type: 'Edm.Int32'},
    remediation: {type: 'Edm.String'},
    remediationImpact: {type: 'Edm.String'},
    service: {type: 'Edm.String'},
    threats: {type: 'Edm.String', collection: true},
    tier: {type: 'Edm.String'},
    title: {type: 'Edm.String'},
    userImpact: {type: 'Edm.String'},
    vendorInformation: {type: 'graph.securityVendorInformation'}
  }
} as StructuredTypeConfig<SecureScoreControlProfile>;
//#endregion