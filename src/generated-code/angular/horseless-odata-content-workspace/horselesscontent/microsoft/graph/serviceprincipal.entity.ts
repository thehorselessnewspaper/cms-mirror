//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryObject } from './directoryobject.entity';
import { AddIn } from './addin.complex';
import { PermissionScope } from './permissionscope.complex';
import { AppRole } from './approle.complex';
import { InformationalUrl } from './informationalurl.complex';
import { KeyCredential } from './keycredential.complex';
import { PasswordCredential } from './passwordcredential.complex';
import { SamlSingleSignOnSettings } from './samlsinglesignonsettings.complex';
import { AppRoleAssignment } from './approleassignment.entity';
import { OAuth2PermissionGrant } from './oauth2permissiongrant.entity';
import { Endpoint } from './endpoint.entity';
//#endregion

export interface ServicePrincipal extends DirectoryObject {
  //#region ODataApiGen Properties
  accountEnabled?: boolean;
  addIns: AddIn[];
  alternativeNames: string[];
  appDisplayName?: string;
  appId?: string;
  applicationTemplateId?: string;
  appOwnerOrganizationId?: string;
  appRoleAssignmentRequired: boolean;
  appRoles: AppRole[];
  displayName?: string;
  homepage?: string;
  info?: InformationalUrl;
  keyCredentials: KeyCredential[];
  loginUrl?: string;
  logoutUrl?: string;
  notificationEmailAddresses: string[];
  oauth2PermissionScopes: PermissionScope[];
  passwordCredentials: PasswordCredential[];
  preferredSingleSignOnMode?: string;
  replyUrls: string[];
  servicePrincipalNames: string[];
  samlSingleSignOnSettings?: SamlSingleSignOnSettings;
  servicePrincipalType?: string;
  tags: string[];
  tokenEncryptionKeyId?: string;
  appRoleAssignedTo?: AppRoleAssignment[];
  appRoleAssignments?: AppRoleAssignment[];
  endpoints?: Endpoint[];
  oauth2PermissionGrants?: OAuth2PermissionGrant[];
  memberOf?: DirectoryObject[];
  transitiveMemberOf?: DirectoryObject[];
  createdObjects?: DirectoryObject[];
  owners?: DirectoryObject[];
  ownedObjects?: DirectoryObject[];
  //#endregion
}