﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryObject } from './directoryobject.entity';
import { AssignedLicense } from './assignedlicense.complex';
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.complex';
import { AssignedLabel } from './assignedlabel.complex';
import { LicenseProcessingState } from './licenseprocessingstate.complex';
import { AppRoleAssignment } from './approleassignment.entity';
import { Calendar } from './calendar.entity';
import { Event } from './event.entity';
import { ProfilePhoto } from './profilephoto.entity';
import { Drive } from './drive.entity';
import { Site } from './site.entity';
import { Extension } from './extension.entity';
import { Onenote } from './onenote.entity';
import { Team } from './team.entity';
import { GroupSetting } from './groupsetting.entity';
import { Conversation } from './conversation.entity';
import { ConversationThread } from './conversationthread.entity';
import { GroupLifecyclePolicy } from './grouplifecyclepolicy.entity';
import { PlannerGroup } from './plannergroup.entity';
//#endregion

export interface Group extends DirectoryObject {
  //#region ODataApiGen Properties
  assignedLabels?: AssignedLabel[];
  assignedLicenses?: AssignedLicense[];
  classification?: string;
  createdDateTime?: Date;
  description?: string;
  displayName?: string;
  expirationDateTime?: Date;
  hasMembersWithLicenseErrors?: boolean;
  groupTypes: string[];
  licenseProcessingState?: LicenseProcessingState;
  mail?: string;
  mailEnabled?: boolean;
  mailNickname?: string;
  membershipRule?: string;
  membershipRuleProcessingState?: string;
  onPremisesDomainName?: string;
  onPremisesLastSyncDateTime?: Date;
  onPremisesNetBiosName?: string;
  onPremisesProvisioningErrors?: OnPremisesProvisioningError[];
  onPremisesSamAccountName?: string;
  onPremisesSecurityIdentifier?: string;
  onPremisesSyncEnabled?: boolean;
  preferredDataLocation?: string;
  preferredLanguage?: string;
  proxyAddresses: string[];
  renewedDateTime?: Date;
  securityEnabled?: boolean;
  securityIdentifier?: string;
  theme?: string;
  visibility?: string;
  allowExternalSenders?: boolean;
  autoSubscribeNewMembers?: boolean;
  isSubscribedByMail?: boolean;
  unseenCount?: number;
  hideFromOutlookClients?: boolean;
  hideFromAddressLists?: boolean;
  isArchived?: boolean;
  appRoleAssignments?: AppRoleAssignment[];
  members?: DirectoryObject[];
  memberOf?: DirectoryObject[];
  membersWithLicenseErrors?: DirectoryObject[];
  transitiveMembers?: DirectoryObject[];
  transitiveMemberOf?: DirectoryObject[];
  createdOnBehalfOf?: DirectoryObject;
  owners?: DirectoryObject[];
  settings?: GroupSetting[];
  conversations?: Conversation[];
  photos?: ProfilePhoto[];
  acceptedSenders?: DirectoryObject[];
  rejectedSenders?: DirectoryObject[];
  threads?: ConversationThread[];
  calendar?: Calendar;
  calendarView?: Event[];
  events?: Event[];
  photo?: ProfilePhoto;
  drive?: Drive;
  drives?: Drive[];
  sites?: Site[];
  extensions?: Extension[];
  groupLifecyclePolicies?: GroupLifecyclePolicy[];
  planner?: PlannerGroup;
  onenote?: Onenote;
  team?: Team;
  //#endregion
}