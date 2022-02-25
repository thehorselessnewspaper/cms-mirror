//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Application } from './application.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ApplicationEntityConfig = {
  name: 'application',
  base: 'microsoft.graph.directoryObject',
  open: true,
  fields: {
    addIns: {type: 'graph.addIn', nullable: false, collection: true},
    api: {type: 'graph.apiApplication'},
    appId: {type: 'Edm.String'},
    applicationTemplateId: {type: 'Edm.String'},
    appRoles: {type: 'graph.appRole', nullable: false, collection: true},
    isFallbackPublicClient: {type: 'Edm.Boolean'},
    identifierUris: {type: 'Edm.String', nullable: false, collection: true},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    publicClient: {type: 'graph.publicClientApplication'},
    displayName: {type: 'Edm.String'},
    groupMembershipClaims: {type: 'Edm.String'},
    info: {type: 'graph.informationalUrl'},
    isDeviceOnlyAuthSupported: {type: 'Edm.Boolean'},
    keyCredentials: {type: 'graph.keyCredential', nullable: false, collection: true},
    logo: {type: 'Edm.Stream', nullable: false},
    oauth2RequirePostResponse: {type: 'Edm.Boolean', nullable: false},
    optionalClaims: {type: 'graph.optionalClaims'},
    parentalControlSettings: {type: 'graph.parentalControlSettings'},
    passwordCredentials: {type: 'graph.passwordCredential', nullable: false, collection: true},
    publisherDomain: {type: 'Edm.String'},
    requiredResourceAccess: {type: 'graph.requiredResourceAccess', nullable: false, collection: true},
    signInAudience: {type: 'Edm.String'},
    tags: {type: 'Edm.String', nullable: false, collection: true},
    tokenEncryptionKeyId: {type: 'Edm.Guid'},
    web: {type: 'graph.webApplication'},
    extensionProperties: {type: 'graph.extensionProperty', collection: true, navigation: true},
    createdOnBehalfOf: {type: 'graph.directoryObject', navigation: true},
    owners: {type: 'graph.directoryObject', collection: true, navigation: true},
    tokenLifetimePolicies: {type: 'graph.tokenLifetimePolicy', collection: true, navigation: true},
    tokenIssuancePolicies: {type: 'graph.tokenIssuancePolicy', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Application>;
//#endregion