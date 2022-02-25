//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryObject } from './directoryobject.entity';
import { AddIn } from './addin.complex';
import { ApiApplication } from './apiapplication.complex';
import { AppRole } from './approle.complex';
import { PublicClientApplication } from './publicclientapplication.complex';
import { InformationalUrl } from './informationalurl.complex';
import { KeyCredential } from './keycredential.complex';
import { OptionalClaims } from './optionalclaims.complex';
import { ParentalControlSettings } from './parentalcontrolsettings.complex';
import { PasswordCredential } from './passwordcredential.complex';
import { RequiredResourceAccess } from './requiredresourceaccess.complex';
import { WebApplication } from './webapplication.complex';
import { ExtensionProperty } from './extensionproperty.entity';
import { TokenLifetimePolicy } from './tokenlifetimepolicy.entity';
import { TokenIssuancePolicy } from './tokenissuancepolicy.entity';
//#endregion

export interface Application extends DirectoryObject {
  //#region ODataApiGen Properties
  addIns: AddIn[];
  api?: ApiApplication;
  appId?: string;
  applicationTemplateId?: string;
  appRoles: AppRole[];
  isFallbackPublicClient?: boolean;
  identifierUris: string[];
  createdDateTime?: Date;
  publicClient?: PublicClientApplication;
  displayName?: string;
  groupMembershipClaims?: string;
  info?: InformationalUrl;
  isDeviceOnlyAuthSupported?: boolean;
  keyCredentials: KeyCredential[];
  logo: any;
  oauth2RequirePostResponse: boolean;
  optionalClaims?: OptionalClaims;
  parentalControlSettings?: ParentalControlSettings;
  passwordCredentials: PasswordCredential[];
  publisherDomain?: string;
  requiredResourceAccess: RequiredResourceAccess[];
  signInAudience?: string;
  tags: string[];
  tokenEncryptionKeyId?: string;
  web?: WebApplication;
  extensionProperties?: ExtensionProperty[];
  createdOnBehalfOf?: DirectoryObject;
  owners?: DirectoryObject[];
  tokenLifetimePolicies?: TokenLifetimePolicy[];
  tokenIssuancePolicies?: TokenIssuancePolicy[];
  //#endregion
}