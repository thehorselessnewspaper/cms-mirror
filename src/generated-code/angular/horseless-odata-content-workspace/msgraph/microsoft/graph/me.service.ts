import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
  ODataSingletonService,
  ODataEntity,
  ODataEntities,
  ODataProperty,
  EntityKey,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { AssignedLicense } from './assignedlicense.complex';
import { AssignedPlan } from './assignedplan.complex';
import { ObjectIdentity } from './objectidentity.complex';
import { LicenseAssignmentState } from './licenseassignmentstate.complex';
import { OnPremisesExtensionAttributes } from './onpremisesextensionattributes.complex';
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.complex';
import { PasswordProfile } from './passwordprofile.complex';
import { ProvisionedPlan } from './provisionedplan.complex';
import { MailboxSettings } from './mailboxsettings.complex';
import { DirectoryObject } from './directoryobject.entity';
import { User } from './user.entity';
import { AppRoleAssignment } from './approleassignment.entity';
import { OAuth2PermissionGrant } from './oauth2permissiongrant.entity';
import { LicenseDetails } from './licensedetails.entity';
import { OutlookUser } from './outlookuser.entity';
import { Message } from './message.entity';
import { MailFolder } from './mailfolder.entity';
import { Calendar } from './calendar.entity';
import { CalendarGroup } from './calendargroup.entity';
import { Event } from './event.entity';
import { Person } from './person.entity';
import { Contact } from './contact.entity';
import { ContactFolder } from './contactfolder.entity';
import { InferenceClassification } from './inferenceclassification.entity';
import { ProfilePhoto } from './profilephoto.entity';
import { Drive } from './drive.entity';
import { Site } from './site.entity';
import { Extension } from './extension.entity';
import { ManagedDevice } from './manageddevice.entity';
import { ManagedAppRegistration } from './managedappregistration.entity';
import { DeviceManagementTroubleshootingEvent } from './devicemanagementtroubleshootingevent.entity';
import { PlannerUser } from './planneruser.entity';
import { OfficeGraphInsights } from './officegraphinsights.entity';
import { UserSettings } from './usersettings.entity';
import { Onenote } from './onenote.entity';
import { UserActivity } from './useractivity.entity';
import { OnlineMeeting } from './onlinemeeting.entity';
import { Team } from './team.entity';
//#endregion

@Injectable()
export class MeService extends ODataSingletonService<User> {
  constructor(client: ODataClient) {
    super(client, 'me', 'microsoft.graph.user');
  }

  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}