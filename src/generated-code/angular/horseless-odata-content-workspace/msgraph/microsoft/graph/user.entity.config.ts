﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { User } from './user.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const UserEntityConfig = {
  name: 'user',
  base: 'microsoft.graph.directoryObject',
  open: true,
  fields: {
    accountEnabled: {type: 'Edm.Boolean'},
    ageGroup: {type: 'Edm.String'},
    assignedLicenses: {type: 'graph.assignedLicense', nullable: false, collection: true},
    assignedPlans: {type: 'graph.assignedPlan', nullable: false, collection: true},
    businessPhones: {type: 'Edm.String', nullable: false, collection: true},
    city: {type: 'Edm.String'},
    companyName: {type: 'Edm.String'},
    consentProvidedForMinor: {type: 'Edm.String'},
    country: {type: 'Edm.String'},
    creationType: {type: 'Edm.String'},
    department: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    employeeId: {type: 'Edm.String'},
    externalUserState: {type: 'Edm.String'},
    externalUserStateChangeDateTime: {type: 'Edm.DateTimeOffset'},
    faxNumber: {type: 'Edm.String'},
    givenName: {type: 'Edm.String'},
    identities: {type: 'graph.objectIdentity', collection: true},
    imAddresses: {type: 'Edm.String', collection: true},
    isResourceAccount: {type: 'Edm.Boolean'},
    jobTitle: {type: 'Edm.String'},
    lastPasswordChangeDateTime: {type: 'Edm.DateTimeOffset'},
    legalAgeGroupClassification: {type: 'Edm.String'},
    licenseAssignmentStates: {type: 'graph.licenseAssignmentState', collection: true},
    mail: {type: 'Edm.String'},
    mailNickname: {type: 'Edm.String'},
    mobilePhone: {type: 'Edm.String'},
    onPremisesDistinguishedName: {type: 'Edm.String'},
    onPremisesExtensionAttributes: {type: 'graph.onPremisesExtensionAttributes'},
    onPremisesImmutableId: {type: 'Edm.String'},
    onPremisesLastSyncDateTime: {type: 'Edm.DateTimeOffset'},
    onPremisesProvisioningErrors: {type: 'graph.onPremisesProvisioningError', collection: true},
    onPremisesSecurityIdentifier: {type: 'Edm.String'},
    onPremisesSyncEnabled: {type: 'Edm.Boolean'},
    onPremisesDomainName: {type: 'Edm.String'},
    onPremisesSamAccountName: {type: 'Edm.String'},
    onPremisesUserPrincipalName: {type: 'Edm.String'},
    otherMails: {type: 'Edm.String', nullable: false, collection: true},
    passwordPolicies: {type: 'Edm.String'},
    passwordProfile: {type: 'graph.passwordProfile'},
    officeLocation: {type: 'Edm.String'},
    postalCode: {type: 'Edm.String'},
    preferredLanguage: {type: 'Edm.String'},
    provisionedPlans: {type: 'graph.provisionedPlan', nullable: false, collection: true},
    proxyAddresses: {type: 'Edm.String', nullable: false, collection: true},
    showInAddressList: {type: 'Edm.Boolean'},
    signInSessionsValidFromDateTime: {type: 'Edm.DateTimeOffset'},
    state: {type: 'Edm.String'},
    streetAddress: {type: 'Edm.String'},
    surname: {type: 'Edm.String'},
    usageLocation: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'},
    userType: {type: 'Edm.String'},
    mailboxSettings: {type: 'graph.mailboxSettings'},
    deviceEnrollmentLimit: {type: 'Edm.Int32', nullable: false},
    aboutMe: {type: 'Edm.String'},
    birthday: {type: 'Edm.DateTimeOffset', nullable: false},
    hireDate: {type: 'Edm.DateTimeOffset', nullable: false},
    interests: {type: 'Edm.String', collection: true},
    mySite: {type: 'Edm.String'},
    pastProjects: {type: 'Edm.String', collection: true},
    preferredName: {type: 'Edm.String'},
    responsibilities: {type: 'Edm.String', collection: true},
    schools: {type: 'Edm.String', collection: true},
    skills: {type: 'Edm.String', collection: true},
    appRoleAssignments: {type: 'graph.appRoleAssignment', collection: true, navigation: true},
    ownedDevices: {type: 'graph.directoryObject', collection: true, navigation: true},
    registeredDevices: {type: 'graph.directoryObject', collection: true, navigation: true},
    manager: {type: 'graph.directoryObject', navigation: true},
    directReports: {type: 'graph.directoryObject', collection: true, navigation: true},
    memberOf: {type: 'graph.directoryObject', collection: true, navigation: true},
    createdObjects: {type: 'graph.directoryObject', collection: true, navigation: true},
    oauth2PermissionGrants: {type: 'graph.oAuth2PermissionGrant', collection: true, navigation: true},
    ownedObjects: {type: 'graph.directoryObject', collection: true, navigation: true},
    licenseDetails: {type: 'graph.licenseDetails', collection: true, navigation: true},
    transitiveMemberOf: {type: 'graph.directoryObject', collection: true, navigation: true},
    outlook: {type: 'graph.outlookUser', navigation: true},
    messages: {type: 'graph.message', collection: true, navigation: true},
    mailFolders: {type: 'graph.mailFolder', collection: true, navigation: true},
    calendar: {type: 'graph.calendar', navigation: true},
    calendars: {type: 'graph.calendar', collection: true, navigation: true},
    calendarGroups: {type: 'graph.calendarGroup', collection: true, navigation: true},
    calendarView: {type: 'graph.event', collection: true, navigation: true},
    events: {type: 'graph.event', collection: true, navigation: true},
    people: {type: 'graph.person', collection: true, navigation: true},
    contacts: {type: 'graph.contact', collection: true, navigation: true},
    contactFolders: {type: 'graph.contactFolder', collection: true, navigation: true},
    inferenceClassification: {type: 'graph.inferenceClassification', navigation: true},
    photo: {type: 'graph.profilePhoto', navigation: true},
    photos: {type: 'graph.profilePhoto', collection: true, navigation: true},
    drive: {type: 'graph.drive', navigation: true},
    drives: {type: 'graph.drive', collection: true, navigation: true},
    followedSites: {type: 'graph.site', collection: true, navigation: true},
    extensions: {type: 'graph.extension', collection: true, navigation: true},
    managedDevices: {type: 'graph.managedDevice', collection: true, navigation: true},
    managedAppRegistrations: {type: 'graph.managedAppRegistration', collection: true, navigation: true},
    deviceManagementTroubleshootingEvents: {type: 'graph.deviceManagementTroubleshootingEvent', collection: true, navigation: true},
    planner: {type: 'graph.plannerUser', navigation: true},
    insights: {type: 'graph.officeGraphInsights', navigation: true},
    settings: {type: 'graph.userSettings', navigation: true},
    onenote: {type: 'graph.onenote', navigation: true},
    activities: {type: 'graph.userActivity', collection: true, navigation: true},
    onlineMeetings: {type: 'graph.onlineMeeting', collection: true, navigation: true},
    joinedTeams: {type: 'graph.team', collection: true, navigation: true}
  }
} as StructuredTypeConfig<User>;
//#endregion