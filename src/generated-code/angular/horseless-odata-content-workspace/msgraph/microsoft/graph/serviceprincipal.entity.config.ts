﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ServicePrincipal } from './serviceprincipal.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ServicePrincipalEntityConfig = {
  name: 'servicePrincipal',
  base: 'microsoft.graph.directoryObject',
  open: true,
  fields: {
    accountEnabled: {type: 'Edm.Boolean'},
    addIns: {type: 'graph.addIn', nullable: false, collection: true},
    alternativeNames: {type: 'Edm.String', nullable: false, collection: true},
    appDisplayName: {type: 'Edm.String'},
    appId: {type: 'Edm.String'},
    applicationTemplateId: {type: 'Edm.String'},
    appOwnerOrganizationId: {type: 'Edm.Guid'},
    appRoleAssignmentRequired: {type: 'Edm.Boolean', nullable: false},
    appRoles: {type: 'graph.appRole', nullable: false, collection: true},
    displayName: {type: 'Edm.String'},
    homepage: {type: 'Edm.String'},
    info: {type: 'graph.informationalUrl'},
    keyCredentials: {type: 'graph.keyCredential', nullable: false, collection: true},
    loginUrl: {type: 'Edm.String'},
    logoutUrl: {type: 'Edm.String'},
    notificationEmailAddresses: {type: 'Edm.String', nullable: false, collection: true},
    oauth2PermissionScopes: {type: 'graph.permissionScope', nullable: false, collection: true},
    passwordCredentials: {type: 'graph.passwordCredential', nullable: false, collection: true},
    preferredSingleSignOnMode: {type: 'Edm.String'},
    replyUrls: {type: 'Edm.String', nullable: false, collection: true},
    servicePrincipalNames: {type: 'Edm.String', nullable: false, collection: true},
    samlSingleSignOnSettings: {type: 'graph.samlSingleSignOnSettings'},
    servicePrincipalType: {type: 'Edm.String'},
    tags: {type: 'Edm.String', nullable: false, collection: true},
    tokenEncryptionKeyId: {type: 'Edm.Guid'},
    appRoleAssignedTo: {type: 'graph.appRoleAssignment', collection: true, navigation: true},
    appRoleAssignments: {type: 'graph.appRoleAssignment', collection: true, navigation: true},
    endpoints: {type: 'graph.endpoint', collection: true, navigation: true},
    oauth2PermissionGrants: {type: 'graph.oAuth2PermissionGrant', collection: true, navigation: true},
    memberOf: {type: 'graph.directoryObject', collection: true, navigation: true},
    transitiveMemberOf: {type: 'graph.directoryObject', collection: true, navigation: true},
    createdObjects: {type: 'graph.directoryObject', collection: true, navigation: true},
    owners: {type: 'graph.directoryObject', collection: true, navigation: true},
    ownedObjects: {type: 'graph.directoryObject', collection: true, navigation: true}
  }
} as StructuredTypeConfig<ServicePrincipal>;
//#endregion