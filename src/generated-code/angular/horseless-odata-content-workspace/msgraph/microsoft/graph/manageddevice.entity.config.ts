﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedDevice } from './manageddevice.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedDeviceEntityConfig = {
  name: 'managedDevice',
  base: 'microsoft.graph.entity',
  fields: {
    userId: {type: 'Edm.String'},
    deviceName: {type: 'Edm.String'},
    managedDeviceOwnerType: {type: 'graph.managedDeviceOwnerType', nullable: false},
    deviceActionResults: {type: 'graph.deviceActionResult', collection: true},
    enrolledDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    lastSyncDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    operatingSystem: {type: 'Edm.String'},
    complianceState: {type: 'graph.complianceState', nullable: false},
    jailBroken: {type: 'Edm.String'},
    managementAgent: {type: 'graph.managementAgentType', nullable: false},
    osVersion: {type: 'Edm.String'},
    easActivated: {type: 'Edm.Boolean', nullable: false},
    easDeviceId: {type: 'Edm.String'},
    easActivationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    azureADRegistered: {type: 'Edm.Boolean'},
    deviceEnrollmentType: {type: 'graph.deviceEnrollmentType', nullable: false},
    activationLockBypassCode: {type: 'Edm.String'},
    emailAddress: {type: 'Edm.String'},
    azureADDeviceId: {type: 'Edm.String'},
    deviceRegistrationState: {type: 'graph.deviceRegistrationState', nullable: false},
    deviceCategoryDisplayName: {type: 'Edm.String'},
    isSupervised: {type: 'Edm.Boolean', nullable: false},
    exchangeLastSuccessfulSyncDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    exchangeAccessState: {type: 'graph.deviceManagementExchangeAccessState', nullable: false},
    exchangeAccessStateReason: {type: 'graph.deviceManagementExchangeAccessStateReason', nullable: false},
    remoteAssistanceSessionUrl: {type: 'Edm.String'},
    remoteAssistanceSessionErrorDetails: {type: 'Edm.String'},
    isEncrypted: {type: 'Edm.Boolean', nullable: false},
    userPrincipalName: {type: 'Edm.String'},
    model: {type: 'Edm.String'},
    manufacturer: {type: 'Edm.String'},
    imei: {type: 'Edm.String'},
    complianceGracePeriodExpirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    serialNumber: {type: 'Edm.String'},
    phoneNumber: {type: 'Edm.String'},
    androidSecurityPatchLevel: {type: 'Edm.String'},
    userDisplayName: {type: 'Edm.String'},
    configurationManagerClientEnabledFeatures: {type: 'graph.configurationManagerClientEnabledFeatures'},
    wiFiMacAddress: {type: 'Edm.String'},
    deviceHealthAttestationState: {type: 'graph.deviceHealthAttestationState'},
    subscriberCarrier: {type: 'Edm.String'},
    meid: {type: 'Edm.String'},
    totalStorageSpaceInBytes: {type: 'Edm.Int64', nullable: false},
    freeStorageSpaceInBytes: {type: 'Edm.Int64', nullable: false},
    managedDeviceName: {type: 'Edm.String'},
    partnerReportedThreatState: {type: 'graph.managedDevicePartnerReportedHealthState', nullable: false},
    deviceConfigurationStates: {type: 'graph.deviceConfigurationState', collection: true, navigation: true},
    deviceCompliancePolicyStates: {type: 'graph.deviceCompliancePolicyState', collection: true, navigation: true},
    deviceCategory: {type: 'graph.deviceCategory', navigation: true}
  }
} as StructuredTypeConfig<ManagedDevice>;
//#endregion