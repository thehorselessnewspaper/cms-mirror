import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
  ODataEntitySetService,
  ODataEntity,
  ODataEntities,
  ODataProperty,
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MailTipsType } from './mailtipstype.enum';
import { ExchangeIdFormat } from './exchangeidformat.enum';
import { AssignedLicense } from './assignedlicense.complex';
import { AssignedPlan } from './assignedplan.complex';
import { ObjectIdentity } from './objectidentity.complex';
import { LicenseAssignmentState } from './licenseassignmentstate.complex';
import { OnPremisesExtensionAttributes } from './onpremisesextensionattributes.complex';
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.complex';
import { PasswordProfile } from './passwordprofile.complex';
import { ProvisionedPlan } from './provisionedplan.complex';
import { MailboxSettings } from './mailboxsettings.complex';
import { AttendeeBase } from './attendeebase.complex';
import { LocationConstraint } from './locationconstraint.complex';
import { MeetingTimeSuggestionsResult } from './meetingtimesuggestionsresult.complex';
import { TimeConstraint } from './timeconstraint.complex';
import { MailTips } from './mailtips.complex';
import { ConvertIdResult } from './convertidresult.complex';
import { ManagedAppDiagnosticStatus } from './managedappdiagnosticstatus.complex';
import { DirectoryObject } from './directoryobject.entity';
import { User } from './user.entity';
import { Message } from './message.entity';
import { DriveItem } from './driveitem.entity';
import { ManagedAppPolicy } from './managedapppolicy.entity';
//#endregion

@Injectable()
export class UsersService extends ODataEntitySetService<User> {
  constructor(client: ODataClient) {
    super(client, 'users', 'microsoft.graph.user');
  }
  //#region ODataApiGen Actions
  public assignLicense(key: EntityKey<User>): ODataActionResource<{addLicenses: AssignedLicense[], removeLicenses: string[]}, User> { 
    return this.entity(key).action<{addLicenses: AssignedLicense[], removeLicenses: string[]}, User>('microsoft.graph.assignLicense');
  }
  public callAssignLicense(key: EntityKey<User>, addLicenses: AssignedLicense[], removeLicenses: string[], options?: ODataQueryArgumentsOptions<User>) {
    return this.callAction<{addLicenses: AssignedLicense[], removeLicenses: string[]}, User>(
      {addLicenses, removeLicenses}, 
      this.assignLicense(key), 
      'entity', options) as Observable<ODataEntity<User>>;
  }
  public changePassword(key: EntityKey<User>): ODataActionResource<{currentPassword: string, newPassword: string}, any> { 
    return this.entity(key).action<{currentPassword: string, newPassword: string}, any>('microsoft.graph.changePassword');
  }
  public callChangePassword(key: EntityKey<User>, currentPassword: string, newPassword: string, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<{currentPassword: string, newPassword: string}, any>(
      {currentPassword, newPassword}, 
      this.changePassword(key), 
      'none', options);
  }
  public revokeSignInSessions(key: EntityKey<User>): ODataActionResource<null, boolean> { 
    return this.entity(key).action<null, boolean>('microsoft.graph.revokeSignInSessions');
  }
  public callRevokeSignInSessions(key: EntityKey<User>, options?: ODataQueryArgumentsOptions<boolean>) {
    return this.callAction<null, boolean>(
      null, 
      this.revokeSignInSessions(key), 
      'property', options) as Observable<ODataProperty<boolean>>;
  }
  public reprocessLicenseAssignment(key: EntityKey<User>): ODataActionResource<null, User> { 
    return this.entity(key).action<null, User>('microsoft.graph.reprocessLicenseAssignment');
  }
  public callReprocessLicenseAssignment(key: EntityKey<User>, options?: ODataQueryArgumentsOptions<User>) {
    return this.callAction<null, User>(
      null, 
      this.reprocessLicenseAssignment(key), 
      'entity', options) as Observable<ODataEntity<User>>;
  }
  public findMeetingTimes(key: EntityKey<User>): ODataActionResource<{attendees: AttendeeBase[], locationConstraint: LocationConstraint, timeConstraint: TimeConstraint, meetingDuration: Duration, maxCandidates: number, isOrganizerOptional: boolean, returnSuggestionReasons: boolean, minimumAttendeePercentage: number}, MeetingTimeSuggestionsResult> { 
    return this.entity(key).action<{attendees: AttendeeBase[], locationConstraint: LocationConstraint, timeConstraint: TimeConstraint, meetingDuration: Duration, maxCandidates: number, isOrganizerOptional: boolean, returnSuggestionReasons: boolean, minimumAttendeePercentage: number}, MeetingTimeSuggestionsResult>('microsoft.graph.findMeetingTimes');
  }
  public callFindMeetingTimes(key: EntityKey<User>, attendees: AttendeeBase[], locationConstraint: LocationConstraint, timeConstraint: TimeConstraint, meetingDuration: Duration, maxCandidates: number, isOrganizerOptional: boolean, returnSuggestionReasons: boolean, minimumAttendeePercentage: number, options?: ODataQueryArgumentsOptions<MeetingTimeSuggestionsResult>) {
    return this.callAction<{attendees: AttendeeBase[], locationConstraint: LocationConstraint, timeConstraint: TimeConstraint, meetingDuration: Duration, maxCandidates: number, isOrganizerOptional: boolean, returnSuggestionReasons: boolean, minimumAttendeePercentage: number}, MeetingTimeSuggestionsResult>(
      {attendees, locationConstraint, timeConstraint, meetingDuration, maxCandidates, isOrganizerOptional, returnSuggestionReasons, minimumAttendeePercentage}, 
      this.findMeetingTimes(key), 
      'entity', options) as Observable<ODataEntity<MeetingTimeSuggestionsResult>>;
  }
  public sendMail(key: EntityKey<User>): ODataActionResource<{Message: Message, SaveToSentItems: boolean}, any> { 
    return this.entity(key).action<{Message: Message, SaveToSentItems: boolean}, any>('microsoft.graph.sendMail');
  }
  public callSendMail(key: EntityKey<User>, Message: Message, SaveToSentItems: boolean, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<{Message: Message, SaveToSentItems: boolean}, any>(
      {Message, SaveToSentItems}, 
      this.sendMail(key), 
      'none', options);
  }
  public getMailTips(key: EntityKey<User>): ODataActionResource<{EmailAddresses: string[], MailTipsOptions: MailTipsType}, MailTips> { 
    return this.entity(key).action<{EmailAddresses: string[], MailTipsOptions: MailTipsType}, MailTips>('microsoft.graph.getMailTips');
  }
  public callGetMailTips(key: EntityKey<User>, EmailAddresses: string[], MailTipsOptions: MailTipsType, options?: ODataQueryArgumentsOptions<MailTips>) {
    return this.callAction<{EmailAddresses: string[], MailTipsOptions: MailTipsType}, MailTips>(
      {EmailAddresses, MailTipsOptions}, 
      this.getMailTips(key), 
      'entities', options) as Observable<ODataEntities<MailTips>>;
  }
  public translateExchangeIds(key: EntityKey<User>): ODataActionResource<{InputIds: string[], TargetIdType: ExchangeIdFormat, SourceIdType: ExchangeIdFormat}, ConvertIdResult> { 
    return this.entity(key).action<{InputIds: string[], TargetIdType: ExchangeIdFormat, SourceIdType: ExchangeIdFormat}, ConvertIdResult>('microsoft.graph.translateExchangeIds');
  }
  public callTranslateExchangeIds(key: EntityKey<User>, InputIds: string[], TargetIdType: ExchangeIdFormat, SourceIdType: ExchangeIdFormat, options?: ODataQueryArgumentsOptions<ConvertIdResult>) {
    return this.callAction<{InputIds: string[], TargetIdType: ExchangeIdFormat, SourceIdType: ExchangeIdFormat}, ConvertIdResult>(
      {InputIds, TargetIdType, SourceIdType}, 
      this.translateExchangeIds(key), 
      'entities', options) as Observable<ODataEntities<ConvertIdResult>>;
  }
  public removeAllDevicesFromManagement(key: EntityKey<User>): ODataActionResource<null, any> { 
    return this.entity(key).action<null, any>('microsoft.graph.removeAllDevicesFromManagement');
  }
  public callRemoveAllDevicesFromManagement(key: EntityKey<User>, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<null, any>(
      null, 
      this.removeAllDevicesFromManagement(key), 
      'none', options);
  }
  public wipeManagedAppRegistrationsByDeviceTag(key: EntityKey<User>): ODataActionResource<{deviceTag: string}, any> { 
    return this.entity(key).action<{deviceTag: string}, any>('microsoft.graph.wipeManagedAppRegistrationsByDeviceTag');
  }
  public callWipeManagedAppRegistrationsByDeviceTag(key: EntityKey<User>, deviceTag: string, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<{deviceTag: string}, any>(
      {deviceTag}, 
      this.wipeManagedAppRegistrationsByDeviceTag(key), 
      'none', options);
  }
  public exportPersonalData(key: EntityKey<User>): ODataActionResource<{storageLocation: string}, any> { 
    return this.entity(key).action<{storageLocation: string}, any>('microsoft.graph.exportPersonalData');
  }
  public callExportPersonalData(key: EntityKey<User>, storageLocation: string, options?: ODataQueryArgumentsOptions<any>) {
    return this.callAction<{storageLocation: string}, any>(
      {storageLocation}, 
      this.exportPersonalData(key), 
      'none', options);
  }
  //#endregion
  //#region ODataApiGen Functions
  public delta(): ODataFunctionResource<null, User> { 
    return this.entities().function<null, User>('microsoft.graph.delta');
  }
  public callDelta(options?: ODataQueryArgumentsOptions<User>) {
    return this.callFunction<null, User>(
      null, 
      this.delta(), 
      'entities', options) as Observable<ODataEntities<User>>;
  }
  public getManagedAppDiagnosticStatuses(key: EntityKey<User>): ODataFunctionResource<null, ManagedAppDiagnosticStatus> { 
    return this.entity(key).function<null, ManagedAppDiagnosticStatus>('microsoft.graph.getManagedAppDiagnosticStatuses');
  }
  public callGetManagedAppDiagnosticStatuses(key: EntityKey<User>, options?: ODataQueryArgumentsOptions<ManagedAppDiagnosticStatus>) {
    return this.callFunction<null, ManagedAppDiagnosticStatus>(
      null, 
      this.getManagedAppDiagnosticStatuses(key), 
      'entities', options) as Observable<ODataEntities<ManagedAppDiagnosticStatus>>;
  }
  public getManagedAppPolicies(key: EntityKey<User>): ODataFunctionResource<null, ManagedAppPolicy> { 
    return this.entity(key).function<null, ManagedAppPolicy>('microsoft.graph.getManagedAppPolicies');
  }
  public callGetManagedAppPolicies(key: EntityKey<User>, options?: ODataQueryArgumentsOptions<ManagedAppPolicy>) {
    return this.callFunction<null, ManagedAppPolicy>(
      null, 
      this.getManagedAppPolicies(key), 
      'entities', options) as Observable<ODataEntities<ManagedAppPolicy>>;
  }
  //#endregion
  //#region ODataApiGen Navigations
  public createdObjects(key: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('createdObjects'); 
  }
  public fetchCreatedObjects(key: EntityKey<User>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.createdObjects(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToCreatedObjects(key: EntityKey<User>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.createdObjects(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromCreatedObjects(key: EntityKey<User>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.createdObjects(key).reference()
      .remove(target);
  }
  public directReports(key: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('directReports'); 
  }
  public fetchDirectReports(key: EntityKey<User>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.directReports(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToDirectReports(key: EntityKey<User>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.directReports(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromDirectReports(key: EntityKey<User>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.directReports(key).reference()
      .remove(target);
  }
  public createdByUser(key: EntityKey<User>): ODataNavigationPropertyResource<User> { 
    return this.entity(key).navigationProperty<User>('createdByUser'); 
  }
  public fetchCreatedByUser(key: EntityKey<User>, options?: ODataQueryArgumentsOptions<User>) {
    return this.fetchNavigationProperty<User>(
      this.createdByUser(key), 
      'entity', options) as Observable<ODataEntity<User>>;
  }
  public setUserAsCreatedByUser(key: EntityKey<User>, target: ODataEntityResource<ODataEntity<User>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.createdByUser(key).reference()
      .set(target, {etag});
  }
  public unsetUserAsCreatedByUser(key: EntityKey<User>, {target, etag}: {target?: ODataEntityResource<ODataEntity<User>>, etag?: string} = {}): Observable<any> {
    return this.createdByUser(key).reference()
      .unset({etag});
  }
  public lastModifiedByUser(key: EntityKey<User>): ODataNavigationPropertyResource<User> { 
    return this.entity(key).navigationProperty<User>('lastModifiedByUser'); 
  }
  public fetchLastModifiedByUser(key: EntityKey<User>, options?: ODataQueryArgumentsOptions<User>) {
    return this.fetchNavigationProperty<User>(
      this.lastModifiedByUser(key), 
      'entity', options) as Observable<ODataEntity<User>>;
  }
  public setUserAsLastModifiedByUser(key: EntityKey<User>, target: ODataEntityResource<ODataEntity<User>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.lastModifiedByUser(key).reference()
      .set(target, {etag});
  }
  public unsetUserAsLastModifiedByUser(key: EntityKey<User>, {target, etag}: {target?: ODataEntityResource<ODataEntity<User>>, etag?: string} = {}): Observable<any> {
    return this.lastModifiedByUser(key).reference()
      .unset({etag});
  }
  public manager(key: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('manager'); 
  }
  public fetchManager(key: EntityKey<User>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.manager(key), 
      'entity', options) as Observable<ODataEntity<DirectoryObject>>;
  }
  public setDirectoryObjectAsManager(key: EntityKey<User>, target: ODataEntityResource<ODataEntity<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.manager(key).reference()
      .set(target, {etag});
  }
  public unsetDirectoryObjectAsManager(key: EntityKey<User>, {target, etag}: {target?: ODataEntityResource<ODataEntity<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.manager(key).reference()
      .unset({etag});
  }
  public memberOf(key: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('memberOf'); 
  }
  public fetchMemberOf(key: EntityKey<User>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.memberOf(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToMemberOf(key: EntityKey<User>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.memberOf(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromMemberOf(key: EntityKey<User>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.memberOf(key).reference()
      .remove(target);
  }
  public ownedDevices(key: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('ownedDevices'); 
  }
  public fetchOwnedDevices(key: EntityKey<User>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.ownedDevices(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToOwnedDevices(key: EntityKey<User>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.ownedDevices(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromOwnedDevices(key: EntityKey<User>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.ownedDevices(key).reference()
      .remove(target);
  }
  public ownedObjects(key: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('ownedObjects'); 
  }
  public fetchOwnedObjects(key: EntityKey<User>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.ownedObjects(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToOwnedObjects(key: EntityKey<User>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.ownedObjects(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromOwnedObjects(key: EntityKey<User>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.ownedObjects(key).reference()
      .remove(target);
  }
  public registeredDevices(key: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('registeredDevices'); 
  }
  public fetchRegisteredDevices(key: EntityKey<User>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.registeredDevices(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToRegisteredDevices(key: EntityKey<User>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.registeredDevices(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromRegisteredDevices(key: EntityKey<User>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.registeredDevices(key).reference()
      .remove(target);
  }
  public transitiveMemberOf(key: EntityKey<User>): ODataNavigationPropertyResource<DirectoryObject> { 
    return this.entity(key).navigationProperty<DirectoryObject>('transitiveMemberOf'); 
  }
  public fetchTransitiveMemberOf(key: EntityKey<User>, options?: ODataQueryArgumentsOptions<DirectoryObject>) {
    return this.fetchNavigationProperty<DirectoryObject>(
      this.transitiveMemberOf(key), 
      'entities', options) as Observable<ODataEntities<DirectoryObject>>;
  }
  public addDirectoryObjectToTransitiveMemberOf(key: EntityKey<User>, target: ODataEntityResource<ODataEntities<DirectoryObject>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.transitiveMemberOf(key).reference()
      .add(target);
  }
  public removeDirectoryObjectFromTransitiveMemberOf(key: EntityKey<User>, {target, etag}: {target?: ODataEntityResource<ODataEntities<DirectoryObject>>, etag?: string} = {}): Observable<any> {
    return this.transitiveMemberOf(key).reference()
      .remove(target);
  }
  //#endregion
}
