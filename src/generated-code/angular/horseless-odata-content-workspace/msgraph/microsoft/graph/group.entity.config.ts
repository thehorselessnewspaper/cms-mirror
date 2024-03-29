﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Group } from './group.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const GroupEntityConfig = {
  name: 'group',
  base: 'microsoft.graph.directoryObject',
  open: true,
  fields: {
    assignedLabels: {type: 'graph.assignedLabel', collection: true},
    assignedLicenses: {type: 'graph.assignedLicense', collection: true},
    classification: {type: 'Edm.String'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    expirationDateTime: {type: 'Edm.DateTimeOffset'},
    hasMembersWithLicenseErrors: {type: 'Edm.Boolean'},
    groupTypes: {type: 'Edm.String', nullable: false, collection: true},
    licenseProcessingState: {type: 'graph.licenseProcessingState'},
    mail: {type: 'Edm.String'},
    mailEnabled: {type: 'Edm.Boolean'},
    mailNickname: {type: 'Edm.String'},
    membershipRule: {type: 'Edm.String'},
    membershipRuleProcessingState: {type: 'Edm.String'},
    onPremisesDomainName: {type: 'Edm.String'},
    onPremisesLastSyncDateTime: {type: 'Edm.DateTimeOffset'},
    onPremisesNetBiosName: {type: 'Edm.String'},
    onPremisesProvisioningErrors: {type: 'graph.onPremisesProvisioningError', collection: true},
    onPremisesSamAccountName: {type: 'Edm.String'},
    onPremisesSecurityIdentifier: {type: 'Edm.String'},
    onPremisesSyncEnabled: {type: 'Edm.Boolean'},
    preferredDataLocation: {type: 'Edm.String'},
    preferredLanguage: {type: 'Edm.String'},
    proxyAddresses: {type: 'Edm.String', nullable: false, collection: true},
    renewedDateTime: {type: 'Edm.DateTimeOffset'},
    securityEnabled: {type: 'Edm.Boolean'},
    securityIdentifier: {type: 'Edm.String'},
    theme: {type: 'Edm.String'},
    visibility: {type: 'Edm.String'},
    allowExternalSenders: {type: 'Edm.Boolean'},
    autoSubscribeNewMembers: {type: 'Edm.Boolean'},
    isSubscribedByMail: {type: 'Edm.Boolean'},
    unseenCount: {type: 'Edm.Int32'},
    hideFromOutlookClients: {type: 'Edm.Boolean'},
    hideFromAddressLists: {type: 'Edm.Boolean'},
    isArchived: {type: 'Edm.Boolean'},
    appRoleAssignments: {type: 'graph.appRoleAssignment', collection: true, navigation: true},
    members: {type: 'graph.directoryObject', collection: true, navigation: true},
    memberOf: {type: 'graph.directoryObject', collection: true, navigation: true},
    membersWithLicenseErrors: {type: 'graph.directoryObject', collection: true, navigation: true},
    transitiveMembers: {type: 'graph.directoryObject', collection: true, navigation: true},
    transitiveMemberOf: {type: 'graph.directoryObject', collection: true, navigation: true},
    createdOnBehalfOf: {type: 'graph.directoryObject', navigation: true},
    owners: {type: 'graph.directoryObject', collection: true, navigation: true},
    settings: {type: 'graph.groupSetting', collection: true, navigation: true},
    conversations: {type: 'graph.conversation', collection: true, navigation: true},
    photos: {type: 'graph.profilePhoto', collection: true, navigation: true},
    acceptedSenders: {type: 'graph.directoryObject', collection: true, navigation: true},
    rejectedSenders: {type: 'graph.directoryObject', collection: true, navigation: true},
    threads: {type: 'graph.conversationThread', collection: true, navigation: true},
    calendar: {type: 'graph.calendar', navigation: true},
    calendarView: {type: 'graph.event', collection: true, navigation: true},
    events: {type: 'graph.event', collection: true, navigation: true},
    photo: {type: 'graph.profilePhoto', navigation: true},
    drive: {type: 'graph.drive', navigation: true},
    drives: {type: 'graph.drive', collection: true, navigation: true},
    sites: {type: 'graph.site', collection: true, navigation: true},
    extensions: {type: 'graph.extension', collection: true, navigation: true},
    groupLifecyclePolicies: {type: 'graph.groupLifecyclePolicy', collection: true, navigation: true},
    planner: {type: 'graph.plannerGroup', navigation: true},
    onenote: {type: 'graph.onenote', navigation: true},
    team: {type: 'graph.team', navigation: true}
  }
} as StructuredTypeConfig<Group>;
//#endregion