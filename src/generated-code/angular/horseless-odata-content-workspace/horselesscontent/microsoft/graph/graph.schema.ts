//#region ODataApiGen ODataImports
import {
  SchemaConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RiskLevelConfig } from './risklevel.enum.config';
import { AppliedConditionalAccessPolicyResultConfig } from './appliedconditionalaccesspolicyresult.enum.config';
import { ConditionalAccessStatusConfig } from './conditionalaccessstatus.enum.config';
import { GroupTypeConfig } from './grouptype.enum.config';
import { OperationResultConfig } from './operationresult.enum.config';
import { RiskStateConfig } from './riskstate.enum.config';
import { RiskDetailConfig } from './riskdetail.enum.config';
import { RiskEventTypeConfig } from './riskeventtype.enum.config';
import { PhoneTypeConfig } from './phonetype.enum.config';
import { EducationUserRoleConfig } from './educationuserrole.enum.config';
import { EducationExternalSourceConfig } from './educationexternalsource.enum.config';
import { EducationGenderConfig } from './educationgender.enum.config';
import { AttendeeTypeConfig } from './attendeetype.enum.config';
import { ActivityDomainConfig } from './activitydomain.enum.config';
import { FreeBusyStatusConfig } from './freebusystatus.enum.config';
import { LocationTypeConfig } from './locationtype.enum.config';
import { PhysicalAddressTypeConfig } from './physicaladdresstype.enum.config';
import { LocationUniqueIdTypeConfig } from './locationuniqueidtype.enum.config';
import { BookingTypeConfig } from './bookingtype.enum.config';
import { DayOfWeekConfig } from './dayofweek.enum.config';
import { AutomaticRepliesStatusConfig } from './automaticrepliesstatus.enum.config';
import { ExternalAudienceScopeConfig } from './externalaudiencescope.enum.config';
import { DelegateMeetingMessageDeliveryOptionsConfig } from './delegatemeetingmessagedeliveryoptions.enum.config';
import { MailTipsTypeConfig } from './mailtipstype.enum.config';
import { RecipientScopeTypeConfig } from './recipientscopetype.enum.config';
import { ExchangeIdFormatConfig } from './exchangeidformat.enum.config';
import { TimeZoneStandardConfig } from './timezonestandard.enum.config';
import { BodyTypeConfig } from './bodytype.enum.config';
import { ImportanceConfig } from './importance.enum.config';
import { InferenceClassificationTypeConfig } from './inferenceclassificationtype.enum.config';
import { FollowupFlagStatusConfig } from './followupflagstatus.enum.config';
import { CalendarSharingActionImportanceConfig } from './calendarsharingactionimportance.enum.config';
import { CalendarSharingActionTypeConfig } from './calendarsharingactiontype.enum.config';
import { CalendarSharingActionConfig } from './calendarsharingaction.enum.config';
import { MeetingMessageTypeConfig } from './meetingmessagetype.enum.config';
import { EventTypeConfig } from './eventtype.enum.config';
import { RecurrencePatternTypeConfig } from './recurrencepatterntype.enum.config';
import { WeekIndexConfig } from './weekindex.enum.config';
import { RecurrenceRangeTypeConfig } from './recurrencerangetype.enum.config';
import { MeetingRequestTypeConfig } from './meetingrequesttype.enum.config';
import { ResponseTypeConfig } from './responsetype.enum.config';
import { CalendarColorConfig } from './calendarcolor.enum.config';
import { OnlineMeetingProviderTypeConfig } from './onlinemeetingprovidertype.enum.config';
import { CalendarRoleTypeConfig } from './calendarroletype.enum.config';
import { SensitivityConfig } from './sensitivity.enum.config';
import { SelectionLikelihoodInfoConfig } from './selectionlikelihoodinfo.enum.config';
import { WebsiteTypeConfig } from './websitetype.enum.config';
import { CategoryColorConfig } from './categorycolor.enum.config';
import { AttachmentTypeConfig } from './attachmenttype.enum.config';
import { MessageActionFlagConfig } from './messageactionflag.enum.config';
import { InstallIntentConfig } from './installintent.enum.config';
import { MobileAppPublishingStateConfig } from './mobileapppublishingstate.enum.config';
import { WindowsArchitectureConfig } from './windowsarchitecture.enum.config';
import { ManagedAppAvailabilityConfig } from './managedappavailability.enum.config';
import { MobileAppContentFileUploadStateConfig } from './mobileappcontentfileuploadstate.enum.config';
import { WindowsDeviceTypeConfig } from './windowsdevicetype.enum.config';
import { VppTokenAccountTypeConfig } from './vpptokenaccounttype.enum.config';
import { MicrosoftStoreForBusinessLicenseTypeConfig } from './microsoftstoreforbusinesslicensetype.enum.config';
import { ComplianceStatusConfig } from './compliancestatus.enum.config';
import { MdmAppConfigKeyTypeConfig } from './mdmappconfigkeytype.enum.config';
import { InstallStateConfig } from './installstate.enum.config';
import { Windows10EditionTypeConfig } from './windows10editiontype.enum.config';
import { AppListTypeConfig } from './applisttype.enum.config';
import { AndroidRequiredPasswordTypeConfig } from './androidrequiredpasswordtype.enum.config';
import { WebBrowserCookieSettingsConfig } from './webbrowsercookiesettings.enum.config';
import { AndroidWorkProfileRequiredPasswordTypeConfig } from './androidworkprofilerequiredpasswordtype.enum.config';
import { AndroidWorkProfileCrossProfileDataSharingTypeConfig } from './androidworkprofilecrossprofiledatasharingtype.enum.config';
import { AndroidWorkProfileDefaultAppPermissionPolicyTypeConfig } from './androidworkprofiledefaultapppermissionpolicytype.enum.config';
import { RatingAustraliaMoviesTypeConfig } from './ratingaustraliamoviestype.enum.config';
import { RatingAustraliaTelevisionTypeConfig } from './ratingaustraliatelevisiontype.enum.config';
import { RatingCanadaMoviesTypeConfig } from './ratingcanadamoviestype.enum.config';
import { RatingCanadaTelevisionTypeConfig } from './ratingcanadatelevisiontype.enum.config';
import { RatingFranceMoviesTypeConfig } from './ratingfrancemoviestype.enum.config';
import { RatingFranceTelevisionTypeConfig } from './ratingfrancetelevisiontype.enum.config';
import { RatingGermanyMoviesTypeConfig } from './ratinggermanymoviestype.enum.config';
import { RatingGermanyTelevisionTypeConfig } from './ratinggermanytelevisiontype.enum.config';
import { RatingIrelandMoviesTypeConfig } from './ratingirelandmoviestype.enum.config';
import { RatingIrelandTelevisionTypeConfig } from './ratingirelandtelevisiontype.enum.config';
import { RatingJapanMoviesTypeConfig } from './ratingjapanmoviestype.enum.config';
import { RatingJapanTelevisionTypeConfig } from './ratingjapantelevisiontype.enum.config';
import { RatingNewZealandMoviesTypeConfig } from './ratingnewzealandmoviestype.enum.config';
import { RatingNewZealandTelevisionTypeConfig } from './ratingnewzealandtelevisiontype.enum.config';
import { RatingUnitedKingdomMoviesTypeConfig } from './ratingunitedkingdommoviestype.enum.config';
import { RatingUnitedKingdomTelevisionTypeConfig } from './ratingunitedkingdomtelevisiontype.enum.config';
import { RatingUnitedStatesMoviesTypeConfig } from './ratingunitedstatesmoviestype.enum.config';
import { RatingUnitedStatesTelevisionTypeConfig } from './ratingunitedstatestelevisiontype.enum.config';
import { RatingAppsTypeConfig } from './ratingappstype.enum.config';
import { RequiredPasswordTypeConfig } from './requiredpasswordtype.enum.config';
import { IosNotificationAlertTypeConfig } from './iosnotificationalerttype.enum.config';
import { StateManagementSettingConfig } from './statemanagementsetting.enum.config';
import { FirewallPreSharedKeyEncodingMethodTypeConfig } from './firewallpresharedkeyencodingmethodtype.enum.config';
import { FirewallCertificateRevocationListCheckMethodTypeConfig } from './firewallcertificaterevocationlistcheckmethodtype.enum.config';
import { FirewallPacketQueueingMethodTypeConfig } from './firewallpacketqueueingmethodtype.enum.config';
import { AppLockerApplicationControlTypeConfig } from './applockerapplicationcontroltype.enum.config';
import { ApplicationGuardBlockFileTransferTypeConfig } from './applicationguardblockfiletransfertype.enum.config';
import { ApplicationGuardBlockClipboardSharingTypeConfig } from './applicationguardblockclipboardsharingtype.enum.config';
import { BitLockerEncryptionMethodConfig } from './bitlockerencryptionmethod.enum.config';
import { DefenderCloudBlockLevelTypeConfig } from './defendercloudblockleveltype.enum.config';
import { DefenderScanTypeConfig } from './defenderscantype.enum.config';
import { WeeklyScheduleConfig } from './weeklyschedule.enum.config';
import { DefenderThreatActionConfig } from './defenderthreataction.enum.config';
import { DiagnosticDataSubmissionModeConfig } from './diagnosticdatasubmissionmode.enum.config';
import { EdgeCookiePolicyConfig } from './edgecookiepolicy.enum.config';
import { VisibilitySettingConfig } from './visibilitysetting.enum.config';
import { DefenderMonitorFileActivityConfig } from './defendermonitorfileactivity.enum.config';
import { DefenderPromptForSampleSubmissionConfig } from './defenderpromptforsamplesubmission.enum.config';
import { WindowsStartMenuAppListVisibilityTypeConfig } from './windowsstartmenuapplistvisibilitytype.enum.config';
import { WindowsStartMenuModeTypeConfig } from './windowsstartmenumodetype.enum.config';
import { WindowsSpotlightEnablementSettingsConfig } from './windowsspotlightenablementsettings.enum.config';
import { AutomaticUpdateModeConfig } from './automaticupdatemode.enum.config';
import { SafeSearchFilterTypeConfig } from './safesearchfiltertype.enum.config';
import { EdgeSearchEngineTypeConfig } from './edgesearchenginetype.enum.config';
import { PrereleaseFeaturesConfig } from './prereleasefeatures.enum.config';
import { EditionUpgradeLicenseTypeConfig } from './editionupgradelicensetype.enum.config';
import { WindowsDeliveryOptimizationModeConfig } from './windowsdeliveryoptimizationmode.enum.config';
import { SharedPCAccountDeletionPolicyTypeConfig } from './sharedpcaccountdeletionpolicytype.enum.config';
import { SharedPCAllowedAccountTypeConfig } from './sharedpcallowedaccounttype.enum.config';
import { WindowsUpdateTypeConfig } from './windowsupdatetype.enum.config';
import { InternetSiteSecurityLevelConfig } from './internetsitesecuritylevel.enum.config';
import { SiteSecurityLevelConfig } from './sitesecuritylevel.enum.config';
import { WindowsUserAccountControlSettingsConfig } from './windowsuseraccountcontrolsettings.enum.config';
import { MiracastChannelConfig } from './miracastchannel.enum.config';
import { WelcomeScreenMeetingInformationConfig } from './welcomescreenmeetinginformation.enum.config';
import { DeviceComplianceActionTypeConfig } from './devicecomplianceactiontype.enum.config';
import { DeviceThreatProtectionLevelConfig } from './devicethreatprotectionlevel.enum.config';
import { PolicyPlatformTypeConfig } from './policyplatformtype.enum.config';
import { IosUpdatesInstallStatusConfig } from './iosupdatesinstallstatus.enum.config';
import { DeviceManagementExchangeConnectorSyncTypeConfig } from './devicemanagementexchangeconnectorsynctype.enum.config';
import { MdmAuthorityConfig } from './mdmauthority.enum.config';
import { WindowsHelloForBusinessPinUsageConfig } from './windowshelloforbusinesspinusage.enum.config';
import { EnablementConfig } from './enablement.enum.config';
import { VppTokenStateConfig } from './vpptokenstate.enum.config';
import { VppTokenSyncStatusConfig } from './vpptokensyncstatus.enum.config';
import { DeviceManagementExchangeConnectorStatusConfig } from './devicemanagementexchangeconnectorstatus.enum.config';
import { DeviceManagementExchangeConnectorTypeConfig } from './devicemanagementexchangeconnectortype.enum.config';
import { MobileThreatPartnerTenantStateConfig } from './mobilethreatpartnertenantstate.enum.config';
import { DeviceManagementPartnerTenantStateConfig } from './devicemanagementpartnertenantstate.enum.config';
import { DeviceManagementPartnerAppTypeConfig } from './devicemanagementpartnerapptype.enum.config';
import { ActionStateConfig } from './actionstate.enum.config';
import { ManagedDeviceOwnerTypeConfig } from './manageddeviceownertype.enum.config';
import { ComplianceStateConfig } from './compliancestate.enum.config';
import { ManagementAgentTypeConfig } from './managementagenttype.enum.config';
import { DeviceEnrollmentTypeConfig } from './deviceenrollmenttype.enum.config';
import { DeviceRegistrationStateConfig } from './deviceregistrationstate.enum.config';
import { DeviceManagementExchangeAccessStateConfig } from './devicemanagementexchangeaccessstate.enum.config';
import { DeviceManagementExchangeAccessStateReasonConfig } from './devicemanagementexchangeaccessstatereason.enum.config';
import { ManagedDevicePartnerReportedHealthStateConfig } from './manageddevicepartnerreportedhealthstate.enum.config';
import { DeviceManagementSubscriptionStateConfig } from './devicemanagementsubscriptionstate.enum.config';
import { ManagedAppDataStorageLocationConfig } from './managedappdatastoragelocation.enum.config';
import { ManagedAppDataTransferLevelConfig } from './managedappdatatransferlevel.enum.config';
import { ManagedAppClipboardSharingLevelConfig } from './managedappclipboardsharinglevel.enum.config';
import { ManagedAppPinCharacterSetConfig } from './managedapppincharacterset.enum.config';
import { ManagedBrowserTypeConfig } from './managedbrowsertype.enum.config';
import { ManagedAppDataEncryptionTypeConfig } from './managedappdataencryptiontype.enum.config';
import { WindowsInformationProtectionEnforcementLevelConfig } from './windowsinformationprotectionenforcementlevel.enum.config';
import { WindowsInformationProtectionPinCharacterRequirementsConfig } from './windowsinformationprotectionpincharacterrequirements.enum.config';
import { ManagedAppFlaggedReasonConfig } from './managedappflaggedreason.enum.config';
import { NotificationTemplateBrandingOptionsConfig } from './notificationtemplatebrandingoptions.enum.config';
import { RemoteAssistanceOnboardingStatusConfig } from './remoteassistanceonboardingstatus.enum.config';
import { DeviceEnrollmentFailureReasonConfig } from './deviceenrollmentfailurereason.enum.config';
import { ApplicationTypeConfig } from './applicationtype.enum.config';
import { PlannerPreviewTypeConfig } from './plannerpreviewtype.enum.config';
import { OperationStatusConfig } from './operationstatus.enum.config';
import { OnenotePatchInsertPositionConfig } from './onenotepatchinsertposition.enum.config';
import { OnenotePatchActionTypeConfig } from './onenotepatchactiontype.enum.config';
import { OnenoteSourceServiceConfig } from './onenotesourceservice.enum.config';
import { OnenoteUserRoleConfig } from './onenoteuserrole.enum.config';
import { DataPolicyOperationStatusConfig } from './datapolicyoperationstatus.enum.config';
import { StatusConfig } from './status.enum.config';
import { AlertFeedbackConfig } from './alertfeedback.enum.config';
import { AlertSeverityConfig } from './alertseverity.enum.config';
import { AlertStatusConfig } from './alertstatus.enum.config';
import { ConnectionDirectionConfig } from './connectiondirection.enum.config';
import { ConnectionStatusConfig } from './connectionstatus.enum.config';
import { EmailRoleConfig } from './emailrole.enum.config';
import { FileHashTypeConfig } from './filehashtype.enum.config';
import { LogonTypeConfig } from './logontype.enum.config';
import { ProcessIntegrityLevelConfig } from './processintegritylevel.enum.config';
import { RegistryHiveConfig } from './registryhive.enum.config';
import { RegistryOperationConfig } from './registryoperation.enum.config';
import { RegistryValueTypeConfig } from './registryvaluetype.enum.config';
import { SecurityNetworkProtocolConfig } from './securitynetworkprotocol.enum.config';
import { SecurityResourceTypeConfig } from './securityresourcetype.enum.config';
import { UserAccountSecurityTypeConfig } from './useraccountsecuritytype.enum.config';
import { CallDirectionConfig } from './calldirection.enum.config';
import { CallStateConfig } from './callstate.enum.config';
import { ChangeTypeConfig } from './changetype.enum.config';
import { EndpointTypeConfig } from './endpointtype.enum.config';
import { MediaDirectionConfig } from './mediadirection.enum.config';
import { MediaStateConfig } from './mediastate.enum.config';
import { ModalityConfig } from './modality.enum.config';
import { RecordingStatusConfig } from './recordingstatus.enum.config';
import { RejectReasonConfig } from './rejectreason.enum.config';
import { RoutingTypeConfig } from './routingtype.enum.config';
import { ScreenSharingRoleConfig } from './screensharingrole.enum.config';
import { ToneConfig } from './tone.enum.config';
import { TeamVisibilityTypeConfig } from './teamvisibilitytype.enum.config';
import { ClonableTeamPartsConfig } from './clonableteamparts.enum.config';
import { GiphyRatingTypeConfig } from './giphyratingtype.enum.config';
import { ChatMessageTypeConfig } from './chatmessagetype.enum.config';
import { ChatMessageImportanceConfig } from './chatmessageimportance.enum.config';
import { ChatMessagePolicyViolationDlpActionTypesConfig } from './chatmessagepolicyviolationdlpactiontypes.enum.config';
import { ChatMessagePolicyViolationUserActionTypesConfig } from './chatmessagepolicyviolationuseractiontypes.enum.config';
import { ChatMessagePolicyViolationVerdictDetailsTypesConfig } from './chatmessagepolicyviolationverdictdetailstypes.enum.config';
import { TeamsAppDistributionMethodConfig } from './teamsappdistributionmethod.enum.config';
import { TeamsAsyncOperationTypeConfig } from './teamsasyncoperationtype.enum.config';
import { TeamsAsyncOperationStatusConfig } from './teamsasyncoperationstatus.enum.config';
import { ScheduleEntityThemeConfig } from './scheduleentitytheme.enum.config';
import { TimeOffReasonIconTypeConfig } from './timeoffreasonicontype.enum.config';
import { ScheduleChangeStateConfig } from './schedulechangestate.enum.config';
import { ScheduleChangeRequestActorConfig } from './schedulechangerequestactor.enum.config';
import { WorkforceIntegrationEncryptionProtocolConfig } from './workforceintegrationencryptionprotocol.enum.config';
import { WorkforceIntegrationSupportedEntitiesConfig } from './workforceintegrationsupportedentities.enum.config';
import { ThreatAssessmentContentTypeConfig } from './threatassessmentcontenttype.enum.config';
import { ThreatExpectedAssessmentConfig } from './threatexpectedassessment.enum.config';
import { ThreatCategoryConfig } from './threatcategory.enum.config';
import { ThreatAssessmentStatusConfig } from './threatassessmentstatus.enum.config';
import { ThreatAssessmentRequestSourceConfig } from './threatassessmentrequestsource.enum.config';
import { ThreatAssessmentResultTypeConfig } from './threatassessmentresulttype.enum.config';
import { MailDestinationRoutingReasonConfig } from './maildestinationroutingreason.enum.config';
import { AuditActivityInitiatorComplexConfig } from './auditactivityinitiator.complex.config';
import { UserIdentityComplexConfig } from './useridentity.complex.config';
import { AppIdentityComplexConfig } from './appidentity.complex.config';
import { TargetResourceComplexConfig } from './targetresource.complex.config';
import { ModifiedPropertyComplexConfig } from './modifiedproperty.complex.config';
import { KeyValueComplexConfig } from './keyvalue.complex.config';
import { SignInStatusComplexConfig } from './signinstatus.complex.config';
import { DeviceDetailComplexConfig } from './devicedetail.complex.config';
import { SignInLocationComplexConfig } from './signinlocation.complex.config';
import { GeoCoordinatesComplexConfig } from './geocoordinates.complex.config';
import { AppliedConditionalAccessPolicyComplexConfig } from './appliedconditionalaccesspolicy.complex.config';
import { InvitedUserMessageInfoComplexConfig } from './invitedusermessageinfo.complex.config';
import { RecipientComplexConfig } from './recipient.complex.config';
import { EmailAddressComplexConfig } from './emailaddress.complex.config';
import { AssignedLicenseComplexConfig } from './assignedlicense.complex.config';
import { AssignedPlanComplexConfig } from './assignedplan.complex.config';
import { ObjectIdentityComplexConfig } from './objectidentity.complex.config';
import { LicenseAssignmentStateComplexConfig } from './licenseassignmentstate.complex.config';
import { OnPremisesExtensionAttributesComplexConfig } from './onpremisesextensionattributes.complex.config';
import { OnPremisesProvisioningErrorComplexConfig } from './onpremisesprovisioningerror.complex.config';
import { PasswordProfileComplexConfig } from './passwordprofile.complex.config';
import { ProvisionedPlanComplexConfig } from './provisionedplan.complex.config';
import { MailboxSettingsComplexConfig } from './mailboxsettings.complex.config';
import { AutomaticRepliesSettingComplexConfig } from './automaticrepliessetting.complex.config';
import { DateTimeTimeZoneComplexConfig } from './datetimetimezone.complex.config';
import { LocaleInfoComplexConfig } from './localeinfo.complex.config';
import { WorkingHoursComplexConfig } from './workinghours.complex.config';
import { TimeZoneBaseComplexConfig } from './timezonebase.complex.config';
import { AddInComplexConfig } from './addin.complex.config';
import { ApiApplicationComplexConfig } from './apiapplication.complex.config';
import { PreAuthorizedApplicationComplexConfig } from './preauthorizedapplication.complex.config';
import { PermissionScopeComplexConfig } from './permissionscope.complex.config';
import { AppRoleComplexConfig } from './approle.complex.config';
import { PublicClientApplicationComplexConfig } from './publicclientapplication.complex.config';
import { InformationalUrlComplexConfig } from './informationalurl.complex.config';
import { KeyCredentialComplexConfig } from './keycredential.complex.config';
import { OptionalClaimsComplexConfig } from './optionalclaims.complex.config';
import { OptionalClaimComplexConfig } from './optionalclaim.complex.config';
import { ParentalControlSettingsComplexConfig } from './parentalcontrolsettings.complex.config';
import { PasswordCredentialComplexConfig } from './passwordcredential.complex.config';
import { RequiredResourceAccessComplexConfig } from './requiredresourceaccess.complex.config';
import { ResourceAccessComplexConfig } from './resourceaccess.complex.config';
import { WebApplicationComplexConfig } from './webapplication.complex.config';
import { ImplicitGrantSettingsComplexConfig } from './implicitgrantsettings.complex.config';
import { CertificateAuthorityComplexConfig } from './certificateauthority.complex.config';
import { PhysicalOfficeAddressComplexConfig } from './physicalofficeaddress.complex.config';
import { PhoneComplexConfig } from './phone.complex.config';
import { AlternativeSecurityIdComplexConfig } from './alternativesecurityid.complex.config';
import { DomainStateComplexConfig } from './domainstate.complex.config';
import { ServicePlanInfoComplexConfig } from './serviceplaninfo.complex.config';
import { AssignedLabelComplexConfig } from './assignedlabel.complex.config';
import { LicenseProcessingStateComplexConfig } from './licenseprocessingstate.complex.config';
import { SamlSingleSignOnSettingsComplexConfig } from './samlsinglesignonsettings.complex.config';
import { LicenseUnitsDetailComplexConfig } from './licenseunitsdetail.complex.config';
import { PrivacyProfileComplexConfig } from './privacyprofile.complex.config';
import { VerifiedDomainComplexConfig } from './verifieddomain.complex.config';
import { SettingValueComplexConfig } from './settingvalue.complex.config';
import { SettingTemplateValueComplexConfig } from './settingtemplatevalue.complex.config';
import { ComplexExtensionValueComplexConfig } from './complexextensionvalue.complex.config';
import { PhysicalAddressComplexConfig } from './physicaladdress.complex.config';
import { IdentityComplexConfig } from './identity.complex.config';
import { IdentitySetComplexConfig } from './identityset.complex.config';
import { EducationStudentComplexConfig } from './educationstudent.complex.config';
import { EducationTeacherComplexConfig } from './educationteacher.complex.config';
import { EducationTermComplexConfig } from './educationterm.complex.config';
import { PublicErrorComplexConfig } from './publicerror.complex.config';
import { PublicErrorDetailComplexConfig } from './publicerrordetail.complex.config';
import { PublicInnerErrorComplexConfig } from './publicinnererror.complex.config';
import { RootComplexConfig } from './root.complex.config';
import { SharepointIdsComplexConfig } from './sharepointids.complex.config';
import { SiteCollectionComplexConfig } from './sitecollection.complex.config';
import { ListInfoComplexConfig } from './listinfo.complex.config';
import { SystemFacetComplexConfig } from './systemfacet.complex.config';
import { QuotaComplexConfig } from './quota.complex.config';
import { AudioComplexConfig } from './audio.complex.config';
import { DeletedComplexConfig } from './deleted.complex.config';
import { FileComplexConfig } from './file.complex.config';
import { HashesComplexConfig } from './hashes.complex.config';
import { FileSystemInfoComplexConfig } from './filesysteminfo.complex.config';
import { FolderComplexConfig } from './folder.complex.config';
import { FolderViewComplexConfig } from './folderview.complex.config';
import { ImageComplexConfig } from './image.complex.config';
import { PackageComplexConfig } from './package.complex.config';
import { PhotoComplexConfig } from './photo.complex.config';
import { PublicationFacetComplexConfig } from './publicationfacet.complex.config';
import { RemoteItemComplexConfig } from './remoteitem.complex.config';
import { ItemReferenceComplexConfig } from './itemreference.complex.config';
import { SharedComplexConfig } from './shared.complex.config';
import { SpecialFolderComplexConfig } from './specialfolder.complex.config';
import { VideoComplexConfig } from './video.complex.config';
import { SearchResultComplexConfig } from './searchresult.complex.config';
import { WorkbookSessionInfoComplexConfig } from './workbooksessioninfo.complex.config';
import { JsonComplexConfig } from './json.complex.config';
import { WorkbookFilterCriteriaComplexConfig } from './workbookfiltercriteria.complex.config';
import { WorkbookIconComplexConfig } from './workbookicon.complex.config';
import { WorkbookSortFieldComplexConfig } from './workbooksortfield.complex.config';
import { WorkbookWorksheetProtectionOptionsComplexConfig } from './workbookworksheetprotectionoptions.complex.config';
import { WorkbookFilterDatetimeComplexConfig } from './workbookfilterdatetime.complex.config';
import { WorkbookRangeReferenceComplexConfig } from './workbookrangereference.complex.config';
import { AttendeeBaseComplexConfig } from './attendeebase.complex.config';
import { LocationConstraintComplexConfig } from './locationconstraint.complex.config';
import { LocationComplexConfig } from './location.complex.config';
import { OutlookGeoCoordinatesComplexConfig } from './outlookgeocoordinates.complex.config';
import { LocationConstraintItemComplexConfig } from './locationconstraintitem.complex.config';
import { MeetingTimeSuggestionsResultComplexConfig } from './meetingtimesuggestionsresult.complex.config';
import { MeetingTimeSuggestionComplexConfig } from './meetingtimesuggestion.complex.config';
import { AttendeeAvailabilityComplexConfig } from './attendeeavailability.complex.config';
import { TimeSlotComplexConfig } from './timeslot.complex.config';
import { TimeConstraintComplexConfig } from './timeconstraint.complex.config';
import { CustomTimeZoneComplexConfig } from './customtimezone.complex.config';
import { StandardTimeZoneOffsetComplexConfig } from './standardtimezoneoffset.complex.config';
import { DaylightTimeZoneOffsetComplexConfig } from './daylighttimezoneoffset.complex.config';
import { ReminderComplexConfig } from './reminder.complex.config';
import { MailTipsComplexConfig } from './mailtips.complex.config';
import { AutomaticRepliesMailTipsComplexConfig } from './automaticrepliesmailtips.complex.config';
import { MailTipsErrorComplexConfig } from './mailtipserror.complex.config';
import { ConvertIdResultComplexConfig } from './convertidresult.complex.config';
import { GenericErrorComplexConfig } from './genericerror.complex.config';
import { TimeZoneInformationComplexConfig } from './timezoneinformation.complex.config';
import { InternetMessageHeaderComplexConfig } from './internetmessageheader.complex.config';
import { ItemBodyComplexConfig } from './itembody.complex.config';
import { FollowupFlagComplexConfig } from './followupflag.complex.config';
import { CalendarSharingMessageActionComplexConfig } from './calendarsharingmessageaction.complex.config';
import { PatternedRecurrenceComplexConfig } from './patternedrecurrence.complex.config';
import { RecurrencePatternComplexConfig } from './recurrencepattern.complex.config';
import { RecurrenceRangeComplexConfig } from './recurrencerange.complex.config';
import { ScheduleInformationComplexConfig } from './scheduleinformation.complex.config';
import { ScheduleItemComplexConfig } from './scheduleitem.complex.config';
import { FreeBusyErrorComplexConfig } from './freebusyerror.complex.config';
import { ResponseStatusComplexConfig } from './responsestatus.complex.config';
import { AttendeeComplexConfig } from './attendee.complex.config';
import { OnlineMeetingInfoComplexConfig } from './onlinemeetinginfo.complex.config';
import { ScoredEmailAddressComplexConfig } from './scoredemailaddress.complex.config';
import { WebsiteComplexConfig } from './website.complex.config';
import { PersonTypeComplexConfig } from './persontype.complex.config';
import { AttachmentItemComplexConfig } from './attachmentitem.complex.config';
import { UploadSessionComplexConfig } from './uploadsession.complex.config';
import { MessageRulePredicatesComplexConfig } from './messagerulepredicates.complex.config';
import { SizeRangeComplexConfig } from './sizerange.complex.config';
import { MessageRuleActionsComplexConfig } from './messageruleactions.complex.config';
import { BooleanColumnComplexConfig } from './booleancolumn.complex.config';
import { CalculatedColumnComplexConfig } from './calculatedcolumn.complex.config';
import { ChoiceColumnComplexConfig } from './choicecolumn.complex.config';
import { CurrencyColumnComplexConfig } from './currencycolumn.complex.config';
import { DateTimeColumnComplexConfig } from './datetimecolumn.complex.config';
import { DefaultColumnValueComplexConfig } from './defaultcolumnvalue.complex.config';
import { LookupColumnComplexConfig } from './lookupcolumn.complex.config';
import { NumberColumnComplexConfig } from './numbercolumn.complex.config';
import { PersonOrGroupColumnComplexConfig } from './personorgroupcolumn.complex.config';
import { TextColumnComplexConfig } from './textcolumn.complex.config';
import { ContentTypeOrderComplexConfig } from './contenttypeorder.complex.config';
import { AccessActionComplexConfig } from './accessaction.complex.config';
import { ItemActionStatComplexConfig } from './itemactionstat.complex.config';
import { IncompleteDataComplexConfig } from './incompletedata.complex.config';
import { ContentTypeInfoComplexConfig } from './contenttypeinfo.complex.config';
import { SharingInvitationComplexConfig } from './sharinginvitation.complex.config';
import { SharingLinkComplexConfig } from './sharinglink.complex.config';
import { ThumbnailComplexConfig } from './thumbnail.complex.config';
import { DriveItemUploadablePropertiesComplexConfig } from './driveitemuploadableproperties.complex.config';
import { DriveRecipientComplexConfig } from './driverecipient.complex.config';
import { ItemPreviewInfoComplexConfig } from './itempreviewinfo.complex.config';
import { ExtensionSchemaPropertyComplexConfig } from './extensionschemaproperty.complex.config';
import { DeviceAndAppManagementAssignmentTargetComplexConfig } from './deviceandappmanagementassignmenttarget.complex.config';
import { MobileAppAssignmentSettingsComplexConfig } from './mobileappassignmentsettings.complex.config';
import { MimeContentComplexConfig } from './mimecontent.complex.config';
import { FileEncryptionInfoComplexConfig } from './fileencryptioninfo.complex.config';
import { AllLicensedUsersAssignmentTargetComplexConfig } from './alllicensedusersassignmenttarget.complex.config';
import { GroupAssignmentTargetComplexConfig } from './groupassignmenttarget.complex.config';
import { ExclusionGroupAssignmentTargetComplexConfig } from './exclusiongroupassignmenttarget.complex.config';
import { AllDevicesAssignmentTargetComplexConfig } from './alldevicesassignmenttarget.complex.config';
import { IosLobAppAssignmentSettingsComplexConfig } from './ioslobappassignmentsettings.complex.config';
import { IosStoreAppAssignmentSettingsComplexConfig } from './iosstoreappassignmentsettings.complex.config';
import { IosVppAppAssignmentSettingsComplexConfig } from './iosvppappassignmentsettings.complex.config';
import { MicrosoftStoreForBusinessAppAssignmentSettingsComplexConfig } from './microsoftstoreforbusinessappassignmentsettings.complex.config';
import { AndroidMinimumOperatingSystemComplexConfig } from './androidminimumoperatingsystem.complex.config';
import { IosDeviceTypeComplexConfig } from './iosdevicetype.complex.config';
import { IosMinimumOperatingSystemComplexConfig } from './iosminimumoperatingsystem.complex.config';
import { WindowsMinimumOperatingSystemComplexConfig } from './windowsminimumoperatingsystem.complex.config';
import { VppLicensingTypeComplexConfig } from './vpplicensingtype.complex.config';
import { AppConfigurationSettingItemComplexConfig } from './appconfigurationsettingitem.complex.config';
import { DeviceManagementSettingsComplexConfig } from './devicemanagementsettings.complex.config';
import { IntuneBrandComplexConfig } from './intunebrand.complex.config';
import { RgbColorComplexConfig } from './rgbcolor.complex.config';
import { ReportComplexConfig } from './report.complex.config';
import { AppListItemComplexConfig } from './applistitem.complex.config';
import { OmaSettingComplexConfig } from './omasetting.complex.config';
import { OmaSettingIntegerComplexConfig } from './omasettinginteger.complex.config';
import { OmaSettingFloatingPointComplexConfig } from './omasettingfloatingpoint.complex.config';
import { OmaSettingStringComplexConfig } from './omasettingstring.complex.config';
import { OmaSettingDateTimeComplexConfig } from './omasettingdatetime.complex.config';
import { OmaSettingStringXmlComplexConfig } from './omasettingstringxml.complex.config';
import { OmaSettingBooleanComplexConfig } from './omasettingboolean.complex.config';
import { OmaSettingBase64ComplexConfig } from './omasettingbase64.complex.config';
import { MediaContentRatingAustraliaComplexConfig } from './mediacontentratingaustralia.complex.config';
import { MediaContentRatingCanadaComplexConfig } from './mediacontentratingcanada.complex.config';
import { MediaContentRatingFranceComplexConfig } from './mediacontentratingfrance.complex.config';
import { MediaContentRatingGermanyComplexConfig } from './mediacontentratinggermany.complex.config';
import { MediaContentRatingIrelandComplexConfig } from './mediacontentratingireland.complex.config';
import { MediaContentRatingJapanComplexConfig } from './mediacontentratingjapan.complex.config';
import { MediaContentRatingNewZealandComplexConfig } from './mediacontentratingnewzealand.complex.config';
import { MediaContentRatingUnitedKingdomComplexConfig } from './mediacontentratingunitedkingdom.complex.config';
import { MediaContentRatingUnitedStatesComplexConfig } from './mediacontentratingunitedstates.complex.config';
import { IosNetworkUsageRuleComplexConfig } from './iosnetworkusagerule.complex.config';
import { IosHomeScreenItemComplexConfig } from './ioshomescreenitem.complex.config';
import { IosHomeScreenPageComplexConfig } from './ioshomescreenpage.complex.config';
import { IosNotificationSettingsComplexConfig } from './iosnotificationsettings.complex.config';
import { IosHomeScreenFolderComplexConfig } from './ioshomescreenfolder.complex.config';
import { IosHomeScreenFolderPageComplexConfig } from './ioshomescreenfolderpage.complex.config';
import { IosHomeScreenAppComplexConfig } from './ioshomescreenapp.complex.config';
import { WindowsFirewallNetworkProfileComplexConfig } from './windowsfirewallnetworkprofile.complex.config';
import { BitLockerRemovableDrivePolicyComplexConfig } from './bitlockerremovabledrivepolicy.complex.config';
import { DefenderDetectedMalwareActionsComplexConfig } from './defenderdetectedmalwareactions.complex.config';
import { Windows10NetworkProxyServerComplexConfig } from './windows10networkproxyserver.complex.config';
import { EdgeSearchEngineBaseComplexConfig } from './edgesearchenginebase.complex.config';
import { EdgeSearchEngineCustomComplexConfig } from './edgesearchenginecustom.complex.config';
import { EdgeSearchEngineComplexConfig } from './edgesearchengine.complex.config';
import { SharedPCAccountManagerPolicyComplexConfig } from './sharedpcaccountmanagerpolicy.complex.config';
import { WindowsUpdateInstallScheduleTypeComplexConfig } from './windowsupdateinstallscheduletype.complex.config';
import { WindowsUpdateScheduledInstallComplexConfig } from './windowsupdatescheduledinstall.complex.config';
import { WindowsUpdateActiveHoursInstallComplexConfig } from './windowsupdateactivehoursinstall.complex.config';
import { DeviceActionResultComplexConfig } from './deviceactionresult.complex.config';
import { ConfigurationManagerClientEnabledFeaturesComplexConfig } from './configurationmanagerclientenabledfeatures.complex.config';
import { DeviceHealthAttestationStateComplexConfig } from './devicehealthattestationstate.complex.config';
import { DeviceConfigurationSettingStateComplexConfig } from './deviceconfigurationsettingstate.complex.config';
import { SettingSourceComplexConfig } from './settingsource.complex.config';
import { DeviceCompliancePolicySettingStateComplexConfig } from './devicecompliancepolicysettingstate.complex.config';
import { DeviceEnrollmentPlatformRestrictionComplexConfig } from './deviceenrollmentplatformrestriction.complex.config';
import { UpdateWindowsDeviceAccountActionParameterComplexConfig } from './updatewindowsdeviceaccountactionparameter.complex.config';
import { WindowsDeviceAccountComplexConfig } from './windowsdeviceaccount.complex.config';
import { WindowsDefenderScanActionResultComplexConfig } from './windowsdefenderscanactionresult.complex.config';
import { DeviceGeoLocationComplexConfig } from './devicegeolocation.complex.config';
import { DeleteUserFromSharedAppleDeviceActionResultComplexConfig } from './deleteuserfromsharedappledeviceactionresult.complex.config';
import { LocateDeviceActionResultComplexConfig } from './locatedeviceactionresult.complex.config';
import { RemoteLockActionResultComplexConfig } from './remotelockactionresult.complex.config';
import { ResetPasscodeActionResultComplexConfig } from './resetpasscodeactionresult.complex.config';
import { DeviceOperatingSystemSummaryComplexConfig } from './deviceoperatingsystemsummary.complex.config';
import { DeviceExchangeAccessStateSummaryComplexConfig } from './deviceexchangeaccessstatesummary.complex.config';
import { WindowsDeviceADAccountComplexConfig } from './windowsdeviceadaccount.complex.config';
import { WindowsDeviceAzureADAccountComplexConfig } from './windowsdeviceazureadaccount.complex.config';
import { MobileAppIdentifierComplexConfig } from './mobileappidentifier.complex.config';
import { ManagedAppDiagnosticStatusComplexConfig } from './managedappdiagnosticstatus.complex.config';
import { KeyValuePairComplexConfig } from './keyvaluepair.complex.config';
import { WindowsInformationProtectionResourceCollectionComplexConfig } from './windowsinformationprotectionresourcecollection.complex.config';
import { WindowsInformationProtectionDataRecoveryCertificateComplexConfig } from './windowsinformationprotectiondatarecoverycertificate.complex.config';
import { WindowsInformationProtectionAppComplexConfig } from './windowsinformationprotectionapp.complex.config';
import { WindowsInformationProtectionProxiedDomainCollectionComplexConfig } from './windowsinformationprotectionproxieddomaincollection.complex.config';
import { ProxiedDomainComplexConfig } from './proxieddomain.complex.config';
import { WindowsInformationProtectionIPRangeCollectionComplexConfig } from './windowsinformationprotectioniprangecollection.complex.config';
import { IpRangeComplexConfig } from './iprange.complex.config';
import { AndroidMobileAppIdentifierComplexConfig } from './androidmobileappidentifier.complex.config';
import { IosMobileAppIdentifierComplexConfig } from './iosmobileappidentifier.complex.config';
import { ManagedAppPolicyDeploymentSummaryPerAppComplexConfig } from './managedapppolicydeploymentsummaryperapp.complex.config';
import { WindowsInformationProtectionStoreAppComplexConfig } from './windowsinformationprotectionstoreapp.complex.config';
import { WindowsInformationProtectionDesktopAppComplexConfig } from './windowsinformationprotectiondesktopapp.complex.config';
import { IPv6RangeComplexConfig } from './ipv6range.complex.config';
import { IPv4RangeComplexConfig } from './ipv4range.complex.config';
import { RolePermissionComplexConfig } from './rolepermission.complex.config';
import { ResourceActionComplexConfig } from './resourceaction.complex.config';
import { PlannerAppliedCategoriesComplexConfig } from './plannerappliedcategories.complex.config';
import { PlannerAssignmentsComplexConfig } from './plannerassignments.complex.config';
import { PlannerExternalReferenceComplexConfig } from './plannerexternalreference.complex.config';
import { PlannerChecklistItemComplexConfig } from './plannerchecklistitem.complex.config';
import { PlannerAssignmentComplexConfig } from './plannerassignment.complex.config';
import { PlannerExternalReferencesComplexConfig } from './plannerexternalreferences.complex.config';
import { PlannerChecklistItemsComplexConfig } from './plannerchecklistitems.complex.config';
import { PlannerOrderHintsByAssigneeComplexConfig } from './plannerorderhintsbyassignee.complex.config';
import { PlannerUserIdsComplexConfig } from './planneruserids.complex.config';
import { PlannerCategoryDescriptionsComplexConfig } from './plannercategorydescriptions.complex.config';
import { ResourceVisualizationComplexConfig } from './resourcevisualization.complex.config';
import { ResourceReferenceComplexConfig } from './resourcereference.complex.config';
import { SharingDetailComplexConfig } from './sharingdetail.complex.config';
import { InsightIdentityComplexConfig } from './insightidentity.complex.config';
import { UsageDetailsComplexConfig } from './usagedetails.complex.config';
import { NotebookLinksComplexConfig } from './notebooklinks.complex.config';
import { ExternalLinkComplexConfig } from './externallink.complex.config';
import { SectionLinksComplexConfig } from './sectionlinks.complex.config';
import { PageLinksComplexConfig } from './pagelinks.complex.config';
import { OnenoteOperationErrorComplexConfig } from './onenoteoperationerror.complex.config';
import { DiagnosticComplexConfig } from './diagnostic.complex.config';
import { OnenotePatchContentCommandComplexConfig } from './onenotepatchcontentcommand.complex.config';
import { OnenotePagePreviewComplexConfig } from './onenotepagepreview.complex.config';
import { OnenotePagePreviewLinksComplexConfig } from './onenotepagepreviewlinks.complex.config';
import { RecentNotebookComplexConfig } from './recentnotebook.complex.config';
import { RecentNotebookLinksComplexConfig } from './recentnotebooklinks.complex.config';
import { CopyNotebookModelComplexConfig } from './copynotebookmodel.complex.config';
import { ImageInfoComplexConfig } from './imageinfo.complex.config';
import { VisualInfoComplexConfig } from './visualinfo.complex.config';
import { CloudAppSecurityStateComplexConfig } from './cloudappsecuritystate.complex.config';
import { FileSecurityStateComplexConfig } from './filesecuritystate.complex.config';
import { FileHashComplexConfig } from './filehash.complex.config';
import { AlertHistoryStateComplexConfig } from './alerthistorystate.complex.config';
import { HostSecurityStateComplexConfig } from './hostsecuritystate.complex.config';
import { MalwareStateComplexConfig } from './malwarestate.complex.config';
import { NetworkConnectionComplexConfig } from './networkconnection.complex.config';
import { ProcessComplexConfig } from './process.complex.config';
import { RegistryKeyStateComplexConfig } from './registrykeystate.complex.config';
import { SecurityResourceComplexConfig } from './securityresource.complex.config';
import { AlertTriggerComplexConfig } from './alerttrigger.complex.config';
import { UserSecurityStateComplexConfig } from './usersecuritystate.complex.config';
import { SecurityVendorInformationComplexConfig } from './securityvendorinformation.complex.config';
import { VulnerabilityStateComplexConfig } from './vulnerabilitystate.complex.config';
import { AverageComparativeScoreComplexConfig } from './averagecomparativescore.complex.config';
import { ControlScoreComplexConfig } from './controlscore.complex.config';
import { ComplianceInformationComplexConfig } from './complianceinformation.complex.config';
import { CertificationControlComplexConfig } from './certificationcontrol.complex.config';
import { SecureScoreControlStateUpdateComplexConfig } from './securescorecontrolstateupdate.complex.config';
import { CallMediaStateComplexConfig } from './callmediastate.complex.config';
import { ResultInfoComplexConfig } from './resultinfo.complex.config';
import { CallRouteComplexConfig } from './callroute.complex.config';
import { ParticipantInfoComplexConfig } from './participantinfo.complex.config';
import { InvitationParticipantInfoComplexConfig } from './invitationparticipantinfo.complex.config';
import { MediaConfigComplexConfig } from './mediaconfig.complex.config';
import { ChatInfoComplexConfig } from './chatinfo.complex.config';
import { CallOptionsComplexConfig } from './calloptions.complex.config';
import { MeetingInfoComplexConfig } from './meetinginfo.complex.config';
import { ToneInfoComplexConfig } from './toneinfo.complex.config';
import { IncomingContextComplexConfig } from './incomingcontext.complex.config';
import { MeetingParticipantsComplexConfig } from './meetingparticipants.complex.config';
import { MeetingParticipantInfoComplexConfig } from './meetingparticipantinfo.complex.config';
import { AudioConferencingComplexConfig } from './audioconferencing.complex.config';
import { RecordingInfoComplexConfig } from './recordinginfo.complex.config';
import { MediaStreamComplexConfig } from './mediastream.complex.config';
import { OutgoingCallOptionsComplexConfig } from './outgoingcalloptions.complex.config';
import { CommsNotificationComplexConfig } from './commsnotification.complex.config';
import { CommsNotificationsComplexConfig } from './commsnotifications.complex.config';
import { AppHostedMediaConfigComplexConfig } from './apphostedmediaconfig.complex.config';
import { ServiceHostedMediaConfigComplexConfig } from './servicehostedmediaconfig.complex.config';
import { MediaInfoComplexConfig } from './mediainfo.complex.config';
import { OrganizerMeetingInfoComplexConfig } from './organizermeetinginfo.complex.config';
import { TokenMeetingInfoComplexConfig } from './tokenmeetinginfo.complex.config';
import { PromptComplexConfig } from './prompt.complex.config';
import { MediaPromptComplexConfig } from './mediaprompt.complex.config';
import { TeleconferenceDeviceMediaQualityComplexConfig } from './teleconferencedevicemediaquality.complex.config';
import { TeleconferenceDeviceAudioQualityComplexConfig } from './teleconferencedeviceaudioquality.complex.config';
import { TeleconferenceDeviceVideoQualityComplexConfig } from './teleconferencedevicevideoquality.complex.config';
import { TeleconferenceDeviceScreenSharingQualityComplexConfig } from './teleconferencedevicescreensharingquality.complex.config';
import { TeleconferenceDeviceQualityComplexConfig } from './teleconferencedevicequality.complex.config';
import { TeamClassSettingsComplexConfig } from './teamclasssettings.complex.config';
import { ChatMessageAttachmentComplexConfig } from './chatmessageattachment.complex.config';
import { ChatMessageMentionComplexConfig } from './chatmessagemention.complex.config';
import { TeamsTabConfigurationComplexConfig } from './teamstabconfiguration.complex.config';
import { TeamMemberSettingsComplexConfig } from './teammembersettings.complex.config';
import { TeamGuestSettingsComplexConfig } from './teamguestsettings.complex.config';
import { TeamMessagingSettingsComplexConfig } from './teammessagingsettings.complex.config';
import { TeamFunSettingsComplexConfig } from './teamfunsettings.complex.config';
import { ChatMessagePolicyViolationComplexConfig } from './chatmessagepolicyviolation.complex.config';
import { ChatMessagePolicyViolationPolicyTipComplexConfig } from './chatmessagepolicyviolationpolicytip.complex.config';
import { ChatMessageReactionComplexConfig } from './chatmessagereaction.complex.config';
import { OperationErrorComplexConfig } from './operationerror.complex.config';
import { WorkforceIntegrationEncryptionComplexConfig } from './workforceintegrationencryption.complex.config';
import { ScheduleEntityComplexConfig } from './scheduleentity.complex.config';
import { ShiftActivityComplexConfig } from './shiftactivity.complex.config';
import { ShiftItemComplexConfig } from './shiftitem.complex.config';
import { OpenShiftItemComplexConfig } from './openshiftitem.complex.config';
import { TimeOffItemComplexConfig } from './timeoffitem.complex.config';
import { ShiftAvailabilityComplexConfig } from './shiftavailability.complex.config';
import { TimeRangeComplexConfig } from './timerange.complex.config';
import { EntityEntityConfig } from './entity.entity.config';
import { DirectoryAuditEntityConfig } from './directoryaudit.entity.config';
import { SignInEntityConfig } from './signin.entity.config';
import { RestrictedSignInEntityConfig } from './restrictedsignin.entity.config';
import { AuditLogRootEntityConfig } from './auditlogroot.entity.config';
import { InvitationEntityConfig } from './invitation.entity.config';
import { DirectoryObjectEntityConfig } from './directoryobject.entity.config';
import { UserEntityConfig } from './user.entity.config';
import { AppRoleAssignmentEntityConfig } from './approleassignment.entity.config';
import { OAuth2PermissionGrantEntityConfig } from './oauth2permissiongrant.entity.config';
import { LicenseDetailsEntityConfig } from './licensedetails.entity.config';
import { OutlookUserEntityConfig } from './outlookuser.entity.config';
import { OutlookItemEntityConfig } from './outlookitem.entity.config';
import { MessageEntityConfig } from './message.entity.config';
import { MailFolderEntityConfig } from './mailfolder.entity.config';
import { CalendarEntityConfig } from './calendar.entity.config';
import { CalendarGroupEntityConfig } from './calendargroup.entity.config';
import { EventEntityConfig } from './event.entity.config';
import { PersonEntityConfig } from './person.entity.config';
import { ContactEntityConfig } from './contact.entity.config';
import { ContactFolderEntityConfig } from './contactfolder.entity.config';
import { InferenceClassificationEntityConfig } from './inferenceclassification.entity.config';
import { ProfilePhotoEntityConfig } from './profilephoto.entity.config';
import { BaseItemEntityConfig } from './baseitem.entity.config';
import { DriveEntityConfig } from './drive.entity.config';
import { SiteEntityConfig } from './site.entity.config';
import { ExtensionEntityConfig } from './extension.entity.config';
import { ManagedDeviceEntityConfig } from './manageddevice.entity.config';
import { ManagedAppRegistrationEntityConfig } from './managedappregistration.entity.config';
import { DeviceManagementTroubleshootingEventEntityConfig } from './devicemanagementtroubleshootingevent.entity.config';
import { PlannerUserEntityConfig } from './planneruser.entity.config';
import { OfficeGraphInsightsEntityConfig } from './officegraphinsights.entity.config';
import { UserSettingsEntityConfig } from './usersettings.entity.config';
import { OnenoteEntityConfig } from './onenote.entity.config';
import { UserActivityEntityConfig } from './useractivity.entity.config';
import { OnlineMeetingEntityConfig } from './onlinemeeting.entity.config';
import { TeamEntityConfig } from './team.entity.config';
import { IdentityProviderEntityConfig } from './identityprovider.entity.config';
import { AdministrativeUnitEntityConfig } from './administrativeunit.entity.config';
import { ApplicationEntityConfig } from './application.entity.config';
import { ExtensionPropertyEntityConfig } from './extensionproperty.entity.config';
import { PolicyBaseEntityConfig } from './policybase.entity.config';
import { StsPolicyEntityConfig } from './stspolicy.entity.config';
import { TokenLifetimePolicyEntityConfig } from './tokenlifetimepolicy.entity.config';
import { TokenIssuancePolicyEntityConfig } from './tokenissuancepolicy.entity.config';
import { DirectoryEntityConfig } from './directory.entity.config';
import { CertificateBasedAuthConfigurationEntityConfig } from './certificatebasedauthconfiguration.entity.config';
import { OrgContactEntityConfig } from './orgcontact.entity.config';
import { DeviceEntityConfig } from './device.entity.config';
import { DirectoryObjectPartnerReferenceEntityConfig } from './directoryobjectpartnerreference.entity.config';
import { DirectoryRoleEntityConfig } from './directoryrole.entity.config';
import { DirectoryRoleTemplateEntityConfig } from './directoryroletemplate.entity.config';
import { DomainEntityConfig } from './domain.entity.config';
import { DomainDnsRecordEntityConfig } from './domaindnsrecord.entity.config';
import { DomainDnsCnameRecordEntityConfig } from './domaindnscnamerecord.entity.config';
import { DomainDnsMxRecordEntityConfig } from './domaindnsmxrecord.entity.config';
import { DomainDnsSrvRecordEntityConfig } from './domaindnssrvrecord.entity.config';
import { DomainDnsTxtRecordEntityConfig } from './domaindnstxtrecord.entity.config';
import { DomainDnsUnavailableRecordEntityConfig } from './domaindnsunavailablerecord.entity.config';
import { EndpointEntityConfig } from './endpoint.entity.config';
import { GroupEntityConfig } from './group.entity.config';
import { GroupSettingEntityConfig } from './groupsetting.entity.config';
import { ConversationEntityConfig } from './conversation.entity.config';
import { ConversationThreadEntityConfig } from './conversationthread.entity.config';
import { GroupLifecyclePolicyEntityConfig } from './grouplifecyclepolicy.entity.config';
import { PlannerGroupEntityConfig } from './plannergroup.entity.config';
import { PolicyRootEntityConfig } from './policyroot.entity.config';
import { ActivityBasedTimeoutPolicyEntityConfig } from './activitybasedtimeoutpolicy.entity.config';
import { ClaimsMappingPolicyEntityConfig } from './claimsmappingpolicy.entity.config';
import { HomeRealmDiscoveryPolicyEntityConfig } from './homerealmdiscoverypolicy.entity.config';
import { ContractEntityConfig } from './contract.entity.config';
import { ServicePrincipalEntityConfig } from './serviceprincipal.entity.config';
import { SubscribedSkuEntityConfig } from './subscribedsku.entity.config';
import { OrganizationEntityConfig } from './organization.entity.config';
import { GroupSettingTemplateEntityConfig } from './groupsettingtemplate.entity.config';
import { EducationRootEntityConfig } from './educationroot.entity.config';
import { EducationClassEntityConfig } from './educationclass.entity.config';
import { EducationOrganizationEntityConfig } from './educationorganization.entity.config';
import { EducationSchoolEntityConfig } from './educationschool.entity.config';
import { EducationUserEntityConfig } from './educationuser.entity.config';
import { ItemAnalyticsEntityConfig } from './itemanalytics.entity.config';
import { ColumnDefinitionEntityConfig } from './columndefinition.entity.config';
import { ContentTypeEntityConfig } from './contenttype.entity.config';
import { ListEntityConfig } from './list.entity.config';
import { ListItemEntityConfig } from './listitem.entity.config';
import { SubscriptionEntityConfig } from './subscription.entity.config';
import { DriveItemEntityConfig } from './driveitem.entity.config';
import { WorkbookEntityConfig } from './workbook.entity.config';
import { PermissionEntityConfig } from './permission.entity.config';
import { ThumbnailSetEntityConfig } from './thumbnailset.entity.config';
import { BaseItemVersionEntityConfig } from './baseitemversion.entity.config';
import { DriveItemVersionEntityConfig } from './driveitemversion.entity.config';
import { WorkbookApplicationEntityConfig } from './workbookapplication.entity.config';
import { WorkbookNamedItemEntityConfig } from './workbooknameditem.entity.config';
import { WorkbookTableEntityConfig } from './workbooktable.entity.config';
import { WorkbookWorksheetEntityConfig } from './workbookworksheet.entity.config';
import { WorkbookCommentEntityConfig } from './workbookcomment.entity.config';
import { WorkbookFunctionsEntityConfig } from './workbookfunctions.entity.config';
import { WorkbookChartEntityConfig } from './workbookchart.entity.config';
import { WorkbookChartAxesEntityConfig } from './workbookchartaxes.entity.config';
import { WorkbookChartDataLabelsEntityConfig } from './workbookchartdatalabels.entity.config';
import { WorkbookChartAreaFormatEntityConfig } from './workbookchartareaformat.entity.config';
import { WorkbookChartLegendEntityConfig } from './workbookchartlegend.entity.config';
import { WorkbookChartSeriesEntityConfig } from './workbookchartseries.entity.config';
import { WorkbookChartTitleEntityConfig } from './workbookcharttitle.entity.config';
import { WorkbookChartFillEntityConfig } from './workbookchartfill.entity.config';
import { WorkbookChartFontEntityConfig } from './workbookchartfont.entity.config';
import { WorkbookChartAxisEntityConfig } from './workbookchartaxis.entity.config';
import { WorkbookChartAxisFormatEntityConfig } from './workbookchartaxisformat.entity.config';
import { WorkbookChartGridlinesEntityConfig } from './workbookchartgridlines.entity.config';
import { WorkbookChartAxisTitleEntityConfig } from './workbookchartaxistitle.entity.config';
import { WorkbookChartLineFormatEntityConfig } from './workbookchartlineformat.entity.config';
import { WorkbookChartAxisTitleFormatEntityConfig } from './workbookchartaxistitleformat.entity.config';
import { WorkbookChartDataLabelFormatEntityConfig } from './workbookchartdatalabelformat.entity.config';
import { WorkbookChartGridlinesFormatEntityConfig } from './workbookchartgridlinesformat.entity.config';
import { WorkbookChartLegendFormatEntityConfig } from './workbookchartlegendformat.entity.config';
import { WorkbookChartPointEntityConfig } from './workbookchartpoint.entity.config';
import { WorkbookChartPointFormatEntityConfig } from './workbookchartpointformat.entity.config';
import { WorkbookChartSeriesFormatEntityConfig } from './workbookchartseriesformat.entity.config';
import { WorkbookChartTitleFormatEntityConfig } from './workbookcharttitleformat.entity.config';
import { WorkbookCommentReplyEntityConfig } from './workbookcommentreply.entity.config';
import { WorkbookFilterEntityConfig } from './workbookfilter.entity.config';
import { WorkbookFormatProtectionEntityConfig } from './workbookformatprotection.entity.config';
import { WorkbookFunctionResultEntityConfig } from './workbookfunctionresult.entity.config';
import { WorkbookPivotTableEntityConfig } from './workbookpivottable.entity.config';
import { WorkbookRangeEntityConfig } from './workbookrange.entity.config';
import { WorkbookRangeFormatEntityConfig } from './workbookrangeformat.entity.config';
import { WorkbookRangeSortEntityConfig } from './workbookrangesort.entity.config';
import { WorkbookRangeBorderEntityConfig } from './workbookrangeborder.entity.config';
import { WorkbookRangeFillEntityConfig } from './workbookrangefill.entity.config';
import { WorkbookRangeFontEntityConfig } from './workbookrangefont.entity.config';
import { WorkbookRangeViewEntityConfig } from './workbookrangeview.entity.config';
import { WorkbookTableColumnEntityConfig } from './workbooktablecolumn.entity.config';
import { WorkbookTableRowEntityConfig } from './workbooktablerow.entity.config';
import { WorkbookTableSortEntityConfig } from './workbooktablesort.entity.config';
import { WorkbookWorksheetProtectionEntityConfig } from './workbookworksheetprotection.entity.config';
import { PlaceEntityConfig } from './place.entity.config';
import { RoomEntityConfig } from './room.entity.config';
import { RoomListEntityConfig } from './roomlist.entity.config';
import { OutlookCategoryEntityConfig } from './outlookcategory.entity.config';
import { SingleValueLegacyExtendedPropertyEntityConfig } from './singlevaluelegacyextendedproperty.entity.config';
import { MultiValueLegacyExtendedPropertyEntityConfig } from './multivaluelegacyextendedproperty.entity.config';
import { AttachmentEntityConfig } from './attachment.entity.config';
import { CalendarSharingMessageEntityConfig } from './calendarsharingmessage.entity.config';
import { EventMessageEntityConfig } from './eventmessage.entity.config';
import { EventMessageRequestEntityConfig } from './eventmessagerequest.entity.config';
import { EventMessageResponseEntityConfig } from './eventmessageresponse.entity.config';
import { MessageRuleEntityConfig } from './messagerule.entity.config';
import { MailSearchFolderEntityConfig } from './mailsearchfolder.entity.config';
import { CalendarPermissionEntityConfig } from './calendarpermission.entity.config';
import { InferenceClassificationOverrideEntityConfig } from './inferenceclassificationoverride.entity.config';
import { PostEntityConfig } from './post.entity.config';
import { FileAttachmentEntityConfig } from './fileattachment.entity.config';
import { ItemAttachmentEntityConfig } from './itemattachment.entity.config';
import { ReferenceAttachmentEntityConfig } from './referenceattachment.entity.config';
import { OpenTypeExtensionEntityConfig } from './opentypeextension.entity.config';
import { ColumnLinkEntityConfig } from './columnlink.entity.config';
import { FieldValueSetEntityConfig } from './fieldvalueset.entity.config';
import { ItemActivityEntityConfig } from './itemactivity.entity.config';
import { ItemActivityStatEntityConfig } from './itemactivitystat.entity.config';
import { ListItemVersionEntityConfig } from './listitemversion.entity.config';
import { SharedDriveItemEntityConfig } from './shareddriveitem.entity.config';
import { SchemaExtensionEntityConfig } from './schemaextension.entity.config';
import { CloudCommunicationsEntityConfig } from './cloudcommunications.entity.config';
import { CallEntityConfig } from './call.entity.config';
import { DeviceAppManagementEntityConfig } from './deviceappmanagement.entity.config';
import { ManagedEBookEntityConfig } from './managedebook.entity.config';
import { MobileAppEntityConfig } from './mobileapp.entity.config';
import { MobileAppCategoryEntityConfig } from './mobileappcategory.entity.config';
import { ManagedDeviceMobileAppConfigurationEntityConfig } from './manageddevicemobileappconfiguration.entity.config';
import { VppTokenEntityConfig } from './vpptoken.entity.config';
import { ManagedAppPolicyEntityConfig } from './managedapppolicy.entity.config';
import { ManagedAppProtectionEntityConfig } from './managedappprotection.entity.config';
import { TargetedManagedAppProtectionEntityConfig } from './targetedmanagedappprotection.entity.config';
import { IosManagedAppProtectionEntityConfig } from './iosmanagedappprotection.entity.config';
import { AndroidManagedAppProtectionEntityConfig } from './androidmanagedappprotection.entity.config';
import { DefaultManagedAppProtectionEntityConfig } from './defaultmanagedappprotection.entity.config';
import { ManagedAppConfigurationEntityConfig } from './managedappconfiguration.entity.config';
import { TargetedManagedAppConfigurationEntityConfig } from './targetedmanagedappconfiguration.entity.config';
import { WindowsInformationProtectionEntityConfig } from './windowsinformationprotection.entity.config';
import { MdmWindowsInformationProtectionPolicyEntityConfig } from './mdmwindowsinformationprotectionpolicy.entity.config';
import { WindowsInformationProtectionPolicyEntityConfig } from './windowsinformationprotectionpolicy.entity.config';
import { ManagedAppStatusEntityConfig } from './managedappstatus.entity.config';
import { MobileAppAssignmentEntityConfig } from './mobileappassignment.entity.config';
import { MobileAppContentFileEntityConfig } from './mobileappcontentfile.entity.config';
import { ManagedDeviceMobileAppConfigurationAssignmentEntityConfig } from './manageddevicemobileappconfigurationassignment.entity.config';
import { ManagedDeviceMobileAppConfigurationDeviceStatusEntityConfig } from './manageddevicemobileappconfigurationdevicestatus.entity.config';
import { ManagedDeviceMobileAppConfigurationUserStatusEntityConfig } from './manageddevicemobileappconfigurationuserstatus.entity.config';
import { ManagedDeviceMobileAppConfigurationDeviceSummaryEntityConfig } from './manageddevicemobileappconfigurationdevicesummary.entity.config';
import { ManagedDeviceMobileAppConfigurationUserSummaryEntityConfig } from './manageddevicemobileappconfigurationusersummary.entity.config';
import { MacOSOfficeSuiteAppEntityConfig } from './macosofficesuiteapp.entity.config';
import { ManagedAppEntityConfig } from './managedapp.entity.config';
import { ManagedAndroidStoreAppEntityConfig } from './managedandroidstoreapp.entity.config';
import { ManagedIOSStoreAppEntityConfig } from './managediosstoreapp.entity.config';
import { ManagedMobileLobAppEntityConfig } from './managedmobilelobapp.entity.config';
import { MobileAppContentEntityConfig } from './mobileappcontent.entity.config';
import { ManagedAndroidLobAppEntityConfig } from './managedandroidlobapp.entity.config';
import { ManagedIOSLobAppEntityConfig } from './managedioslobapp.entity.config';
import { MobileLobAppEntityConfig } from './mobilelobapp.entity.config';
import { WindowsMobileMSIEntityConfig } from './windowsmobilemsi.entity.config';
import { WindowsUniversalAppXEntityConfig } from './windowsuniversalappx.entity.config';
import { AndroidLobAppEntityConfig } from './androidlobapp.entity.config';
import { IosLobAppEntityConfig } from './ioslobapp.entity.config';
import { MicrosoftStoreForBusinessAppEntityConfig } from './microsoftstoreforbusinessapp.entity.config';
import { WebAppEntityConfig } from './webapp.entity.config';
import { AndroidStoreAppEntityConfig } from './androidstoreapp.entity.config';
import { IosVppAppEntityConfig } from './iosvppapp.entity.config';
import { IosStoreAppEntityConfig } from './iosstoreapp.entity.config';
import { IosMobileAppConfigurationEntityConfig } from './iosmobileappconfiguration.entity.config';
import { ManagedEBookAssignmentEntityConfig } from './managedebookassignment.entity.config';
import { EBookInstallSummaryEntityConfig } from './ebookinstallsummary.entity.config';
import { DeviceInstallStateEntityConfig } from './deviceinstallstate.entity.config';
import { UserInstallStateSummaryEntityConfig } from './userinstallstatesummary.entity.config';
import { IosVppEBookAssignmentEntityConfig } from './iosvppebookassignment.entity.config';
import { IosVppEBookEntityConfig } from './iosvppebook.entity.config';
import { DeviceManagementEntityConfig } from './devicemanagement.entity.config';
import { TermsAndConditionsEntityConfig } from './termsandconditions.entity.config';
import { DeviceConfigurationEntityConfig } from './deviceconfiguration.entity.config';
import { DeviceCompliancePolicyEntityConfig } from './devicecompliancepolicy.entity.config';
import { SoftwareUpdateStatusSummaryEntityConfig } from './softwareupdatestatussummary.entity.config';
import { DeviceCompliancePolicyDeviceStateSummaryEntityConfig } from './devicecompliancepolicydevicestatesummary.entity.config';
import { DeviceCompliancePolicySettingStateSummaryEntityConfig } from './devicecompliancepolicysettingstatesummary.entity.config';
import { DeviceConfigurationDeviceStateSummaryEntityConfig } from './deviceconfigurationdevicestatesummary.entity.config';
import { IosUpdateDeviceStatusEntityConfig } from './iosupdatedevicestatus.entity.config';
import { DeviceCategoryEntityConfig } from './devicecategory.entity.config';
import { DeviceManagementExchangeConnectorEntityConfig } from './devicemanagementexchangeconnector.entity.config';
import { DeviceEnrollmentConfigurationEntityConfig } from './deviceenrollmentconfiguration.entity.config';
import { OnPremisesConditionalAccessSettingsEntityConfig } from './onpremisesconditionalaccesssettings.entity.config';
import { MobileThreatDefenseConnectorEntityConfig } from './mobilethreatdefenseconnector.entity.config';
import { DeviceManagementPartnerEntityConfig } from './devicemanagementpartner.entity.config';
import { ApplePushNotificationCertificateEntityConfig } from './applepushnotificationcertificate.entity.config';
import { ManagedDeviceOverviewEntityConfig } from './manageddeviceoverview.entity.config';
import { DetectedAppEntityConfig } from './detectedapp.entity.config';
import { NotificationMessageTemplateEntityConfig } from './notificationmessagetemplate.entity.config';
import { RoleDefinitionEntityConfig } from './roledefinition.entity.config';
import { RoleAssignmentEntityConfig } from './roleassignment.entity.config';
import { DeviceAndAppManagementRoleAssignmentEntityConfig } from './deviceandappmanagementroleassignment.entity.config';
import { ResourceOperationEntityConfig } from './resourceoperation.entity.config';
import { RemoteAssistancePartnerEntityConfig } from './remoteassistancepartner.entity.config';
import { TelecomExpenseManagementPartnerEntityConfig } from './telecomexpensemanagementpartner.entity.config';
import { WindowsInformationProtectionAppLearningSummaryEntityConfig } from './windowsinformationprotectionapplearningsummary.entity.config';
import { WindowsInformationProtectionNetworkLearningSummaryEntityConfig } from './windowsinformationprotectionnetworklearningsummary.entity.config';
import { TermsAndConditionsAssignmentEntityConfig } from './termsandconditionsassignment.entity.config';
import { TermsAndConditionsAcceptanceStatusEntityConfig } from './termsandconditionsacceptancestatus.entity.config';
import { ReportRootEntityConfig } from './reportroot.entity.config';
import { DeviceConfigurationAssignmentEntityConfig } from './deviceconfigurationassignment.entity.config';
import { DeviceConfigurationDeviceStatusEntityConfig } from './deviceconfigurationdevicestatus.entity.config';
import { DeviceConfigurationUserStatusEntityConfig } from './deviceconfigurationuserstatus.entity.config';
import { DeviceConfigurationDeviceOverviewEntityConfig } from './deviceconfigurationdeviceoverview.entity.config';
import { DeviceConfigurationUserOverviewEntityConfig } from './deviceconfigurationuseroverview.entity.config';
import { SettingStateDeviceSummaryEntityConfig } from './settingstatedevicesummary.entity.config';
import { DeviceCompliancePolicyAssignmentEntityConfig } from './devicecompliancepolicyassignment.entity.config';
import { DeviceComplianceScheduledActionForRuleEntityConfig } from './devicecompliancescheduledactionforrule.entity.config';
import { DeviceComplianceDeviceStatusEntityConfig } from './devicecompliancedevicestatus.entity.config';
import { DeviceComplianceUserStatusEntityConfig } from './devicecomplianceuserstatus.entity.config';
import { DeviceComplianceDeviceOverviewEntityConfig } from './devicecompliancedeviceoverview.entity.config';
import { DeviceComplianceUserOverviewEntityConfig } from './devicecomplianceuseroverview.entity.config';
import { DeviceComplianceActionItemEntityConfig } from './devicecomplianceactionitem.entity.config';
import { AndroidCustomConfigurationEntityConfig } from './androidcustomconfiguration.entity.config';
import { AndroidGeneralDeviceConfigurationEntityConfig } from './androidgeneraldeviceconfiguration.entity.config';
import { AndroidWorkProfileCustomConfigurationEntityConfig } from './androidworkprofilecustomconfiguration.entity.config';
import { AndroidWorkProfileGeneralDeviceConfigurationEntityConfig } from './androidworkprofilegeneraldeviceconfiguration.entity.config';
import { IosCertificateProfileEntityConfig } from './ioscertificateprofile.entity.config';
import { IosCustomConfigurationEntityConfig } from './ioscustomconfiguration.entity.config';
import { IosGeneralDeviceConfigurationEntityConfig } from './iosgeneraldeviceconfiguration.entity.config';
import { IosUpdateConfigurationEntityConfig } from './iosupdateconfiguration.entity.config';
import { MacOSCustomConfigurationEntityConfig } from './macoscustomconfiguration.entity.config';
import { MacOSGeneralDeviceConfigurationEntityConfig } from './macosgeneraldeviceconfiguration.entity.config';
import { AppleDeviceFeaturesConfigurationBaseEntityConfig } from './appledevicefeaturesconfigurationbase.entity.config';
import { MacOSDeviceFeaturesConfigurationEntityConfig } from './macosdevicefeaturesconfiguration.entity.config';
import { IosDeviceFeaturesConfigurationEntityConfig } from './iosdevicefeaturesconfiguration.entity.config';
import { Windows10EndpointProtectionConfigurationEntityConfig } from './windows10endpointprotectionconfiguration.entity.config';
import { Windows10GeneralConfigurationEntityConfig } from './windows10generalconfiguration.entity.config';
import { WindowsDefenderAdvancedThreatProtectionConfigurationEntityConfig } from './windowsdefenderadvancedthreatprotectionconfiguration.entity.config';
import { EditionUpgradeConfigurationEntityConfig } from './editionupgradeconfiguration.entity.config';
import { Windows10CustomConfigurationEntityConfig } from './windows10customconfiguration.entity.config';
import { Windows10EnterpriseModernAppManagementConfigurationEntityConfig } from './windows10enterprisemodernappmanagementconfiguration.entity.config';
import { SharedPCConfigurationEntityConfig } from './sharedpcconfiguration.entity.config';
import { Windows10SecureAssessmentConfigurationEntityConfig } from './windows10secureassessmentconfiguration.entity.config';
import { WindowsPhone81CustomConfigurationEntityConfig } from './windowsphone81customconfiguration.entity.config';
import { WindowsUpdateForBusinessConfigurationEntityConfig } from './windowsupdateforbusinessconfiguration.entity.config';
import { Windows81GeneralConfigurationEntityConfig } from './windows81generalconfiguration.entity.config';
import { WindowsPhone81GeneralConfigurationEntityConfig } from './windowsphone81generalconfiguration.entity.config';
import { Windows10TeamGeneralConfigurationEntityConfig } from './windows10teamgeneralconfiguration.entity.config';
import { AndroidCompliancePolicyEntityConfig } from './androidcompliancepolicy.entity.config';
import { AndroidWorkProfileCompliancePolicyEntityConfig } from './androidworkprofilecompliancepolicy.entity.config';
import { IosCompliancePolicyEntityConfig } from './ioscompliancepolicy.entity.config';
import { MacOSCompliancePolicyEntityConfig } from './macoscompliancepolicy.entity.config';
import { Windows10CompliancePolicyEntityConfig } from './windows10compliancepolicy.entity.config';
import { Windows10MobileCompliancePolicyEntityConfig } from './windows10mobilecompliancepolicy.entity.config';
import { Windows81CompliancePolicyEntityConfig } from './windows81compliancepolicy.entity.config';
import { WindowsPhone81CompliancePolicyEntityConfig } from './windowsphone81compliancepolicy.entity.config';
import { DeviceComplianceSettingStateEntityConfig } from './devicecompliancesettingstate.entity.config';
import { DeviceConfigurationStateEntityConfig } from './deviceconfigurationstate.entity.config';
import { DeviceCompliancePolicyStateEntityConfig } from './devicecompliancepolicystate.entity.config';
import { EnrollmentConfigurationAssignmentEntityConfig } from './enrollmentconfigurationassignment.entity.config';
import { DeviceEnrollmentLimitConfigurationEntityConfig } from './deviceenrollmentlimitconfiguration.entity.config';
import { DeviceEnrollmentPlatformRestrictionsConfigurationEntityConfig } from './deviceenrollmentplatformrestrictionsconfiguration.entity.config';
import { DeviceEnrollmentWindowsHelloForBusinessConfigurationEntityConfig } from './deviceenrollmentwindowshelloforbusinessconfiguration.entity.config';
import { ManagedMobileAppEntityConfig } from './managedmobileapp.entity.config';
import { TargetedManagedAppPolicyAssignmentEntityConfig } from './targetedmanagedapppolicyassignment.entity.config';
import { ManagedAppOperationEntityConfig } from './managedappoperation.entity.config';
import { ManagedAppPolicyDeploymentSummaryEntityConfig } from './managedapppolicydeploymentsummary.entity.config';
import { WindowsInformationProtectionAppLockerFileEntityConfig } from './windowsinformationprotectionapplockerfile.entity.config';
import { IosManagedAppRegistrationEntityConfig } from './iosmanagedappregistration.entity.config';
import { AndroidManagedAppRegistrationEntityConfig } from './androidmanagedappregistration.entity.config';
import { ManagedAppStatusRawEntityConfig } from './managedappstatusraw.entity.config';
import { LocalizedNotificationMessageEntityConfig } from './localizednotificationmessage.entity.config';
import { DeviceAndAppManagementRoleDefinitionEntityConfig } from './deviceandappmanagementroledefinition.entity.config';
import { EnrollmentTroubleshootingEventEntityConfig } from './enrollmenttroubleshootingevent.entity.config';
import { PlannerTaskEntityConfig } from './plannertask.entity.config';
import { PlannerPlanEntityConfig } from './plannerplan.entity.config';
import { PlannerEntityConfig } from './planner.entity.config';
import { PlannerBucketEntityConfig } from './plannerbucket.entity.config';
import { PlannerTaskDetailsEntityConfig } from './plannertaskdetails.entity.config';
import { PlannerAssignedToTaskBoardTaskFormatEntityConfig } from './plannerassignedtotaskboardtaskformat.entity.config';
import { PlannerProgressTaskBoardTaskFormatEntityConfig } from './plannerprogresstaskboardtaskformat.entity.config';
import { PlannerBucketTaskBoardTaskFormatEntityConfig } from './plannerbuckettaskboardtaskformat.entity.config';
import { PlannerPlanDetailsEntityConfig } from './plannerplandetails.entity.config';
import { ChangeTrackedEntityEntityConfig } from './changetrackedentity.entity.config';
import { ShiftPreferencesEntityConfig } from './shiftpreferences.entity.config';
import { TrendingEntityConfig } from './trending.entity.config';
import { SharedInsightEntityConfig } from './sharedinsight.entity.config';
import { UsedInsightEntityConfig } from './usedinsight.entity.config';
import { OnenoteEntityBaseModelEntityConfig } from './onenoteentitybasemodel.entity.config';
import { OnenoteEntitySchemaObjectModelEntityConfig } from './onenoteentityschemaobjectmodel.entity.config';
import { OnenoteEntityHierarchyModelEntityConfig } from './onenoteentityhierarchymodel.entity.config';
import { NotebookEntityConfig } from './notebook.entity.config';
import { OnenoteSectionEntityConfig } from './onenotesection.entity.config';
import { SectionGroupEntityConfig } from './sectiongroup.entity.config';
import { OnenotePageEntityConfig } from './onenotepage.entity.config';
import { OnenoteResourceEntityConfig } from './onenoteresource.entity.config';
import { OperationEntityConfig } from './operation.entity.config';
import { OnenoteOperationEntityConfig } from './onenoteoperation.entity.config';
import { DataPolicyOperationEntityConfig } from './datapolicyoperation.entity.config';
import { ActivityHistoryItemEntityConfig } from './activityhistoryitem.entity.config';
import { SecurityEntityConfig } from './security.entity.config';
import { AlertEntityConfig } from './alert.entity.config';
import { SecureScoreControlProfileEntityConfig } from './securescorecontrolprofile.entity.config';
import { SecureScoreEntityConfig } from './securescore.entity.config';
import { ParticipantEntityConfig } from './participant.entity.config';
import { CommsOperationEntityConfig } from './commsoperation.entity.config';
import { InviteParticipantsOperationEntityConfig } from './inviteparticipantsoperation.entity.config';
import { MuteParticipantOperationEntityConfig } from './muteparticipantoperation.entity.config';
import { PlayPromptOperationEntityConfig } from './playpromptoperation.entity.config';
import { RecordOperationEntityConfig } from './recordoperation.entity.config';
import { SubscribeToToneOperationEntityConfig } from './subscribetotoneoperation.entity.config';
import { UnmuteParticipantOperationEntityConfig } from './unmuteparticipantoperation.entity.config';
import { UpdateRecordingStatusOperationEntityConfig } from './updaterecordingstatusoperation.entity.config';
import { TeamworkEntityConfig } from './teamwork.entity.config';
import { WorkforceIntegrationEntityConfig } from './workforceintegration.entity.config';
import { ScheduleEntityConfig } from './schedule.entity.config';
import { ChannelEntityConfig } from './channel.entity.config';
import { TeamsAppInstallationEntityConfig } from './teamsappinstallation.entity.config';
import { TeamsAsyncOperationEntityConfig } from './teamsasyncoperation.entity.config';
import { ChatMessageEntityConfig } from './chatmessage.entity.config';
import { ChatMessageHostedContentEntityConfig } from './chatmessagehostedcontent.entity.config';
import { AppCatalogsEntityConfig } from './appcatalogs.entity.config';
import { TeamsAppEntityConfig } from './teamsapp.entity.config';
import { TeamsAppDefinitionEntityConfig } from './teamsappdefinition.entity.config';
import { TeamsTabEntityConfig } from './teamstab.entity.config';
import { ShiftEntityConfig } from './shift.entity.config';
import { OpenShiftEntityConfig } from './openshift.entity.config';
import { TimeOffEntityConfig } from './timeoff.entity.config';
import { TimeOffReasonEntityConfig } from './timeoffreason.entity.config';
import { SchedulingGroupEntityConfig } from './schedulinggroup.entity.config';
import { ScheduleChangeRequestEntityConfig } from './schedulechangerequest.entity.config';
import { OfferShiftRequestEntityConfig } from './offershiftrequest.entity.config';
import { SwapShiftsChangeRequestEntityConfig } from './swapshiftschangerequest.entity.config';
import { OpenShiftChangeRequestEntityConfig } from './openshiftchangerequest.entity.config';
import { TimeOffRequestEntityConfig } from './timeoffrequest.entity.config';
import { InformationProtectionEntityConfig } from './informationprotection.entity.config';
import { ThreatAssessmentRequestEntityConfig } from './threatassessmentrequest.entity.config';
import { ThreatAssessmentResultEntityConfig } from './threatassessmentresult.entity.config';
import { UrlAssessmentRequestEntityConfig } from './urlassessmentrequest.entity.config';
import { FileAssessmentRequestEntityConfig } from './fileassessmentrequest.entity.config';
import { EmailFileAssessmentRequestEntityConfig } from './emailfileassessmentrequest.entity.config';
import { MailAssessmentRequestEntityConfig } from './mailassessmentrequest.entity.config';
import { GraphServiceContainer } from './graphservice.container';
//#endregion

//#region ODataApiGen SchemaConfig
export const GraphSchema = {
  namespace: 'microsoft.graph',
  alias: 'graph',
  enums: [RiskLevelConfig,
    AppliedConditionalAccessPolicyResultConfig,
    ConditionalAccessStatusConfig,
    GroupTypeConfig,
    OperationResultConfig,
    RiskStateConfig,
    RiskDetailConfig,
    RiskEventTypeConfig,
    PhoneTypeConfig,
    EducationUserRoleConfig,
    EducationExternalSourceConfig,
    EducationGenderConfig,
    AttendeeTypeConfig,
    ActivityDomainConfig,
    FreeBusyStatusConfig,
    LocationTypeConfig,
    PhysicalAddressTypeConfig,
    LocationUniqueIdTypeConfig,
    BookingTypeConfig,
    DayOfWeekConfig,
    AutomaticRepliesStatusConfig,
    ExternalAudienceScopeConfig,
    DelegateMeetingMessageDeliveryOptionsConfig,
    MailTipsTypeConfig,
    RecipientScopeTypeConfig,
    ExchangeIdFormatConfig,
    TimeZoneStandardConfig,
    BodyTypeConfig,
    ImportanceConfig,
    InferenceClassificationTypeConfig,
    FollowupFlagStatusConfig,
    CalendarSharingActionImportanceConfig,
    CalendarSharingActionTypeConfig,
    CalendarSharingActionConfig,
    MeetingMessageTypeConfig,
    EventTypeConfig,
    RecurrencePatternTypeConfig,
    WeekIndexConfig,
    RecurrenceRangeTypeConfig,
    MeetingRequestTypeConfig,
    ResponseTypeConfig,
    CalendarColorConfig,
    OnlineMeetingProviderTypeConfig,
    CalendarRoleTypeConfig,
    SensitivityConfig,
    SelectionLikelihoodInfoConfig,
    WebsiteTypeConfig,
    CategoryColorConfig,
    AttachmentTypeConfig,
    MessageActionFlagConfig,
    InstallIntentConfig,
    MobileAppPublishingStateConfig,
    WindowsArchitectureConfig,
    ManagedAppAvailabilityConfig,
    MobileAppContentFileUploadStateConfig,
    WindowsDeviceTypeConfig,
    VppTokenAccountTypeConfig,
    MicrosoftStoreForBusinessLicenseTypeConfig,
    ComplianceStatusConfig,
    MdmAppConfigKeyTypeConfig,
    InstallStateConfig,
    Windows10EditionTypeConfig,
    AppListTypeConfig,
    AndroidRequiredPasswordTypeConfig,
    WebBrowserCookieSettingsConfig,
    AndroidWorkProfileRequiredPasswordTypeConfig,
    AndroidWorkProfileCrossProfileDataSharingTypeConfig,
    AndroidWorkProfileDefaultAppPermissionPolicyTypeConfig,
    RatingAustraliaMoviesTypeConfig,
    RatingAustraliaTelevisionTypeConfig,
    RatingCanadaMoviesTypeConfig,
    RatingCanadaTelevisionTypeConfig,
    RatingFranceMoviesTypeConfig,
    RatingFranceTelevisionTypeConfig,
    RatingGermanyMoviesTypeConfig,
    RatingGermanyTelevisionTypeConfig,
    RatingIrelandMoviesTypeConfig,
    RatingIrelandTelevisionTypeConfig,
    RatingJapanMoviesTypeConfig,
    RatingJapanTelevisionTypeConfig,
    RatingNewZealandMoviesTypeConfig,
    RatingNewZealandTelevisionTypeConfig,
    RatingUnitedKingdomMoviesTypeConfig,
    RatingUnitedKingdomTelevisionTypeConfig,
    RatingUnitedStatesMoviesTypeConfig,
    RatingUnitedStatesTelevisionTypeConfig,
    RatingAppsTypeConfig,
    RequiredPasswordTypeConfig,
    IosNotificationAlertTypeConfig,
    StateManagementSettingConfig,
    FirewallPreSharedKeyEncodingMethodTypeConfig,
    FirewallCertificateRevocationListCheckMethodTypeConfig,
    FirewallPacketQueueingMethodTypeConfig,
    AppLockerApplicationControlTypeConfig,
    ApplicationGuardBlockFileTransferTypeConfig,
    ApplicationGuardBlockClipboardSharingTypeConfig,
    BitLockerEncryptionMethodConfig,
    DefenderCloudBlockLevelTypeConfig,
    DefenderScanTypeConfig,
    WeeklyScheduleConfig,
    DefenderThreatActionConfig,
    DiagnosticDataSubmissionModeConfig,
    EdgeCookiePolicyConfig,
    VisibilitySettingConfig,
    DefenderMonitorFileActivityConfig,
    DefenderPromptForSampleSubmissionConfig,
    WindowsStartMenuAppListVisibilityTypeConfig,
    WindowsStartMenuModeTypeConfig,
    WindowsSpotlightEnablementSettingsConfig,
    AutomaticUpdateModeConfig,
    SafeSearchFilterTypeConfig,
    EdgeSearchEngineTypeConfig,
    PrereleaseFeaturesConfig,
    EditionUpgradeLicenseTypeConfig,
    WindowsDeliveryOptimizationModeConfig,
    SharedPCAccountDeletionPolicyTypeConfig,
    SharedPCAllowedAccountTypeConfig,
    WindowsUpdateTypeConfig,
    InternetSiteSecurityLevelConfig,
    SiteSecurityLevelConfig,
    WindowsUserAccountControlSettingsConfig,
    MiracastChannelConfig,
    WelcomeScreenMeetingInformationConfig,
    DeviceComplianceActionTypeConfig,
    DeviceThreatProtectionLevelConfig,
    PolicyPlatformTypeConfig,
    IosUpdatesInstallStatusConfig,
    DeviceManagementExchangeConnectorSyncTypeConfig,
    MdmAuthorityConfig,
    WindowsHelloForBusinessPinUsageConfig,
    EnablementConfig,
    VppTokenStateConfig,
    VppTokenSyncStatusConfig,
    DeviceManagementExchangeConnectorStatusConfig,
    DeviceManagementExchangeConnectorTypeConfig,
    MobileThreatPartnerTenantStateConfig,
    DeviceManagementPartnerTenantStateConfig,
    DeviceManagementPartnerAppTypeConfig,
    ActionStateConfig,
    ManagedDeviceOwnerTypeConfig,
    ComplianceStateConfig,
    ManagementAgentTypeConfig,
    DeviceEnrollmentTypeConfig,
    DeviceRegistrationStateConfig,
    DeviceManagementExchangeAccessStateConfig,
    DeviceManagementExchangeAccessStateReasonConfig,
    ManagedDevicePartnerReportedHealthStateConfig,
    DeviceManagementSubscriptionStateConfig,
    ManagedAppDataStorageLocationConfig,
    ManagedAppDataTransferLevelConfig,
    ManagedAppClipboardSharingLevelConfig,
    ManagedAppPinCharacterSetConfig,
    ManagedBrowserTypeConfig,
    ManagedAppDataEncryptionTypeConfig,
    WindowsInformationProtectionEnforcementLevelConfig,
    WindowsInformationProtectionPinCharacterRequirementsConfig,
    ManagedAppFlaggedReasonConfig,
    NotificationTemplateBrandingOptionsConfig,
    RemoteAssistanceOnboardingStatusConfig,
    DeviceEnrollmentFailureReasonConfig,
    ApplicationTypeConfig,
    PlannerPreviewTypeConfig,
    OperationStatusConfig,
    OnenotePatchInsertPositionConfig,
    OnenotePatchActionTypeConfig,
    OnenoteSourceServiceConfig,
    OnenoteUserRoleConfig,
    DataPolicyOperationStatusConfig,
    StatusConfig,
    AlertFeedbackConfig,
    AlertSeverityConfig,
    AlertStatusConfig,
    ConnectionDirectionConfig,
    ConnectionStatusConfig,
    EmailRoleConfig,
    FileHashTypeConfig,
    LogonTypeConfig,
    ProcessIntegrityLevelConfig,
    RegistryHiveConfig,
    RegistryOperationConfig,
    RegistryValueTypeConfig,
    SecurityNetworkProtocolConfig,
    SecurityResourceTypeConfig,
    UserAccountSecurityTypeConfig,
    CallDirectionConfig,
    CallStateConfig,
    ChangeTypeConfig,
    EndpointTypeConfig,
    MediaDirectionConfig,
    MediaStateConfig,
    ModalityConfig,
    RecordingStatusConfig,
    RejectReasonConfig,
    RoutingTypeConfig,
    ScreenSharingRoleConfig,
    ToneConfig,
    TeamVisibilityTypeConfig,
    ClonableTeamPartsConfig,
    GiphyRatingTypeConfig,
    ChatMessageTypeConfig,
    ChatMessageImportanceConfig,
    ChatMessagePolicyViolationDlpActionTypesConfig,
    ChatMessagePolicyViolationUserActionTypesConfig,
    ChatMessagePolicyViolationVerdictDetailsTypesConfig,
    TeamsAppDistributionMethodConfig,
    TeamsAsyncOperationTypeConfig,
    TeamsAsyncOperationStatusConfig,
    ScheduleEntityThemeConfig,
    TimeOffReasonIconTypeConfig,
    ScheduleChangeStateConfig,
    ScheduleChangeRequestActorConfig,
    WorkforceIntegrationEncryptionProtocolConfig,
    WorkforceIntegrationSupportedEntitiesConfig,
    ThreatAssessmentContentTypeConfig,
    ThreatExpectedAssessmentConfig,
    ThreatCategoryConfig,
    ThreatAssessmentStatusConfig,
    ThreatAssessmentRequestSourceConfig,
    ThreatAssessmentResultTypeConfig,
    MailDestinationRoutingReasonConfig],
  entities: [AuditActivityInitiatorComplexConfig,
    UserIdentityComplexConfig,
    AppIdentityComplexConfig,
    TargetResourceComplexConfig,
    ModifiedPropertyComplexConfig,
    KeyValueComplexConfig,
    SignInStatusComplexConfig,
    DeviceDetailComplexConfig,
    SignInLocationComplexConfig,
    GeoCoordinatesComplexConfig,
    AppliedConditionalAccessPolicyComplexConfig,
    InvitedUserMessageInfoComplexConfig,
    RecipientComplexConfig,
    EmailAddressComplexConfig,
    AssignedLicenseComplexConfig,
    AssignedPlanComplexConfig,
    ObjectIdentityComplexConfig,
    LicenseAssignmentStateComplexConfig,
    OnPremisesExtensionAttributesComplexConfig,
    OnPremisesProvisioningErrorComplexConfig,
    PasswordProfileComplexConfig,
    ProvisionedPlanComplexConfig,
    MailboxSettingsComplexConfig,
    AutomaticRepliesSettingComplexConfig,
    DateTimeTimeZoneComplexConfig,
    LocaleInfoComplexConfig,
    WorkingHoursComplexConfig,
    TimeZoneBaseComplexConfig,
    AddInComplexConfig,
    ApiApplicationComplexConfig,
    PreAuthorizedApplicationComplexConfig,
    PermissionScopeComplexConfig,
    AppRoleComplexConfig,
    PublicClientApplicationComplexConfig,
    InformationalUrlComplexConfig,
    KeyCredentialComplexConfig,
    OptionalClaimsComplexConfig,
    OptionalClaimComplexConfig,
    ParentalControlSettingsComplexConfig,
    PasswordCredentialComplexConfig,
    RequiredResourceAccessComplexConfig,
    ResourceAccessComplexConfig,
    WebApplicationComplexConfig,
    ImplicitGrantSettingsComplexConfig,
    CertificateAuthorityComplexConfig,
    PhysicalOfficeAddressComplexConfig,
    PhoneComplexConfig,
    AlternativeSecurityIdComplexConfig,
    DomainStateComplexConfig,
    ServicePlanInfoComplexConfig,
    AssignedLabelComplexConfig,
    LicenseProcessingStateComplexConfig,
    SamlSingleSignOnSettingsComplexConfig,
    LicenseUnitsDetailComplexConfig,
    PrivacyProfileComplexConfig,
    VerifiedDomainComplexConfig,
    SettingValueComplexConfig,
    SettingTemplateValueComplexConfig,
    ComplexExtensionValueComplexConfig,
    PhysicalAddressComplexConfig,
    IdentityComplexConfig,
    IdentitySetComplexConfig,
    EducationStudentComplexConfig,
    EducationTeacherComplexConfig,
    EducationTermComplexConfig,
    PublicErrorComplexConfig,
    PublicErrorDetailComplexConfig,
    PublicInnerErrorComplexConfig,
    RootComplexConfig,
    SharepointIdsComplexConfig,
    SiteCollectionComplexConfig,
    ListInfoComplexConfig,
    SystemFacetComplexConfig,
    QuotaComplexConfig,
    AudioComplexConfig,
    DeletedComplexConfig,
    FileComplexConfig,
    HashesComplexConfig,
    FileSystemInfoComplexConfig,
    FolderComplexConfig,
    FolderViewComplexConfig,
    ImageComplexConfig,
    PackageComplexConfig,
    PhotoComplexConfig,
    PublicationFacetComplexConfig,
    RemoteItemComplexConfig,
    ItemReferenceComplexConfig,
    SharedComplexConfig,
    SpecialFolderComplexConfig,
    VideoComplexConfig,
    SearchResultComplexConfig,
    WorkbookSessionInfoComplexConfig,
    JsonComplexConfig,
    WorkbookFilterCriteriaComplexConfig,
    WorkbookIconComplexConfig,
    WorkbookSortFieldComplexConfig,
    WorkbookWorksheetProtectionOptionsComplexConfig,
    WorkbookFilterDatetimeComplexConfig,
    WorkbookRangeReferenceComplexConfig,
    AttendeeBaseComplexConfig,
    LocationConstraintComplexConfig,
    LocationComplexConfig,
    OutlookGeoCoordinatesComplexConfig,
    LocationConstraintItemComplexConfig,
    MeetingTimeSuggestionsResultComplexConfig,
    MeetingTimeSuggestionComplexConfig,
    AttendeeAvailabilityComplexConfig,
    TimeSlotComplexConfig,
    TimeConstraintComplexConfig,
    CustomTimeZoneComplexConfig,
    StandardTimeZoneOffsetComplexConfig,
    DaylightTimeZoneOffsetComplexConfig,
    ReminderComplexConfig,
    MailTipsComplexConfig,
    AutomaticRepliesMailTipsComplexConfig,
    MailTipsErrorComplexConfig,
    ConvertIdResultComplexConfig,
    GenericErrorComplexConfig,
    TimeZoneInformationComplexConfig,
    InternetMessageHeaderComplexConfig,
    ItemBodyComplexConfig,
    FollowupFlagComplexConfig,
    CalendarSharingMessageActionComplexConfig,
    PatternedRecurrenceComplexConfig,
    RecurrencePatternComplexConfig,
    RecurrenceRangeComplexConfig,
    ScheduleInformationComplexConfig,
    ScheduleItemComplexConfig,
    FreeBusyErrorComplexConfig,
    ResponseStatusComplexConfig,
    AttendeeComplexConfig,
    OnlineMeetingInfoComplexConfig,
    ScoredEmailAddressComplexConfig,
    WebsiteComplexConfig,
    PersonTypeComplexConfig,
    AttachmentItemComplexConfig,
    UploadSessionComplexConfig,
    MessageRulePredicatesComplexConfig,
    SizeRangeComplexConfig,
    MessageRuleActionsComplexConfig,
    BooleanColumnComplexConfig,
    CalculatedColumnComplexConfig,
    ChoiceColumnComplexConfig,
    CurrencyColumnComplexConfig,
    DateTimeColumnComplexConfig,
    DefaultColumnValueComplexConfig,
    LookupColumnComplexConfig,
    NumberColumnComplexConfig,
    PersonOrGroupColumnComplexConfig,
    TextColumnComplexConfig,
    ContentTypeOrderComplexConfig,
    AccessActionComplexConfig,
    ItemActionStatComplexConfig,
    IncompleteDataComplexConfig,
    ContentTypeInfoComplexConfig,
    SharingInvitationComplexConfig,
    SharingLinkComplexConfig,
    ThumbnailComplexConfig,
    DriveItemUploadablePropertiesComplexConfig,
    DriveRecipientComplexConfig,
    ItemPreviewInfoComplexConfig,
    ExtensionSchemaPropertyComplexConfig,
    DeviceAndAppManagementAssignmentTargetComplexConfig,
    MobileAppAssignmentSettingsComplexConfig,
    MimeContentComplexConfig,
    FileEncryptionInfoComplexConfig,
    AllLicensedUsersAssignmentTargetComplexConfig,
    GroupAssignmentTargetComplexConfig,
    ExclusionGroupAssignmentTargetComplexConfig,
    AllDevicesAssignmentTargetComplexConfig,
    IosLobAppAssignmentSettingsComplexConfig,
    IosStoreAppAssignmentSettingsComplexConfig,
    IosVppAppAssignmentSettingsComplexConfig,
    MicrosoftStoreForBusinessAppAssignmentSettingsComplexConfig,
    AndroidMinimumOperatingSystemComplexConfig,
    IosDeviceTypeComplexConfig,
    IosMinimumOperatingSystemComplexConfig,
    WindowsMinimumOperatingSystemComplexConfig,
    VppLicensingTypeComplexConfig,
    AppConfigurationSettingItemComplexConfig,
    DeviceManagementSettingsComplexConfig,
    IntuneBrandComplexConfig,
    RgbColorComplexConfig,
    ReportComplexConfig,
    AppListItemComplexConfig,
    OmaSettingComplexConfig,
    OmaSettingIntegerComplexConfig,
    OmaSettingFloatingPointComplexConfig,
    OmaSettingStringComplexConfig,
    OmaSettingDateTimeComplexConfig,
    OmaSettingStringXmlComplexConfig,
    OmaSettingBooleanComplexConfig,
    OmaSettingBase64ComplexConfig,
    MediaContentRatingAustraliaComplexConfig,
    MediaContentRatingCanadaComplexConfig,
    MediaContentRatingFranceComplexConfig,
    MediaContentRatingGermanyComplexConfig,
    MediaContentRatingIrelandComplexConfig,
    MediaContentRatingJapanComplexConfig,
    MediaContentRatingNewZealandComplexConfig,
    MediaContentRatingUnitedKingdomComplexConfig,
    MediaContentRatingUnitedStatesComplexConfig,
    IosNetworkUsageRuleComplexConfig,
    IosHomeScreenItemComplexConfig,
    IosHomeScreenPageComplexConfig,
    IosNotificationSettingsComplexConfig,
    IosHomeScreenFolderComplexConfig,
    IosHomeScreenFolderPageComplexConfig,
    IosHomeScreenAppComplexConfig,
    WindowsFirewallNetworkProfileComplexConfig,
    BitLockerRemovableDrivePolicyComplexConfig,
    DefenderDetectedMalwareActionsComplexConfig,
    Windows10NetworkProxyServerComplexConfig,
    EdgeSearchEngineBaseComplexConfig,
    EdgeSearchEngineCustomComplexConfig,
    EdgeSearchEngineComplexConfig,
    SharedPCAccountManagerPolicyComplexConfig,
    WindowsUpdateInstallScheduleTypeComplexConfig,
    WindowsUpdateScheduledInstallComplexConfig,
    WindowsUpdateActiveHoursInstallComplexConfig,
    DeviceActionResultComplexConfig,
    ConfigurationManagerClientEnabledFeaturesComplexConfig,
    DeviceHealthAttestationStateComplexConfig,
    DeviceConfigurationSettingStateComplexConfig,
    SettingSourceComplexConfig,
    DeviceCompliancePolicySettingStateComplexConfig,
    DeviceEnrollmentPlatformRestrictionComplexConfig,
    UpdateWindowsDeviceAccountActionParameterComplexConfig,
    WindowsDeviceAccountComplexConfig,
    WindowsDefenderScanActionResultComplexConfig,
    DeviceGeoLocationComplexConfig,
    DeleteUserFromSharedAppleDeviceActionResultComplexConfig,
    LocateDeviceActionResultComplexConfig,
    RemoteLockActionResultComplexConfig,
    ResetPasscodeActionResultComplexConfig,
    DeviceOperatingSystemSummaryComplexConfig,
    DeviceExchangeAccessStateSummaryComplexConfig,
    WindowsDeviceADAccountComplexConfig,
    WindowsDeviceAzureADAccountComplexConfig,
    MobileAppIdentifierComplexConfig,
    ManagedAppDiagnosticStatusComplexConfig,
    KeyValuePairComplexConfig,
    WindowsInformationProtectionResourceCollectionComplexConfig,
    WindowsInformationProtectionDataRecoveryCertificateComplexConfig,
    WindowsInformationProtectionAppComplexConfig,
    WindowsInformationProtectionProxiedDomainCollectionComplexConfig,
    ProxiedDomainComplexConfig,
    WindowsInformationProtectionIPRangeCollectionComplexConfig,
    IpRangeComplexConfig,
    AndroidMobileAppIdentifierComplexConfig,
    IosMobileAppIdentifierComplexConfig,
    ManagedAppPolicyDeploymentSummaryPerAppComplexConfig,
    WindowsInformationProtectionStoreAppComplexConfig,
    WindowsInformationProtectionDesktopAppComplexConfig,
    IPv6RangeComplexConfig,
    IPv4RangeComplexConfig,
    RolePermissionComplexConfig,
    ResourceActionComplexConfig,
    PlannerAppliedCategoriesComplexConfig,
    PlannerAssignmentsComplexConfig,
    PlannerExternalReferenceComplexConfig,
    PlannerChecklistItemComplexConfig,
    PlannerAssignmentComplexConfig,
    PlannerExternalReferencesComplexConfig,
    PlannerChecklistItemsComplexConfig,
    PlannerOrderHintsByAssigneeComplexConfig,
    PlannerUserIdsComplexConfig,
    PlannerCategoryDescriptionsComplexConfig,
    ResourceVisualizationComplexConfig,
    ResourceReferenceComplexConfig,
    SharingDetailComplexConfig,
    InsightIdentityComplexConfig,
    UsageDetailsComplexConfig,
    NotebookLinksComplexConfig,
    ExternalLinkComplexConfig,
    SectionLinksComplexConfig,
    PageLinksComplexConfig,
    OnenoteOperationErrorComplexConfig,
    DiagnosticComplexConfig,
    OnenotePatchContentCommandComplexConfig,
    OnenotePagePreviewComplexConfig,
    OnenotePagePreviewLinksComplexConfig,
    RecentNotebookComplexConfig,
    RecentNotebookLinksComplexConfig,
    CopyNotebookModelComplexConfig,
    ImageInfoComplexConfig,
    VisualInfoComplexConfig,
    CloudAppSecurityStateComplexConfig,
    FileSecurityStateComplexConfig,
    FileHashComplexConfig,
    AlertHistoryStateComplexConfig,
    HostSecurityStateComplexConfig,
    MalwareStateComplexConfig,
    NetworkConnectionComplexConfig,
    ProcessComplexConfig,
    RegistryKeyStateComplexConfig,
    SecurityResourceComplexConfig,
    AlertTriggerComplexConfig,
    UserSecurityStateComplexConfig,
    SecurityVendorInformationComplexConfig,
    VulnerabilityStateComplexConfig,
    AverageComparativeScoreComplexConfig,
    ControlScoreComplexConfig,
    ComplianceInformationComplexConfig,
    CertificationControlComplexConfig,
    SecureScoreControlStateUpdateComplexConfig,
    CallMediaStateComplexConfig,
    ResultInfoComplexConfig,
    CallRouteComplexConfig,
    ParticipantInfoComplexConfig,
    InvitationParticipantInfoComplexConfig,
    MediaConfigComplexConfig,
    ChatInfoComplexConfig,
    CallOptionsComplexConfig,
    MeetingInfoComplexConfig,
    ToneInfoComplexConfig,
    IncomingContextComplexConfig,
    MeetingParticipantsComplexConfig,
    MeetingParticipantInfoComplexConfig,
    AudioConferencingComplexConfig,
    RecordingInfoComplexConfig,
    MediaStreamComplexConfig,
    OutgoingCallOptionsComplexConfig,
    CommsNotificationComplexConfig,
    CommsNotificationsComplexConfig,
    AppHostedMediaConfigComplexConfig,
    ServiceHostedMediaConfigComplexConfig,
    MediaInfoComplexConfig,
    OrganizerMeetingInfoComplexConfig,
    TokenMeetingInfoComplexConfig,
    PromptComplexConfig,
    MediaPromptComplexConfig,
    TeleconferenceDeviceMediaQualityComplexConfig,
    TeleconferenceDeviceAudioQualityComplexConfig,
    TeleconferenceDeviceVideoQualityComplexConfig,
    TeleconferenceDeviceScreenSharingQualityComplexConfig,
    TeleconferenceDeviceQualityComplexConfig,
    TeamClassSettingsComplexConfig,
    ChatMessageAttachmentComplexConfig,
    ChatMessageMentionComplexConfig,
    TeamsTabConfigurationComplexConfig,
    TeamMemberSettingsComplexConfig,
    TeamGuestSettingsComplexConfig,
    TeamMessagingSettingsComplexConfig,
    TeamFunSettingsComplexConfig,
    ChatMessagePolicyViolationComplexConfig,
    ChatMessagePolicyViolationPolicyTipComplexConfig,
    ChatMessageReactionComplexConfig,
    OperationErrorComplexConfig,
    WorkforceIntegrationEncryptionComplexConfig,
    ScheduleEntityComplexConfig,
    ShiftActivityComplexConfig,
    ShiftItemComplexConfig,
    OpenShiftItemComplexConfig,
    TimeOffItemComplexConfig,
    ShiftAvailabilityComplexConfig,
    TimeRangeComplexConfig,
    EntityEntityConfig,
    DirectoryAuditEntityConfig,
    SignInEntityConfig,
    RestrictedSignInEntityConfig,
    AuditLogRootEntityConfig,
    InvitationEntityConfig,
    DirectoryObjectEntityConfig,
    UserEntityConfig,
    AppRoleAssignmentEntityConfig,
    OAuth2PermissionGrantEntityConfig,
    LicenseDetailsEntityConfig,
    OutlookUserEntityConfig,
    OutlookItemEntityConfig,
    MessageEntityConfig,
    MailFolderEntityConfig,
    CalendarEntityConfig,
    CalendarGroupEntityConfig,
    EventEntityConfig,
    PersonEntityConfig,
    ContactEntityConfig,
    ContactFolderEntityConfig,
    InferenceClassificationEntityConfig,
    ProfilePhotoEntityConfig,
    BaseItemEntityConfig,
    DriveEntityConfig,
    SiteEntityConfig,
    ExtensionEntityConfig,
    ManagedDeviceEntityConfig,
    ManagedAppRegistrationEntityConfig,
    DeviceManagementTroubleshootingEventEntityConfig,
    PlannerUserEntityConfig,
    OfficeGraphInsightsEntityConfig,
    UserSettingsEntityConfig,
    OnenoteEntityConfig,
    UserActivityEntityConfig,
    OnlineMeetingEntityConfig,
    TeamEntityConfig,
    IdentityProviderEntityConfig,
    AdministrativeUnitEntityConfig,
    ApplicationEntityConfig,
    ExtensionPropertyEntityConfig,
    PolicyBaseEntityConfig,
    StsPolicyEntityConfig,
    TokenLifetimePolicyEntityConfig,
    TokenIssuancePolicyEntityConfig,
    DirectoryEntityConfig,
    CertificateBasedAuthConfigurationEntityConfig,
    OrgContactEntityConfig,
    DeviceEntityConfig,
    DirectoryObjectPartnerReferenceEntityConfig,
    DirectoryRoleEntityConfig,
    DirectoryRoleTemplateEntityConfig,
    DomainEntityConfig,
    DomainDnsRecordEntityConfig,
    DomainDnsCnameRecordEntityConfig,
    DomainDnsMxRecordEntityConfig,
    DomainDnsSrvRecordEntityConfig,
    DomainDnsTxtRecordEntityConfig,
    DomainDnsUnavailableRecordEntityConfig,
    EndpointEntityConfig,
    GroupEntityConfig,
    GroupSettingEntityConfig,
    ConversationEntityConfig,
    ConversationThreadEntityConfig,
    GroupLifecyclePolicyEntityConfig,
    PlannerGroupEntityConfig,
    PolicyRootEntityConfig,
    ActivityBasedTimeoutPolicyEntityConfig,
    ClaimsMappingPolicyEntityConfig,
    HomeRealmDiscoveryPolicyEntityConfig,
    ContractEntityConfig,
    ServicePrincipalEntityConfig,
    SubscribedSkuEntityConfig,
    OrganizationEntityConfig,
    GroupSettingTemplateEntityConfig,
    EducationRootEntityConfig,
    EducationClassEntityConfig,
    EducationOrganizationEntityConfig,
    EducationSchoolEntityConfig,
    EducationUserEntityConfig,
    ItemAnalyticsEntityConfig,
    ColumnDefinitionEntityConfig,
    ContentTypeEntityConfig,
    ListEntityConfig,
    ListItemEntityConfig,
    SubscriptionEntityConfig,
    DriveItemEntityConfig,
    WorkbookEntityConfig,
    PermissionEntityConfig,
    ThumbnailSetEntityConfig,
    BaseItemVersionEntityConfig,
    DriveItemVersionEntityConfig,
    WorkbookApplicationEntityConfig,
    WorkbookNamedItemEntityConfig,
    WorkbookTableEntityConfig,
    WorkbookWorksheetEntityConfig,
    WorkbookCommentEntityConfig,
    WorkbookFunctionsEntityConfig,
    WorkbookChartEntityConfig,
    WorkbookChartAxesEntityConfig,
    WorkbookChartDataLabelsEntityConfig,
    WorkbookChartAreaFormatEntityConfig,
    WorkbookChartLegendEntityConfig,
    WorkbookChartSeriesEntityConfig,
    WorkbookChartTitleEntityConfig,
    WorkbookChartFillEntityConfig,
    WorkbookChartFontEntityConfig,
    WorkbookChartAxisEntityConfig,
    WorkbookChartAxisFormatEntityConfig,
    WorkbookChartGridlinesEntityConfig,
    WorkbookChartAxisTitleEntityConfig,
    WorkbookChartLineFormatEntityConfig,
    WorkbookChartAxisTitleFormatEntityConfig,
    WorkbookChartDataLabelFormatEntityConfig,
    WorkbookChartGridlinesFormatEntityConfig,
    WorkbookChartLegendFormatEntityConfig,
    WorkbookChartPointEntityConfig,
    WorkbookChartPointFormatEntityConfig,
    WorkbookChartSeriesFormatEntityConfig,
    WorkbookChartTitleFormatEntityConfig,
    WorkbookCommentReplyEntityConfig,
    WorkbookFilterEntityConfig,
    WorkbookFormatProtectionEntityConfig,
    WorkbookFunctionResultEntityConfig,
    WorkbookPivotTableEntityConfig,
    WorkbookRangeEntityConfig,
    WorkbookRangeFormatEntityConfig,
    WorkbookRangeSortEntityConfig,
    WorkbookRangeBorderEntityConfig,
    WorkbookRangeFillEntityConfig,
    WorkbookRangeFontEntityConfig,
    WorkbookRangeViewEntityConfig,
    WorkbookTableColumnEntityConfig,
    WorkbookTableRowEntityConfig,
    WorkbookTableSortEntityConfig,
    WorkbookWorksheetProtectionEntityConfig,
    PlaceEntityConfig,
    RoomEntityConfig,
    RoomListEntityConfig,
    OutlookCategoryEntityConfig,
    SingleValueLegacyExtendedPropertyEntityConfig,
    MultiValueLegacyExtendedPropertyEntityConfig,
    AttachmentEntityConfig,
    CalendarSharingMessageEntityConfig,
    EventMessageEntityConfig,
    EventMessageRequestEntityConfig,
    EventMessageResponseEntityConfig,
    MessageRuleEntityConfig,
    MailSearchFolderEntityConfig,
    CalendarPermissionEntityConfig,
    InferenceClassificationOverrideEntityConfig,
    PostEntityConfig,
    FileAttachmentEntityConfig,
    ItemAttachmentEntityConfig,
    ReferenceAttachmentEntityConfig,
    OpenTypeExtensionEntityConfig,
    ColumnLinkEntityConfig,
    FieldValueSetEntityConfig,
    ItemActivityEntityConfig,
    ItemActivityStatEntityConfig,
    ListItemVersionEntityConfig,
    SharedDriveItemEntityConfig,
    SchemaExtensionEntityConfig,
    CloudCommunicationsEntityConfig,
    CallEntityConfig,
    DeviceAppManagementEntityConfig,
    ManagedEBookEntityConfig,
    MobileAppEntityConfig,
    MobileAppCategoryEntityConfig,
    ManagedDeviceMobileAppConfigurationEntityConfig,
    VppTokenEntityConfig,
    ManagedAppPolicyEntityConfig,
    ManagedAppProtectionEntityConfig,
    TargetedManagedAppProtectionEntityConfig,
    IosManagedAppProtectionEntityConfig,
    AndroidManagedAppProtectionEntityConfig,
    DefaultManagedAppProtectionEntityConfig,
    ManagedAppConfigurationEntityConfig,
    TargetedManagedAppConfigurationEntityConfig,
    WindowsInformationProtectionEntityConfig,
    MdmWindowsInformationProtectionPolicyEntityConfig,
    WindowsInformationProtectionPolicyEntityConfig,
    ManagedAppStatusEntityConfig,
    MobileAppAssignmentEntityConfig,
    MobileAppContentFileEntityConfig,
    ManagedDeviceMobileAppConfigurationAssignmentEntityConfig,
    ManagedDeviceMobileAppConfigurationDeviceStatusEntityConfig,
    ManagedDeviceMobileAppConfigurationUserStatusEntityConfig,
    ManagedDeviceMobileAppConfigurationDeviceSummaryEntityConfig,
    ManagedDeviceMobileAppConfigurationUserSummaryEntityConfig,
    MacOSOfficeSuiteAppEntityConfig,
    ManagedAppEntityConfig,
    ManagedAndroidStoreAppEntityConfig,
    ManagedIOSStoreAppEntityConfig,
    ManagedMobileLobAppEntityConfig,
    MobileAppContentEntityConfig,
    ManagedAndroidLobAppEntityConfig,
    ManagedIOSLobAppEntityConfig,
    MobileLobAppEntityConfig,
    WindowsMobileMSIEntityConfig,
    WindowsUniversalAppXEntityConfig,
    AndroidLobAppEntityConfig,
    IosLobAppEntityConfig,
    MicrosoftStoreForBusinessAppEntityConfig,
    WebAppEntityConfig,
    AndroidStoreAppEntityConfig,
    IosVppAppEntityConfig,
    IosStoreAppEntityConfig,
    IosMobileAppConfigurationEntityConfig,
    ManagedEBookAssignmentEntityConfig,
    EBookInstallSummaryEntityConfig,
    DeviceInstallStateEntityConfig,
    UserInstallStateSummaryEntityConfig,
    IosVppEBookAssignmentEntityConfig,
    IosVppEBookEntityConfig,
    DeviceManagementEntityConfig,
    TermsAndConditionsEntityConfig,
    DeviceConfigurationEntityConfig,
    DeviceCompliancePolicyEntityConfig,
    SoftwareUpdateStatusSummaryEntityConfig,
    DeviceCompliancePolicyDeviceStateSummaryEntityConfig,
    DeviceCompliancePolicySettingStateSummaryEntityConfig,
    DeviceConfigurationDeviceStateSummaryEntityConfig,
    IosUpdateDeviceStatusEntityConfig,
    DeviceCategoryEntityConfig,
    DeviceManagementExchangeConnectorEntityConfig,
    DeviceEnrollmentConfigurationEntityConfig,
    OnPremisesConditionalAccessSettingsEntityConfig,
    MobileThreatDefenseConnectorEntityConfig,
    DeviceManagementPartnerEntityConfig,
    ApplePushNotificationCertificateEntityConfig,
    ManagedDeviceOverviewEntityConfig,
    DetectedAppEntityConfig,
    NotificationMessageTemplateEntityConfig,
    RoleDefinitionEntityConfig,
    RoleAssignmentEntityConfig,
    DeviceAndAppManagementRoleAssignmentEntityConfig,
    ResourceOperationEntityConfig,
    RemoteAssistancePartnerEntityConfig,
    TelecomExpenseManagementPartnerEntityConfig,
    WindowsInformationProtectionAppLearningSummaryEntityConfig,
    WindowsInformationProtectionNetworkLearningSummaryEntityConfig,
    TermsAndConditionsAssignmentEntityConfig,
    TermsAndConditionsAcceptanceStatusEntityConfig,
    ReportRootEntityConfig,
    DeviceConfigurationAssignmentEntityConfig,
    DeviceConfigurationDeviceStatusEntityConfig,
    DeviceConfigurationUserStatusEntityConfig,
    DeviceConfigurationDeviceOverviewEntityConfig,
    DeviceConfigurationUserOverviewEntityConfig,
    SettingStateDeviceSummaryEntityConfig,
    DeviceCompliancePolicyAssignmentEntityConfig,
    DeviceComplianceScheduledActionForRuleEntityConfig,
    DeviceComplianceDeviceStatusEntityConfig,
    DeviceComplianceUserStatusEntityConfig,
    DeviceComplianceDeviceOverviewEntityConfig,
    DeviceComplianceUserOverviewEntityConfig,
    DeviceComplianceActionItemEntityConfig,
    AndroidCustomConfigurationEntityConfig,
    AndroidGeneralDeviceConfigurationEntityConfig,
    AndroidWorkProfileCustomConfigurationEntityConfig,
    AndroidWorkProfileGeneralDeviceConfigurationEntityConfig,
    IosCertificateProfileEntityConfig,
    IosCustomConfigurationEntityConfig,
    IosGeneralDeviceConfigurationEntityConfig,
    IosUpdateConfigurationEntityConfig,
    MacOSCustomConfigurationEntityConfig,
    MacOSGeneralDeviceConfigurationEntityConfig,
    AppleDeviceFeaturesConfigurationBaseEntityConfig,
    MacOSDeviceFeaturesConfigurationEntityConfig,
    IosDeviceFeaturesConfigurationEntityConfig,
    Windows10EndpointProtectionConfigurationEntityConfig,
    Windows10GeneralConfigurationEntityConfig,
    WindowsDefenderAdvancedThreatProtectionConfigurationEntityConfig,
    EditionUpgradeConfigurationEntityConfig,
    Windows10CustomConfigurationEntityConfig,
    Windows10EnterpriseModernAppManagementConfigurationEntityConfig,
    SharedPCConfigurationEntityConfig,
    Windows10SecureAssessmentConfigurationEntityConfig,
    WindowsPhone81CustomConfigurationEntityConfig,
    WindowsUpdateForBusinessConfigurationEntityConfig,
    Windows81GeneralConfigurationEntityConfig,
    WindowsPhone81GeneralConfigurationEntityConfig,
    Windows10TeamGeneralConfigurationEntityConfig,
    AndroidCompliancePolicyEntityConfig,
    AndroidWorkProfileCompliancePolicyEntityConfig,
    IosCompliancePolicyEntityConfig,
    MacOSCompliancePolicyEntityConfig,
    Windows10CompliancePolicyEntityConfig,
    Windows10MobileCompliancePolicyEntityConfig,
    Windows81CompliancePolicyEntityConfig,
    WindowsPhone81CompliancePolicyEntityConfig,
    DeviceComplianceSettingStateEntityConfig,
    DeviceConfigurationStateEntityConfig,
    DeviceCompliancePolicyStateEntityConfig,
    EnrollmentConfigurationAssignmentEntityConfig,
    DeviceEnrollmentLimitConfigurationEntityConfig,
    DeviceEnrollmentPlatformRestrictionsConfigurationEntityConfig,
    DeviceEnrollmentWindowsHelloForBusinessConfigurationEntityConfig,
    ManagedMobileAppEntityConfig,
    TargetedManagedAppPolicyAssignmentEntityConfig,
    ManagedAppOperationEntityConfig,
    ManagedAppPolicyDeploymentSummaryEntityConfig,
    WindowsInformationProtectionAppLockerFileEntityConfig,
    IosManagedAppRegistrationEntityConfig,
    AndroidManagedAppRegistrationEntityConfig,
    ManagedAppStatusRawEntityConfig,
    LocalizedNotificationMessageEntityConfig,
    DeviceAndAppManagementRoleDefinitionEntityConfig,
    EnrollmentTroubleshootingEventEntityConfig,
    PlannerTaskEntityConfig,
    PlannerPlanEntityConfig,
    PlannerEntityConfig,
    PlannerBucketEntityConfig,
    PlannerTaskDetailsEntityConfig,
    PlannerAssignedToTaskBoardTaskFormatEntityConfig,
    PlannerProgressTaskBoardTaskFormatEntityConfig,
    PlannerBucketTaskBoardTaskFormatEntityConfig,
    PlannerPlanDetailsEntityConfig,
    ChangeTrackedEntityEntityConfig,
    ShiftPreferencesEntityConfig,
    TrendingEntityConfig,
    SharedInsightEntityConfig,
    UsedInsightEntityConfig,
    OnenoteEntityBaseModelEntityConfig,
    OnenoteEntitySchemaObjectModelEntityConfig,
    OnenoteEntityHierarchyModelEntityConfig,
    NotebookEntityConfig,
    OnenoteSectionEntityConfig,
    SectionGroupEntityConfig,
    OnenotePageEntityConfig,
    OnenoteResourceEntityConfig,
    OperationEntityConfig,
    OnenoteOperationEntityConfig,
    DataPolicyOperationEntityConfig,
    ActivityHistoryItemEntityConfig,
    SecurityEntityConfig,
    AlertEntityConfig,
    SecureScoreControlProfileEntityConfig,
    SecureScoreEntityConfig,
    ParticipantEntityConfig,
    CommsOperationEntityConfig,
    InviteParticipantsOperationEntityConfig,
    MuteParticipantOperationEntityConfig,
    PlayPromptOperationEntityConfig,
    RecordOperationEntityConfig,
    SubscribeToToneOperationEntityConfig,
    UnmuteParticipantOperationEntityConfig,
    UpdateRecordingStatusOperationEntityConfig,
    TeamworkEntityConfig,
    WorkforceIntegrationEntityConfig,
    ScheduleEntityConfig,
    ChannelEntityConfig,
    TeamsAppInstallationEntityConfig,
    TeamsAsyncOperationEntityConfig,
    ChatMessageEntityConfig,
    ChatMessageHostedContentEntityConfig,
    AppCatalogsEntityConfig,
    TeamsAppEntityConfig,
    TeamsAppDefinitionEntityConfig,
    TeamsTabEntityConfig,
    ShiftEntityConfig,
    OpenShiftEntityConfig,
    TimeOffEntityConfig,
    TimeOffReasonEntityConfig,
    SchedulingGroupEntityConfig,
    ScheduleChangeRequestEntityConfig,
    OfferShiftRequestEntityConfig,
    SwapShiftsChangeRequestEntityConfig,
    OpenShiftChangeRequestEntityConfig,
    TimeOffRequestEntityConfig,
    InformationProtectionEntityConfig,
    ThreatAssessmentRequestEntityConfig,
    ThreatAssessmentResultEntityConfig,
    UrlAssessmentRequestEntityConfig,
    FileAssessmentRequestEntityConfig,
    EmailFileAssessmentRequestEntityConfig,
    MailAssessmentRequestEntityConfig],
  callables: [{
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.application', collection: true} },
    return: { type: 'graph.application', collection: true }
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.user', collection: true} },
    return: { type: 'graph.user', collection: true }
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.group', collection: true} },
    return: { type: 'graph.group', collection: true }
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.orgContact', collection: true} },
    return: { type: 'graph.orgContact', collection: true }
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.directoryRole', collection: true} },
    return: { type: 'graph.directoryRole', collection: true }
  }, {
    name: 'reminderView',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.user'}, StartDateTime: {type: 'Edm.String', nullable: false}, EndDateTime: {type: 'Edm.String'} },
    return: { type: 'graph.reminder', collection: true }
  }, {
    name: 'getManagedAppDiagnosticStatuses',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.user'} },
    return: { type: 'graph.managedAppDiagnosticStatus', collection: true }
  }, {
    name: 'getManagedAppPolicies',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.user'} },
    return: { type: 'graph.managedAppPolicy', collection: true }
  }, {
    name: 'image',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChart'} },
    return: { type: 'Edm.String', collection: false }
  }, {
    name: 'image',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChart'}, width: {type: 'Edm.Int32', nullable: false} },
    return: { type: 'Edm.String', collection: false }
  }, {
    name: 'image',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChart'}, width: {type: 'Edm.Int32', nullable: false}, height: {type: 'Edm.Int32', nullable: false} },
    return: { type: 'Edm.String', collection: false }
  }, {
    name: 'image',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChart'}, width: {type: 'Edm.Int32', nullable: false}, height: {type: 'Edm.Int32', nullable: false}, fittingMode: {type: 'Edm.String', nullable: false} },
    return: { type: 'Edm.String', collection: false }
  }, {
    name: 'item',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookChart', collection: true}, name: {type: 'Edm.String'} },
    return: { type: 'graph.workbookChart', collection: false }
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookChart', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: { type: 'graph.workbookChart', collection: false }
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChart', collection: true} },
    return: { type: 'Edm.Int32', collection: false }
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookChartPoint', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: { type: 'graph.workbookChartPoint', collection: false }
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChartPoint', collection: true} },
    return: { type: 'Edm.Int32', collection: false }
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookChartSeries', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: { type: 'graph.workbookChartSeries', collection: false }
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChartSeries', collection: true} },
    return: { type: 'Edm.Int32', collection: false }
  }, {
    name: 'range',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookNamedItem'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'boundingRect',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, anotherRange: {type: 'Edm.String'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'cell',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, row: {type: 'Edm.Int32', nullable: false}, column: {type: 'Edm.Int32', nullable: false} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'column',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, column: {type: 'Edm.Int32', nullable: false} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'columnsAfter',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'columnsAfter',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, count: {type: 'Edm.Int32'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'columnsBefore',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'columnsBefore',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, count: {type: 'Edm.Int32'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'entireColumn',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'entireRow',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'intersection',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, anotherRange: {type: 'Edm.String'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'lastCell',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'lastColumn',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'lastRow',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'offsetRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, rowOffset: {type: 'Edm.Int32', nullable: false}, columnOffset: {type: 'Edm.Int32', nullable: false} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'resizedRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, deltaRows: {type: 'Edm.Int32', nullable: false}, deltaColumns: {type: 'Edm.Int32', nullable: false} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'row',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, row: {type: 'Edm.Int32', nullable: false} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'rowsAbove',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'rowsAbove',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, count: {type: 'Edm.Int32'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'rowsBelow',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'rowsBelow',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, count: {type: 'Edm.Int32'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'usedRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'usedRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, valuesOnly: {type: 'Edm.Boolean', nullable: false} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'visibleView',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
    return: { type: 'graph.workbookRangeView', collection: false }
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRangeBorder', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: { type: 'graph.workbookRangeBorder', collection: false }
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRangeBorder', collection: true} },
    return: { type: 'Edm.Int32', collection: false }
  }, {
    name: 'range',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRangeView'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookRangeView', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: { type: 'graph.workbookRangeView', collection: false }
  }, {
    name: 'dataBodyRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTable'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'headerRowRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTable'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'range',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTable'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'totalRowRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTable'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTable', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: { type: 'graph.workbookTable', collection: false }
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTable', collection: true} },
    return: { type: 'Edm.Int32', collection: false }
  }, {
    name: 'dataBodyRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTableColumn'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'headerRowRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTableColumn'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'range',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTableColumn'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'totalRowRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTableColumn'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTableColumn', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: { type: 'graph.workbookTableColumn', collection: false }
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTableColumn', collection: true} },
    return: { type: 'Edm.Int32', collection: false }
  }, {
    name: 'range',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTableRow'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'itemAt',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookTableRow', collection: true}, index: {type: 'Edm.Int32', nullable: false} },
    return: { type: 'graph.workbookTableRow', collection: false }
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTableRow', collection: true} },
    return: { type: 'Edm.Int32', collection: false }
  }, {
    name: 'cell',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookWorksheet'}, row: {type: 'Edm.Int32', nullable: false}, column: {type: 'Edm.Int32', nullable: false} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'range',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookWorksheet'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'range',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookWorksheet'}, address: {type: 'Edm.String'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'usedRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookWorksheet'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'usedRange',
    bound: true,
    composable: true,
    parameters: { bindparameter: {type: 'graph.workbookWorksheet'}, valuesOnly: {type: 'Edm.Boolean', nullable: false} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.mailFolder', collection: true, nullable: false} },
    return: { type: 'graph.mailFolder', collection: true }
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.event', collection: true, nullable: false} },
    return: { type: 'graph.event', collection: true }
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.contact', collection: true, nullable: false} },
    return: { type: 'graph.contact', collection: true }
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.contactFolder', collection: true, nullable: false} },
    return: { type: 'graph.contactFolder', collection: true }
  }, {
    name: 'supportedLanguages',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.outlookUser'} },
    return: { type: 'graph.localeInfo', collection: true }
  }, {
    name: 'supportedTimeZones',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.outlookUser'} },
    return: { type: 'graph.timeZoneInformation', collection: true }
  }, {
    name: 'supportedTimeZones',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.outlookUser'}, TimeZoneStandard: {type: 'graph.timeZoneStandard', nullable: false} },
    return: { type: 'graph.timeZoneInformation', collection: true }
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.message', collection: true, nullable: false} },
    return: { type: 'graph.message', collection: true }
  }, {
    name: 'allowedCalendarSharingRoles',
    bound: true,
    composable: false,
    parameters: { bindingparameter: {type: 'graph.calendar'}, User: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.calendarRoleType', collection: true }
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.driveItem'}, token: {type: 'Edm.String'} },
    return: { type: 'graph.driveItem', collection: true }
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.driveItem'} },
    return: { type: 'graph.driveItem', collection: true }
  }, {
    name: 'getActivitiesByInterval',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.driveItem'} },
    return: { type: 'graph.itemActivityStat', collection: true }
  }, {
    name: 'getActivitiesByInterval',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.driveItem'}, startDateTime: {type: 'Edm.String'}, endDateTime: {type: 'Edm.String'}, interval: {type: 'Edm.String'} },
    return: { type: 'graph.itemActivityStat', collection: true }
  }, {
    name: 'search',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.driveItem'}, q: {type: 'Edm.String'} },
    return: { type: 'graph.driveItem', collection: true }
  }, {
    name: 'getActivitiesByInterval',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.listItem'} },
    return: { type: 'graph.itemActivityStat', collection: true }
  }, {
    name: 'getActivitiesByInterval',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.listItem'}, startDateTime: {type: 'Edm.String'}, endDateTime: {type: 'Edm.String'}, interval: {type: 'Edm.String'} },
    return: { type: 'graph.itemActivityStat', collection: true }
  }, {
    name: 'getActivitiesByInterval',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.site'} },
    return: { type: 'graph.itemActivityStat', collection: true }
  }, {
    name: 'getActivitiesByInterval',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.site'}, startDateTime: {type: 'Edm.String'}, endDateTime: {type: 'Edm.String'}, interval: {type: 'Edm.String'} },
    return: { type: 'graph.itemActivityStat', collection: true }
  }, {
    name: 'getByPath',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.site'}, path: {type: 'Edm.String'} },
    return: { type: 'graph.site', collection: false }
  }, {
    name: 'recent',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.drive'} },
    return: { type: 'graph.driveItem', collection: true }
  }, {
    name: 'search',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.drive'}, q: {type: 'Edm.String'} },
    return: { type: 'graph.driveItem', collection: true }
  }, {
    name: 'sharedWithMe',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.drive'} },
    return: { type: 'graph.driveItem', collection: true }
  }, {
    name: 'deviceConfigurationUserActivity',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'deviceConfigurationDeviceActivity',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'managedDeviceEnrollmentFailureDetails',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.reportRoot'} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'managedDeviceEnrollmentFailureDetails',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, skip: {type: 'Edm.Int32'}, top: {type: 'Edm.Int32'}, filter: {type: 'Edm.String'}, skipToken: {type: 'Edm.String'} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'managedDeviceEnrollmentTopFailures',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.reportRoot'} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'managedDeviceEnrollmentTopFailures',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String'} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOffice365ActivationsUserDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOffice365ActivationCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOffice365ActivationsUserCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOffice365ActiveUserDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, date: {type: 'Edm.Date', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOffice365ActiveUserDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOffice365ServicesUserCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOffice365ActiveUserCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOffice365GroupsActivityDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, date: {type: 'Edm.Date', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOffice365GroupsActivityDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOffice365GroupsActivityCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOffice365GroupsActivityGroupCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOffice365GroupsActivityStorage',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOffice365GroupsActivityFileCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getEmailActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, date: {type: 'Edm.Date', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getEmailActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getEmailActivityCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getEmailActivityUserCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getEmailAppUsageUserDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, date: {type: 'Edm.Date', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getEmailAppUsageUserDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getEmailAppUsageAppsUserCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getEmailAppUsageUserCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getEmailAppUsageVersionsUserCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getMailboxUsageDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getMailboxUsageMailboxCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getMailboxUsageQuotaStatusMailboxCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getMailboxUsageStorage',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOneDriveActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, date: {type: 'Edm.Date', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOneDriveActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOneDriveActivityUserCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOneDriveActivityFileCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOneDriveUsageAccountDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, date: {type: 'Edm.Date', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOneDriveUsageAccountDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOneDriveUsageAccountCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOneDriveUsageFileCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getOneDriveUsageStorage',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSharePointActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, date: {type: 'Edm.Date', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSharePointActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSharePointActivityFileCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSharePointActivityUserCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSharePointActivityPages',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSharePointSiteUsageDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, date: {type: 'Edm.Date', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSharePointSiteUsageDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSharePointSiteUsageFileCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSharePointSiteUsageSiteCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSharePointSiteUsageStorage',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSharePointSiteUsagePages',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSkypeForBusinessActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, date: {type: 'Edm.Date', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSkypeForBusinessActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSkypeForBusinessActivityCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSkypeForBusinessActivityUserCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSkypeForBusinessPeerToPeerActivityCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSkypeForBusinessPeerToPeerActivityUserCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSkypeForBusinessPeerToPeerActivityMinuteCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSkypeForBusinessOrganizerActivityCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSkypeForBusinessOrganizerActivityUserCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSkypeForBusinessOrganizerActivityMinuteCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSkypeForBusinessParticipantActivityCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSkypeForBusinessParticipantActivityUserCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSkypeForBusinessParticipantActivityMinuteCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSkypeForBusinessDeviceUsageUserDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, date: {type: 'Edm.Date', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSkypeForBusinessDeviceUsageUserDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSkypeForBusinessDeviceUsageDistributionUserCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getSkypeForBusinessDeviceUsageUserCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getYammerActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, date: {type: 'Edm.Date', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getYammerActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getYammerActivityCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getYammerActivityUserCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getYammerDeviceUsageUserDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, date: {type: 'Edm.Date', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getYammerDeviceUsageUserDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getYammerDeviceUsageDistributionUserCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getYammerDeviceUsageUserCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getYammerGroupsActivityDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, date: {type: 'Edm.Date', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getYammerGroupsActivityDetail',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getYammerGroupsActivityGroupCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getYammerGroupsActivityCounts',
    bound: true,
    composable: true,
    parameters: { bindingParameter: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getTeamsUserActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { reportRoot: {type: 'graph.reportRoot'}, date: {type: 'Edm.Date', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getTeamsUserActivityUserDetail',
    bound: true,
    composable: true,
    parameters: { reportRoot: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getTeamsUserActivityCounts',
    bound: true,
    composable: true,
    parameters: { reportRoot: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getTeamsUserActivityUserCounts',
    bound: true,
    composable: true,
    parameters: { reportRoot: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getTeamsDeviceUsageUserDetail',
    bound: true,
    composable: true,
    parameters: { reportRoot: {type: 'graph.reportRoot'}, date: {type: 'Edm.Date', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getTeamsDeviceUsageUserDetail',
    bound: true,
    composable: true,
    parameters: { reportRoot: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getTeamsDeviceUsageUserCounts',
    bound: true,
    composable: true,
    parameters: { reportRoot: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'getTeamsDeviceUsageDistributionUserCounts',
    bound: true,
    composable: true,
    parameters: { reportRoot: {type: 'graph.reportRoot'}, period: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.report', collection: false }
  }, {
    name: 'verifyWindowsEnrollmentAutoDiscovery',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.deviceManagement'}, domainName: {type: 'Edm.String'} },
    return: { type: 'Edm.Boolean', collection: false }
  }, {
    name: 'getEffectivePermissions',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.deviceManagement'}, scope: {type: 'Edm.String'} },
    return: { type: 'graph.rolePermission', collection: true }
  }, {
    name: 'downloadApplePushNotificationCertificateSigningRequest',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.applePushNotificationCertificate'} },
    return: { type: 'Edm.String', collection: false }
  }, {
    name: 'getUserIdsWithFlaggedAppRegistration',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedAppRegistration', collection: true} },
    return: { type: 'Edm.String', collection: true }
  }, {
    name: 'preview',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.onenotePage'} },
    return: { type: 'graph.onenotePagePreview', collection: false }
  }, {
    name: 'getRecentNotebooks',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.notebook', collection: true}, includePersonalNotebooks: {type: 'Edm.Boolean', nullable: false} },
    return: { type: 'graph.recentNotebook', collection: true }
  }, {
    name: 'recent',
    entitySetPath: 'activities',
    bound: true,
    composable: false,
    parameters: { activities: {type: 'graph.userActivity', collection: true} },
    return: { type: 'graph.userActivity', collection: true }
  }, {
    name: 'getByIds',
    entitySetPath: 'bindingParameter',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.directoryObject', collection: true, nullable: false}, ids: {type: 'Edm.String', collection: true, nullable: false}, types: {type: 'Edm.String', collection: true} },
    return: { type: 'graph.directoryObject', collection: true }
  }, {
    name: 'validateProperties',
    entitySetPath: 'bindingParameter',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.directoryObject', collection: true, nullable: false}, entityType: {type: 'Edm.String'}, displayName: {type: 'Edm.String'}, mailNickname: {type: 'Edm.String'}, onBehalfOfUserId: {type: 'Edm.Guid'} },
  }, {
    name: 'addKey',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.application', nullable: false}, keyCredential: {type: 'graph.keyCredential', nullable: false}, passwordCredential: {type: 'graph.passwordCredential'}, proof: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.keyCredential', collection: false }
  }, {
    name: 'addPassword',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.application', nullable: false}, passwordCredential: {type: 'graph.passwordCredential'} },
    return: { type: 'graph.passwordCredential', collection: false }
  }, {
    name: 'removeKey',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.application', nullable: false}, keyId: {type: 'Edm.Guid', nullable: false}, proof: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'removePassword',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.application', nullable: false}, keyId: {type: 'Edm.Guid', nullable: false} },
  }, {
    name: 'addKey',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.servicePrincipal', nullable: false}, keyCredential: {type: 'graph.keyCredential', nullable: false}, passwordCredential: {type: 'graph.passwordCredential'}, proof: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.keyCredential', collection: false }
  }, {
    name: 'addPassword',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.servicePrincipal', nullable: false}, passwordCredential: {type: 'graph.passwordCredential'} },
    return: { type: 'graph.passwordCredential', collection: false }
  }, {
    name: 'removeKey',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.servicePrincipal', nullable: false}, keyId: {type: 'Edm.Guid', nullable: false}, proof: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'removePassword',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.servicePrincipal', nullable: false}, keyId: {type: 'Edm.Guid', nullable: false} },
  }, {
    name: 'checkMemberGroups',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.directoryObject', nullable: false}, groupIds: {type: 'Edm.String', collection: true, nullable: false} },
    return: { type: 'Edm.String', collection: true }
  }, {
    name: 'checkMemberObjects',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.directoryObject', nullable: false}, ids: {type: 'Edm.String', collection: true, nullable: false} },
    return: { type: 'Edm.String', collection: true }
  }, {
    name: 'getMemberGroups',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.directoryObject', nullable: false}, securityEnabledOnly: {type: 'Edm.Boolean'} },
    return: { type: 'Edm.String', collection: true }
  }, {
    name: 'getMemberObjects',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.directoryObject', nullable: false}, securityEnabledOnly: {type: 'Edm.Boolean'} },
    return: { type: 'Edm.String', collection: true }
  }, {
    name: 'restore',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.directoryObject', nullable: false} },
    return: { type: 'graph.directoryObject', collection: false }
  }, {
    name: 'forceDelete',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.domain', nullable: false}, disableUserAccounts: {type: 'Edm.Boolean'} },
  }, {
    name: 'verify',
    entitySetPath: 'bindingParameter',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.domain', nullable: false} },
    return: { type: 'graph.domain', collection: false }
  }, {
    name: 'assignLicense',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.user', nullable: false}, addLicenses: {type: 'graph.assignedLicense', collection: true, nullable: false}, removeLicenses: {type: 'Edm.Guid', collection: true, nullable: false} },
    return: { type: 'graph.user', collection: false }
  }, {
    name: 'changePassword',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.user', nullable: false}, currentPassword: {type: 'Edm.String'}, newPassword: {type: 'Edm.String'} },
  }, {
    name: 'revokeSignInSessions',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.user', nullable: false} },
    return: { type: 'Edm.Boolean', collection: false }
  }, {
    name: 'reprocessLicenseAssignment',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.user', nullable: false} },
    return: { type: 'graph.user', collection: false }
  }, {
    name: 'findMeetingTimes',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.user'}, attendees: {type: 'graph.attendeeBase', collection: true}, locationConstraint: {type: 'graph.locationConstraint'}, timeConstraint: {type: 'graph.timeConstraint'}, meetingDuration: {type: 'Edm.Duration'}, maxCandidates: {type: 'Edm.Int32'}, isOrganizerOptional: {type: 'Edm.Boolean'}, returnSuggestionReasons: {type: 'Edm.Boolean'}, minimumAttendeePercentage: {type: 'Edm.Double'} },
    return: { type: 'graph.meetingTimeSuggestionsResult', collection: false }
  }, {
    name: 'sendMail',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.user'}, Message: {type: 'graph.message', nullable: false}, SaveToSentItems: {type: 'Edm.Boolean'} },
  }, {
    name: 'getMailTips',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.user'}, EmailAddresses: {type: 'Edm.String', collection: true, nullable: false}, MailTipsOptions: {type: 'graph.mailTipsType'} },
    return: { type: 'graph.mailTips', collection: true }
  }, {
    name: 'translateExchangeIds',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.user'}, InputIds: {type: 'Edm.String', collection: true, nullable: false}, TargetIdType: {type: 'graph.exchangeIdFormat', nullable: false}, SourceIdType: {type: 'graph.exchangeIdFormat', nullable: false} },
    return: { type: 'graph.convertIdResult', collection: true }
  }, {
    name: 'removeAllDevicesFromManagement',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.user'} },
  }, {
    name: 'wipeManagedAppRegistrationsByDeviceTag',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.user'}, deviceTag: {type: 'Edm.String'} },
  }, {
    name: 'exportPersonalData',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.user'}, storageLocation: {type: 'Edm.String'} },
  }, {
    name: 'assignLicense',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.group', nullable: false}, addLicenses: {type: 'graph.assignedLicense', collection: true, nullable: false}, removeLicenses: {type: 'Edm.Guid', collection: true, nullable: false} },
    return: { type: 'graph.group', collection: false }
  }, {
    name: 'validateProperties',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.group', nullable: false}, displayName: {type: 'Edm.String'}, mailNickname: {type: 'Edm.String'}, onBehalfOfUserId: {type: 'Edm.Guid'} },
  }, {
    name: 'subscribeByMail',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.group'} },
  }, {
    name: 'unsubscribeByMail',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.group'} },
  }, {
    name: 'addFavorite',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.group'} },
  }, {
    name: 'removeFavorite',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.group'} },
  }, {
    name: 'resetUnseenCount',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.group'} },
  }, {
    name: 'renew',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.group'} },
  }, {
    name: 'createSession',
    bound: true,
    composable: false,
    parameters: { this: {type: 'graph.workbook'}, persistChanges: {type: 'Edm.Boolean', nullable: false} },
    return: { type: 'graph.workbookSessionInfo', collection: false }
  }, {
    name: 'closeSession',
    bound: true,
    composable: false,
    parameters: { this: {type: 'graph.workbook'} },
  }, {
    name: 'refreshSession',
    bound: true,
    composable: false,
    parameters: { this: {type: 'graph.workbook'} },
  }, {
    name: 'calculate',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookApplication'}, calculationType: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'setData',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChart'}, sourceData: {type: 'graph.Json'}, seriesBy: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'setPosition',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChart'}, startCell: {type: 'graph.Json'}, endCell: {type: 'graph.Json'} },
  }, {
    name: 'add',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChart', collection: true}, type: {type: 'Edm.String', nullable: false}, sourceData: {type: 'graph.Json'}, seriesBy: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.workbookChart', collection: false }
  }, {
    name: 'clear',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChartFill'} },
  }, {
    name: 'setSolidColor',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChartFill'}, color: {type: 'Edm.String'} },
  }, {
    name: 'clear',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookChartLineFormat'} },
  }, {
    name: 'apply',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, criteria: {type: 'graph.workbookFilterCriteria'} },
  }, {
    name: 'applyBottomItemsFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, count: {type: 'Edm.Int32', nullable: false} },
  }, {
    name: 'applyBottomPercentFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, percent: {type: 'Edm.Int32', nullable: false} },
  }, {
    name: 'applyCellColorFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, color: {type: 'Edm.String'} },
  }, {
    name: 'applyCustomFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, criteria1: {type: 'Edm.String'}, criteria2: {type: 'Edm.String'}, oper: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'applyDynamicFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, criteria: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'applyFontColorFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, color: {type: 'Edm.String'} },
  }, {
    name: 'applyIconFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, icon: {type: 'graph.workbookIcon'} },
  }, {
    name: 'applyTopItemsFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, count: {type: 'Edm.Int32', nullable: false} },
  }, {
    name: 'applyTopPercentFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, percent: {type: 'Edm.Int32', nullable: false} },
  }, {
    name: 'applyValuesFilter',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'}, values: {type: 'graph.Json'} },
  }, {
    name: 'clear',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFilter'} },
  }, {
    name: 'abs',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'accrInt',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, issue: {type: 'graph.Json'}, firstInterest: {type: 'graph.Json'}, settlement: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, par: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'}, calcMethod: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'accrIntM',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, issue: {type: 'graph.Json'}, settlement: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, par: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'acos',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'acosh',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'acot',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'acoth',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'amorDegrc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, cost: {type: 'graph.Json'}, datePurchased: {type: 'graph.Json'}, firstPeriod: {type: 'graph.Json'}, salvage: {type: 'graph.Json'}, period: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'amorLinc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, cost: {type: 'graph.Json'}, datePurchased: {type: 'graph.Json'}, firstPeriod: {type: 'graph.Json'}, salvage: {type: 'graph.Json'}, period: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'and',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'arabic',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'areas',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, reference: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'asc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'asin',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'asinh',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'atan',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'atan2',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, xNum: {type: 'graph.Json'}, yNum: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'atanh',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'aveDev',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'average',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'averageA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'averageIf',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, range: {type: 'graph.Json'}, criteria: {type: 'graph.Json'}, averageRange: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'averageIfs',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, averageRange: {type: 'graph.Json'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'bahtText',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'base',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, radix: {type: 'graph.Json'}, minLength: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'besselI',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, n: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'besselJ',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, n: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'besselK',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, n: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'besselY',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, n: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'beta_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, alpha: {type: 'graph.Json'}, beta: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'}, A: {type: 'graph.Json'}, B: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'beta_Inv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, alpha: {type: 'graph.Json'}, beta: {type: 'graph.Json'}, A: {type: 'graph.Json'}, B: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'bin2Dec',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'bin2Hex',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, places: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'bin2Oct',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, places: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'binom_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, numberS: {type: 'graph.Json'}, trials: {type: 'graph.Json'}, probabilityS: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'binom_Dist_Range',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, trials: {type: 'graph.Json'}, probabilityS: {type: 'graph.Json'}, numberS: {type: 'graph.Json'}, numberS2: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'binom_Inv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, trials: {type: 'graph.Json'}, probabilityS: {type: 'graph.Json'}, alpha: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'bitand',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number1: {type: 'graph.Json'}, number2: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'bitlshift',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, shiftAmount: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'bitor',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number1: {type: 'graph.Json'}, number2: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'bitrshift',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, shiftAmount: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'bitxor',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number1: {type: 'graph.Json'}, number2: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'ceiling_Math',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, significance: {type: 'graph.Json'}, mode: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'ceiling_Precise',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, significance: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'char',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'chiSq_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, degFreedom: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'chiSq_Dist_RT',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, degFreedom: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'chiSq_Inv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, degFreedom: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'chiSq_Inv_RT',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, degFreedom: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'choose',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, indexNum: {type: 'graph.Json'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'clean',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'code',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'columns',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'combin',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, numberChosen: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'combina',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, numberChosen: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'complex',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, realNum: {type: 'graph.Json'}, iNum: {type: 'graph.Json'}, suffix: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'concatenate',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'confidence_Norm',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, alpha: {type: 'graph.Json'}, standardDev: {type: 'graph.Json'}, size: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'confidence_T',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, alpha: {type: 'graph.Json'}, standardDev: {type: 'graph.Json'}, size: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'convert',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, fromUnit: {type: 'graph.Json'}, toUnit: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'cos',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'cosh',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'cot',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'coth',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'count',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'countA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'countBlank',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, range: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'countIf',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, range: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'countIfs',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'coupDayBs',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'coupDays',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'coupDaysNc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'coupNcd',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'coupNum',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'coupPcd',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'csc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'csch',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'cumIPmt',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, nper: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, startPeriod: {type: 'graph.Json'}, endPeriod: {type: 'graph.Json'}, type: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'cumPrinc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, nper: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, startPeriod: {type: 'graph.Json'}, endPeriod: {type: 'graph.Json'}, type: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'daverage',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'dcount',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'dcountA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'dget',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'dmax',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'dmin',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'dproduct',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'dstDev',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'dstDevP',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'dsum',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'dvar',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'dvarP',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, database: {type: 'graph.Json'}, field: {type: 'graph.Json'}, criteria: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'date',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, year: {type: 'graph.Json'}, month: {type: 'graph.Json'}, day: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'datevalue',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, dateText: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'day',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, serialNumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'days',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, endDate: {type: 'graph.Json'}, startDate: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'days360',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, startDate: {type: 'graph.Json'}, endDate: {type: 'graph.Json'}, method: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'db',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, cost: {type: 'graph.Json'}, salvage: {type: 'graph.Json'}, life: {type: 'graph.Json'}, period: {type: 'graph.Json'}, month: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'dbcs',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'ddb',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, cost: {type: 'graph.Json'}, salvage: {type: 'graph.Json'}, life: {type: 'graph.Json'}, period: {type: 'graph.Json'}, factor: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'dec2Bin',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, places: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'dec2Hex',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, places: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'dec2Oct',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, places: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'decimal',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, radix: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'degrees',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, angle: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'delta',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number1: {type: 'graph.Json'}, number2: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'devSq',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'disc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, pr: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'dollar',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, decimals: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'dollarDe',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, fractionalDollar: {type: 'graph.Json'}, fraction: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'dollarFr',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, decimalDollar: {type: 'graph.Json'}, fraction: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'duration',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, coupon: {type: 'graph.Json'}, yld: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'ecma_Ceiling',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, significance: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'edate',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, startDate: {type: 'graph.Json'}, months: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'effect',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, nominalRate: {type: 'graph.Json'}, npery: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'eoMonth',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, startDate: {type: 'graph.Json'}, months: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'erf',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, lowerLimit: {type: 'graph.Json'}, upperLimit: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'erfC',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'erfC_Precise',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, X: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'erf_Precise',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, X: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'error_Type',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, errorVal: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'even',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'exact',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text1: {type: 'graph.Json'}, text2: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'exp',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'expon_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, lambda: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'fvschedule',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, principal: {type: 'graph.Json'}, schedule: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'f_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, degFreedom1: {type: 'graph.Json'}, degFreedom2: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'f_Dist_RT',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, degFreedom1: {type: 'graph.Json'}, degFreedom2: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'f_Inv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, degFreedom1: {type: 'graph.Json'}, degFreedom2: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'f_Inv_RT',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, degFreedom1: {type: 'graph.Json'}, degFreedom2: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'fact',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'factDouble',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'false',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'find',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, findText: {type: 'graph.Json'}, withinText: {type: 'graph.Json'}, startNum: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'findB',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, findText: {type: 'graph.Json'}, withinText: {type: 'graph.Json'}, startNum: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'fisher',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'fisherInv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, y: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'fixed',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, decimals: {type: 'graph.Json'}, noCommas: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'floor_Math',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, significance: {type: 'graph.Json'}, mode: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'floor_Precise',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, significance: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'fv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, nper: {type: 'graph.Json'}, pmt: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, type: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'gamma',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'gammaLn',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'gammaLn_Precise',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'gamma_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, alpha: {type: 'graph.Json'}, beta: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'gamma_Inv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, alpha: {type: 'graph.Json'}, beta: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'gauss',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'gcd',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'geStep',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, step: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'geoMean',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'hlookup',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, lookupValue: {type: 'graph.Json'}, tableArray: {type: 'graph.Json'}, rowIndexNum: {type: 'graph.Json'}, rangeLookup: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'harMean',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'hex2Bin',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, places: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'hex2Dec',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'hex2Oct',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, places: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'hour',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, serialNumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'hypGeom_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, sampleS: {type: 'graph.Json'}, numberSample: {type: 'graph.Json'}, populationS: {type: 'graph.Json'}, numberPop: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'hyperlink',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, linkLocation: {type: 'graph.Json'}, friendlyName: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'iso_Ceiling',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, significance: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'if',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, logicalTest: {type: 'graph.Json'}, valueIfTrue: {type: 'graph.Json'}, valueIfFalse: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imAbs',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imArgument',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imConjugate',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imCos',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imCosh',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imCot',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imCsc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imCsch',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imDiv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber1: {type: 'graph.Json'}, inumber2: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imExp',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imLn',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imLog10',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imLog2',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imPower',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imProduct',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imReal',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imSec',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imSech',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imSin',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imSinh',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imSqrt',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imSub',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber1: {type: 'graph.Json'}, inumber2: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imSum',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imTan',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'imaginary',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, inumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'int',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'intRate',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, investment: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'ipmt',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, per: {type: 'graph.Json'}, nper: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, fv: {type: 'graph.Json'}, type: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'irr',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'}, guess: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'isErr',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'isError',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'isEven',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'isFormula',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, reference: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'isLogical',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'isNA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'isNonText',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'isNumber',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'isOdd',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'isText',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'isoWeekNum',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, date: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'ispmt',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, per: {type: 'graph.Json'}, nper: {type: 'graph.Json'}, pv: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'isref',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'kurt',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'large',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, k: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'lcm',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'left',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'}, numChars: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'leftb',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'}, numBytes: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'len',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'lenb',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'ln',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'log',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, base: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'log10',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'logNorm_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, mean: {type: 'graph.Json'}, standardDev: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'logNorm_Inv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, mean: {type: 'graph.Json'}, standardDev: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'lookup',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, lookupValue: {type: 'graph.Json'}, lookupVector: {type: 'graph.Json'}, resultVector: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'lower',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'mduration',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, coupon: {type: 'graph.Json'}, yld: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'mirr',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'}, financeRate: {type: 'graph.Json'}, reinvestRate: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'mround',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, multiple: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'match',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, lookupValue: {type: 'graph.Json'}, lookupArray: {type: 'graph.Json'}, matchType: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'max',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'maxA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'median',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'mid',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'}, startNum: {type: 'graph.Json'}, numChars: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'midb',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'}, startNum: {type: 'graph.Json'}, numBytes: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'min',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'minA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'minute',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, serialNumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'mod',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, divisor: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'month',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, serialNumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'multiNomial',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'n',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'nper',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, pmt: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, fv: {type: 'graph.Json'}, type: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'na',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'negBinom_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, numberF: {type: 'graph.Json'}, numberS: {type: 'graph.Json'}, probabilityS: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'networkDays',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, startDate: {type: 'graph.Json'}, endDate: {type: 'graph.Json'}, holidays: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'networkDays_Intl',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, startDate: {type: 'graph.Json'}, endDate: {type: 'graph.Json'}, weekend: {type: 'graph.Json'}, holidays: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'nominal',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, effectRate: {type: 'graph.Json'}, npery: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'norm_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, mean: {type: 'graph.Json'}, standardDev: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'norm_Inv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, mean: {type: 'graph.Json'}, standardDev: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'norm_S_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, z: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'norm_S_Inv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'not',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, logical: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'now',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'npv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'numberValue',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'}, decimalSeparator: {type: 'graph.Json'}, groupSeparator: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'oct2Bin',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, places: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'oct2Dec',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'oct2Hex',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, places: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'odd',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'oddFPrice',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, issue: {type: 'graph.Json'}, firstCoupon: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, yld: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'oddFYield',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, issue: {type: 'graph.Json'}, firstCoupon: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, pr: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'oddLPrice',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, lastInterest: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, yld: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'oddLYield',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, lastInterest: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, pr: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'or',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'pduration',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, fv: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'percentRank_Exc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, x: {type: 'graph.Json'}, significance: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'percentRank_Inc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, x: {type: 'graph.Json'}, significance: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'percentile_Exc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, k: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'percentile_Inc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, k: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'permut',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, numberChosen: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'permutationa',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, numberChosen: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'phi',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'pi',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'pmt',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, nper: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, fv: {type: 'graph.Json'}, type: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'poisson_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, mean: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'power',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, power: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'ppmt',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, per: {type: 'graph.Json'}, nper: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, fv: {type: 'graph.Json'}, type: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'price',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, yld: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'priceDisc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, discount: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'priceMat',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, issue: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, yld: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'product',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'proper',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'pv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, nper: {type: 'graph.Json'}, pmt: {type: 'graph.Json'}, fv: {type: 'graph.Json'}, type: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'quartile_Exc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, quart: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'quartile_Inc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, quart: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'quotient',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, numerator: {type: 'graph.Json'}, denominator: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'radians',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, angle: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'rand',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'randBetween',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, bottom: {type: 'graph.Json'}, top: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'rank_Avg',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, ref: {type: 'graph.Json'}, order: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'rank_Eq',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, ref: {type: 'graph.Json'}, order: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'rate',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, nper: {type: 'graph.Json'}, pmt: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, fv: {type: 'graph.Json'}, type: {type: 'graph.Json'}, guess: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'received',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, investment: {type: 'graph.Json'}, discount: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'replace',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, oldText: {type: 'graph.Json'}, startNum: {type: 'graph.Json'}, numChars: {type: 'graph.Json'}, newText: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'replaceB',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, oldText: {type: 'graph.Json'}, startNum: {type: 'graph.Json'}, numBytes: {type: 'graph.Json'}, newText: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'rept',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'}, numberTimes: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'right',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'}, numChars: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'rightb',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'}, numBytes: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'roman',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, form: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'round',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, numDigits: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'roundDown',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, numDigits: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'roundUp',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, numDigits: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'rows',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'rri',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, nper: {type: 'graph.Json'}, pv: {type: 'graph.Json'}, fv: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'sec',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'sech',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'second',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, serialNumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'seriesSum',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, n: {type: 'graph.Json'}, m: {type: 'graph.Json'}, coefficients: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'sheet',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'sheets',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, reference: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'sign',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'sin',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'sinh',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'skew',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'skew_p',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'sln',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, cost: {type: 'graph.Json'}, salvage: {type: 'graph.Json'}, life: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'small',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, k: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'sqrt',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'sqrtPi',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'stDevA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'stDevPA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'stDev_P',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'stDev_S',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'standardize',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, mean: {type: 'graph.Json'}, standardDev: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'substitute',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'}, oldText: {type: 'graph.Json'}, newText: {type: 'graph.Json'}, instanceNum: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'subtotal',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, functionNum: {type: 'graph.Json'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'sum',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'sumIf',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, range: {type: 'graph.Json'}, criteria: {type: 'graph.Json'}, sumRange: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'sumIfs',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, sumRange: {type: 'graph.Json'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'sumSq',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'syd',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, cost: {type: 'graph.Json'}, salvage: {type: 'graph.Json'}, life: {type: 'graph.Json'}, per: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 't',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'tbillEq',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, discount: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'tbillPrice',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, discount: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'tbillYield',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, pr: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 't_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, degFreedom: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 't_Dist_2T',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, degFreedom: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 't_Dist_RT',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, degFreedom: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 't_Inv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, degFreedom: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 't_Inv_2T',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, probability: {type: 'graph.Json'}, degFreedom: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'tan',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'tanh',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'text',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'}, formatText: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'time',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, hour: {type: 'graph.Json'}, minute: {type: 'graph.Json'}, second: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'timevalue',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, timeText: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'today',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'trim',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'trimMean',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, percent: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'true',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'trunc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, numDigits: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'type',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, value: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'usdollar',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'}, decimals: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'unichar',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, number: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'unicode',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'upper',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'vlookup',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, lookupValue: {type: 'graph.Json'}, tableArray: {type: 'graph.Json'}, colIndexNum: {type: 'graph.Json'}, rangeLookup: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'value',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, text: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'varA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'varPA',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'var_P',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'var_S',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'vdb',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, cost: {type: 'graph.Json'}, salvage: {type: 'graph.Json'}, life: {type: 'graph.Json'}, startPeriod: {type: 'graph.Json'}, endPeriod: {type: 'graph.Json'}, factor: {type: 'graph.Json'}, noSwitch: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'weekNum',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, serialNumber: {type: 'graph.Json'}, returnType: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'weekday',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, serialNumber: {type: 'graph.Json'}, returnType: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'weibull_Dist',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, x: {type: 'graph.Json'}, alpha: {type: 'graph.Json'}, beta: {type: 'graph.Json'}, cumulative: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'workDay',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, startDate: {type: 'graph.Json'}, days: {type: 'graph.Json'}, holidays: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'workDay_Intl',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, startDate: {type: 'graph.Json'}, days: {type: 'graph.Json'}, weekend: {type: 'graph.Json'}, holidays: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'xirr',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'}, dates: {type: 'graph.Json'}, guess: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'xnpv',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, rate: {type: 'graph.Json'}, values: {type: 'graph.Json'}, dates: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'xor',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'year',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, serialNumber: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'yearFrac',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, startDate: {type: 'graph.Json'}, endDate: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'yield',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, pr: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, frequency: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'yieldDisc',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, pr: {type: 'graph.Json'}, redemption: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'yieldMat',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, settlement: {type: 'graph.Json'}, maturity: {type: 'graph.Json'}, issue: {type: 'graph.Json'}, rate: {type: 'graph.Json'}, pr: {type: 'graph.Json'}, basis: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'z_Test',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookFunctions'}, array: {type: 'graph.Json'}, x: {type: 'graph.Json'}, sigma: {type: 'graph.Json'} },
    return: { type: 'graph.workbookFunctionResult', collection: false }
  }, {
    name: 'add',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookNamedItem', collection: true}, name: {type: 'Edm.String'}, reference: {type: 'graph.Json'}, comment: {type: 'Edm.String'} },
    return: { type: 'graph.workbookNamedItem', collection: false }
  }, {
    name: 'addFormulaLocal',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookNamedItem', collection: true}, name: {type: 'Edm.String'}, formula: {type: 'Edm.String'}, comment: {type: 'Edm.String'} },
    return: { type: 'graph.workbookNamedItem', collection: false }
  }, {
    name: 'refresh',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookPivotTable'} },
  }, {
    name: 'refreshAll',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookPivotTable', collection: true} },
  }, {
    name: 'clear',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, applyTo: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'delete',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, shift: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'insert',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, shift: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'merge',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRange'}, across: {type: 'Edm.Boolean', nullable: false} },
  }, {
    name: 'unmerge',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRange'} },
  }, {
    name: 'clear',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRangeFill'} },
  }, {
    name: 'autofitColumns',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRangeFormat'} },
  }, {
    name: 'autofitRows',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRangeFormat'} },
  }, {
    name: 'apply',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookRangeSort'}, fields: {type: 'graph.workbookSortField', collection: true}, matchCase: {type: 'Edm.Boolean', nullable: false}, hasHeaders: {type: 'Edm.Boolean', nullable: false}, orientation: {type: 'Edm.String', nullable: false}, method: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'clearFilters',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTable'} },
  }, {
    name: 'convertToRange',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTable'} },
    return: { type: 'graph.workbookRange', collection: false }
  }, {
    name: 'reapplyFilters',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTable'} },
  }, {
    name: 'add',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTable', collection: true}, address: {type: 'Edm.String'}, hasHeaders: {type: 'Edm.Boolean', nullable: false} },
    return: { type: 'graph.workbookTable', collection: false }
  }, {
    name: 'add',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTableColumn', collection: true}, index: {type: 'Edm.Int32'}, values: {type: 'graph.Json'}, name: {type: 'Edm.String'} },
    return: { type: 'graph.workbookTableColumn', collection: false }
  }, {
    name: 'add',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTableRow', collection: true}, index: {type: 'Edm.Int32'}, values: {type: 'graph.Json'} },
    return: { type: 'graph.workbookTableRow', collection: false }
  }, {
    name: 'apply',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTableSort'}, fields: {type: 'graph.workbookSortField', collection: true}, matchCase: {type: 'Edm.Boolean', nullable: false}, method: {type: 'Edm.String', nullable: false} },
  }, {
    name: 'clear',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTableSort'} },
  }, {
    name: 'reapply',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookTableSort'} },
  }, {
    name: 'add',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookWorksheet', collection: true}, name: {type: 'Edm.String'} },
    return: { type: 'graph.workbookWorksheet', collection: false }
  }, {
    name: 'protect',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookWorksheetProtection'}, options: {type: 'graph.workbookWorksheetProtectionOptions'} },
  }, {
    name: 'unprotect',
    bound: true,
    composable: false,
    parameters: { bindparameter: {type: 'graph.workbookWorksheetProtection'} },
  }, {
    name: 'createReply',
    entitySetPath: 'bindingParameter',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.message'}, Message: {type: 'graph.message'}, Comment: {type: 'Edm.String'} },
    return: { type: 'graph.message', collection: false }
  }, {
    name: 'createReplyAll',
    entitySetPath: 'bindingParameter',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.message'}, Message: {type: 'graph.message'}, Comment: {type: 'Edm.String'} },
    return: { type: 'graph.message', collection: false }
  }, {
    name: 'createForward',
    entitySetPath: 'bindingParameter',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.message'}, ToRecipients: {type: 'graph.recipient', collection: true}, Message: {type: 'graph.message'}, Comment: {type: 'Edm.String'} },
    return: { type: 'graph.message', collection: false }
  }, {
    name: 'send',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.message'} },
  }, {
    name: 'copy',
    entitySetPath: 'bindingParameter',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.message'}, DestinationId: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.message', collection: false }
  }, {
    name: 'move',
    entitySetPath: 'bindingParameter',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.message'}, DestinationId: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.message', collection: false }
  }, {
    name: 'reply',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.message'}, Message: {type: 'graph.message'}, Comment: {type: 'Edm.String'} },
  }, {
    name: 'replyAll',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.message'}, Message: {type: 'graph.message'}, Comment: {type: 'Edm.String'} },
  }, {
    name: 'forward',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.message'}, ToRecipients: {type: 'graph.recipient', collection: true}, Message: {type: 'graph.message'}, Comment: {type: 'Edm.String'} },
  }, {
    name: 'accept',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.calendarSharingMessage'} },
    return: { type: 'graph.calendar', collection: false }
  }, {
    name: 'copy',
    entitySetPath: 'bindingParameter',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.mailFolder'}, DestinationId: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.mailFolder', collection: false }
  }, {
    name: 'move',
    entitySetPath: 'bindingParameter',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.mailFolder'}, DestinationId: {type: 'Edm.String', nullable: false} },
    return: { type: 'graph.mailFolder', collection: false }
  }, {
    name: 'getSchedule',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.calendar'}, Schedules: {type: 'Edm.String', collection: true}, EndTime: {type: 'graph.dateTimeTimeZone'}, StartTime: {type: 'graph.dateTimeTimeZone'}, AvailabilityViewInterval: {type: 'Edm.Int32'} },
    return: { type: 'graph.scheduleInformation', collection: true }
  }, {
    name: 'dismissReminder',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.event'} },
  }, {
    name: 'snoozeReminder',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.event'}, NewReminderTime: {type: 'graph.dateTimeTimeZone', nullable: false} },
  }, {
    name: 'accept',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.event'}, SendResponse: {type: 'Edm.Boolean'}, Comment: {type: 'Edm.String'} },
  }, {
    name: 'decline',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.event'}, ProposedNewTime: {type: 'graph.timeSlot'}, SendResponse: {type: 'Edm.Boolean'}, Comment: {type: 'Edm.String'} },
  }, {
    name: 'tentativelyAccept',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.event'}, ProposedNewTime: {type: 'graph.timeSlot'}, SendResponse: {type: 'Edm.Boolean'}, Comment: {type: 'Edm.String'} },
  }, {
    name: 'reply',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.conversationThread'}, Post: {type: 'graph.post', nullable: false} },
  }, {
    name: 'createUploadSession',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.attachment', collection: true}, AttachmentItem: {type: 'graph.attachmentItem', nullable: false} },
    return: { type: 'graph.uploadSession', collection: false }
  }, {
    name: 'reply',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.post'}, Post: {type: 'graph.post', nullable: false} },
  }, {
    name: 'forward',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.post'}, Comment: {type: 'Edm.String'}, ToRecipients: {type: 'graph.recipient', collection: true, nullable: false} },
  }, {
    name: 'checkin',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.driveItem'}, checkInAs: {type: 'Edm.String'}, comment: {type: 'Edm.String'} },
  }, {
    name: 'checkout',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.driveItem'} },
  }, {
    name: 'copy',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.driveItem'}, name: {type: 'Edm.String'}, parentReference: {type: 'graph.itemReference'} },
    return: { type: 'graph.driveItem', collection: false }
  }, {
    name: 'createLink',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.driveItem'}, type: {type: 'Edm.String', nullable: false}, scope: {type: 'Edm.String'}, expirationDateTime: {type: 'Edm.DateTimeOffset'}, password: {type: 'Edm.String'}, message: {type: 'Edm.String'} },
    return: { type: 'graph.permission', collection: false }
  }, {
    name: 'createUploadSession',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.driveItem'}, item: {type: 'graph.driveItemUploadableProperties'} },
    return: { type: 'graph.uploadSession', collection: false }
  }, {
    name: 'follow',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.driveItem'} },
    return: { type: 'graph.driveItem', collection: false }
  }, {
    name: 'unfollow',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.driveItem'} },
  }, {
    name: 'invite',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.driveItem'}, requireSignIn: {type: 'Edm.Boolean'}, roles: {type: 'Edm.String', collection: true}, sendInvitation: {type: 'Edm.Boolean'}, message: {type: 'Edm.String'}, recipients: {type: 'graph.driveRecipient', collection: true, nullable: false}, expirationDateTime: {type: 'Edm.String'}, password: {type: 'Edm.String'} },
    return: { type: 'graph.permission', collection: true }
  }, {
    name: 'preview',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.driveItem'}, page: {type: 'Edm.String'}, zoom: {type: 'Edm.Double'} },
    return: { type: 'graph.itemPreviewInfo', collection: false }
  }, {
    name: 'grant',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.permission'}, roles: {type: 'Edm.String', collection: true}, recipients: {type: 'graph.driveRecipient', collection: true} },
    return: { type: 'graph.permission', collection: true }
  }, {
    name: 'restoreVersion',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.listItemVersion'} },
  }, {
    name: 'restoreVersion',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.driveItemVersion'} },
  }, {
    name: 'add',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.site', collection: true}, value: {type: 'graph.site', collection: true} },
    return: { type: 'graph.site', collection: true }
  }, {
    name: 'remove',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.site', collection: true}, value: {type: 'graph.site', collection: true} },
    return: { type: 'graph.site', collection: true }
  }, {
    name: 'addGroup',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.groupLifecyclePolicy'}, groupId: {type: 'Edm.String', nullable: false} },
    return: { type: 'Edm.Boolean', collection: false }
  }, {
    name: 'removeGroup',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.groupLifecyclePolicy'}, groupId: {type: 'Edm.String', nullable: false} },
    return: { type: 'Edm.Boolean', collection: false }
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.mobileApp'}, mobileAppAssignments: {type: 'graph.mobileAppAssignment', collection: true} },
  }, {
    name: 'commit',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.mobileAppContentFile'}, fileEncryptionInfo: {type: 'graph.fileEncryptionInfo'} },
  }, {
    name: 'renewUpload',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.mobileAppContentFile'} },
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedDeviceMobileAppConfiguration'}, assignments: {type: 'graph.managedDeviceMobileAppConfigurationAssignment', collection: true} },
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedEBook'}, managedEBookAssignments: {type: 'graph.managedEBookAssignment', collection: true} },
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.deviceConfiguration'}, assignments: {type: 'graph.deviceConfigurationAssignment', collection: true} },
    return: { type: 'graph.deviceConfigurationAssignment', collection: true }
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.deviceCompliancePolicy'}, assignments: {type: 'graph.deviceCompliancePolicyAssignment', collection: true} },
    return: { type: 'graph.deviceCompliancePolicyAssignment', collection: true }
  }, {
    name: 'scheduleActionsForRules',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.deviceCompliancePolicy'}, deviceComplianceScheduledActionForRules: {type: 'graph.deviceComplianceScheduledActionForRule', collection: true} },
  }, {
    name: 'setMobileDeviceManagementAuthority',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.organization'} },
    return: { type: 'Edm.Int32', collection: false }
  }, {
    name: 'syncMicrosoftStoreForBusinessApps',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.deviceAppManagement'} },
  }, {
    name: 'syncLicenses',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.vppToken'} },
    return: { type: 'graph.vppToken', collection: false }
  }, {
    name: 'sync',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.deviceManagementExchangeConnector'}, syncType: {type: 'graph.deviceManagementExchangeConnectorSyncType', nullable: false} },
  }, {
    name: 'setPriority',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.deviceEnrollmentConfiguration'}, priority: {type: 'Edm.Int32', nullable: false} },
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.deviceEnrollmentConfiguration'}, enrollmentConfigurationAssignments: {type: 'graph.enrollmentConfigurationAssignment', collection: true} },
  }, {
    name: 'retire',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedDevice'} },
  }, {
    name: 'wipe',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedDevice'}, keepEnrollmentData: {type: 'Edm.Boolean'}, keepUserData: {type: 'Edm.Boolean'}, macOsUnlockCode: {type: 'Edm.String'} },
  }, {
    name: 'resetPasscode',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedDevice'} },
  }, {
    name: 'remoteLock',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedDevice'} },
  }, {
    name: 'requestRemoteAssistance',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedDevice'} },
  }, {
    name: 'disableLostMode',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedDevice'} },
  }, {
    name: 'locateDevice',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedDevice'} },
  }, {
    name: 'bypassActivationLock',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedDevice'} },
  }, {
    name: 'rebootNow',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedDevice'} },
  }, {
    name: 'shutDown',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedDevice'} },
  }, {
    name: 'recoverPasscode',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedDevice'} },
  }, {
    name: 'cleanWindowsDevice',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedDevice'}, keepUserData: {type: 'Edm.Boolean', nullable: false} },
  }, {
    name: 'logoutSharedAppleDeviceActiveUser',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedDevice'} },
  }, {
    name: 'deleteUserFromSharedAppleDevice',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedDevice'}, userPrincipalName: {type: 'Edm.String'} },
  }, {
    name: 'syncDevice',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedDevice'} },
  }, {
    name: 'windowsDefenderScan',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedDevice'}, quickScan: {type: 'Edm.Boolean', nullable: false} },
  }, {
    name: 'windowsDefenderUpdateSignatures',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedDevice'} },
  }, {
    name: 'updateWindowsDeviceAccount',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedDevice'}, updateWindowsDeviceAccountActionParameter: {type: 'graph.updateWindowsDeviceAccountActionParameter'} },
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.targetedManagedAppProtection'}, assignments: {type: 'graph.targetedManagedAppPolicyAssignment', collection: true} },
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.targetedManagedAppConfiguration'}, assignments: {type: 'graph.targetedManagedAppPolicyAssignment', collection: true} },
  }, {
    name: 'targetApps',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.targetedManagedAppConfiguration'}, apps: {type: 'graph.managedMobileApp', collection: true} },
  }, {
    name: 'assign',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.windowsInformationProtection'}, assignments: {type: 'graph.targetedManagedAppPolicyAssignment', collection: true} },
  }, {
    name: 'targetApps',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedAppPolicy'}, apps: {type: 'graph.managedMobileApp', collection: true} },
  }, {
    name: 'targetApps',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.managedAppProtection'}, apps: {type: 'graph.managedMobileApp', collection: true} },
  }, {
    name: 'sendTestMessage',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.notificationMessageTemplate'} },
  }, {
    name: 'beginOnboarding',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.remoteAssistancePartner'} },
  }, {
    name: 'disconnect',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.remoteAssistancePartner'} },
  }, {
    name: 'onenotePatchContent',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.onenotePage'}, commands: {type: 'graph.onenotePatchContentCommand', collection: true} },
  }, {
    name: 'copyToSection',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.onenotePage'}, id: {type: 'Edm.String'}, groupId: {type: 'Edm.String'}, siteCollectionId: {type: 'Edm.String'}, siteId: {type: 'Edm.String'} },
    return: { type: 'graph.onenoteOperation', collection: false }
  }, {
    name: 'copyNotebook',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.notebook'}, groupId: {type: 'Edm.String'}, renameAs: {type: 'Edm.String'}, notebookFolder: {type: 'Edm.String'}, siteCollectionId: {type: 'Edm.String'}, siteId: {type: 'Edm.String'} },
    return: { type: 'graph.onenoteOperation', collection: false }
  }, {
    name: 'copyToNotebook',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.onenoteSection'}, id: {type: 'Edm.String'}, groupId: {type: 'Edm.String'}, renameAs: {type: 'Edm.String'}, siteCollectionId: {type: 'Edm.String'}, siteId: {type: 'Edm.String'} },
    return: { type: 'graph.onenoteOperation', collection: false }
  }, {
    name: 'copyToSectionGroup',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.onenoteSection'}, id: {type: 'Edm.String'}, groupId: {type: 'Edm.String'}, renameAs: {type: 'Edm.String'}, siteCollectionId: {type: 'Edm.String'}, siteId: {type: 'Edm.String'} },
    return: { type: 'graph.onenoteOperation', collection: false }
  }, {
    name: 'getNotebookFromWebUrl',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.notebook', collection: true}, webUrl: {type: 'Edm.String'} },
    return: { type: 'graph.CopyNotebookModel', collection: false }
  }, {
    name: 'logTeleconferenceDeviceQuality',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.call', collection: true}, quality: {type: 'graph.teleconferenceDeviceQuality', nullable: false} },
  }, {
    name: 'answer',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.call'}, callbackUri: {type: 'Edm.String', nullable: false}, mediaConfig: {type: 'graph.mediaConfig', nullable: false}, acceptedModalities: {type: 'graph.modality', collection: true} },
  }, {
    name: 'changeScreenSharingRole',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.call'}, role: {type: 'graph.screenSharingRole', nullable: false} },
  }, {
    name: 'keepAlive',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.call'} },
  }, {
    name: 'mute',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.call'}, clientContext: {type: 'Edm.String'} },
    return: { type: 'graph.muteParticipantOperation', collection: false }
  }, {
    name: 'playPrompt',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.call'}, prompts: {type: 'graph.prompt', collection: true, nullable: false}, clientContext: {type: 'Edm.String'} },
    return: { type: 'graph.playPromptOperation', collection: false }
  }, {
    name: 'recordResponse',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.call'}, prompts: {type: 'graph.prompt', collection: true}, bargeInAllowed: {type: 'Edm.Boolean'}, initialSilenceTimeoutInSeconds: {type: 'Edm.Int32'}, maxSilenceTimeoutInSeconds: {type: 'Edm.Int32'}, maxRecordDurationInSeconds: {type: 'Edm.Int32'}, playBeep: {type: 'Edm.Boolean'}, stopTones: {type: 'Edm.String', collection: true}, clientContext: {type: 'Edm.String'} },
    return: { type: 'graph.recordOperation', collection: false }
  }, {
    name: 'redirect',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.call'}, targets: {type: 'graph.invitationParticipantInfo', collection: true, nullable: false}, timeout: {type: 'Edm.Int32'}, callbackUri: {type: 'Edm.String'} },
  }, {
    name: 'reject',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.call'}, reason: {type: 'graph.rejectReason'}, callbackUri: {type: 'Edm.String'} },
  }, {
    name: 'subscribeToTone',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.call'}, clientContext: {type: 'Edm.String'} },
    return: { type: 'graph.subscribeToToneOperation', collection: false }
  }, {
    name: 'transfer',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.call'}, transferTarget: {type: 'graph.invitationParticipantInfo', nullable: false} },
  }, {
    name: 'unmute',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.call'}, clientContext: {type: 'Edm.String'} },
    return: { type: 'graph.unmuteParticipantOperation', collection: false }
  }, {
    name: 'updateRecordingStatus',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.call'}, status: {type: 'graph.recordingStatus', nullable: false}, clientContext: {type: 'Edm.String'} },
    return: { type: 'graph.updateRecordingStatusOperation', collection: false }
  }, {
    name: 'createOrGet',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.onlineMeeting', collection: true}, chatInfo: {type: 'graph.chatInfo'}, endDateTime: {type: 'Edm.DateTimeOffset'}, externalId: {type: 'Edm.String', nullable: false}, participants: {type: 'graph.meetingParticipants'}, startDateTime: {type: 'Edm.DateTimeOffset'}, subject: {type: 'Edm.String'} },
    return: { type: 'graph.onlineMeeting', collection: false }
  }, {
    name: 'invite',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.participant', collection: true}, participants: {type: 'graph.invitationParticipantInfo', collection: true, nullable: false}, clientContext: {type: 'Edm.String'} },
    return: { type: 'graph.inviteParticipantsOperation', collection: false }
  }, {
    name: 'mute',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.participant'}, clientContext: {type: 'Edm.String'} },
    return: { type: 'graph.muteParticipantOperation', collection: false }
  }, {
    name: 'upgrade',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.teamsAppInstallation'} },
  }, {
    name: 'clone',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.team'}, displayName: {type: 'Edm.String'}, description: {type: 'Edm.String'}, mailNickname: {type: 'Edm.String'}, classification: {type: 'Edm.String'}, visibility: {type: 'graph.teamVisibilityType', nullable: false}, partsToClone: {type: 'graph.clonableTeamParts', nullable: false} },
  }, {
    name: 'archive',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.team'}, shouldSetSpoSiteReadOnlyForMembers: {type: 'Edm.Boolean'} },
  }, {
    name: 'unarchive',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.team'} },
  }, {
    name: 'approve',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.scheduleChangeRequest'}, message: {type: 'Edm.String'} },
  }, {
    name: 'decline',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.scheduleChangeRequest'}, message: {type: 'Edm.String'} },
  }, {
    name: 'share',
    bound: true,
    composable: false,
    parameters: { bindingParameter: {type: 'graph.schedule'}, notifyTeam: {type: 'Edm.Boolean'}, startDateTime: {type: 'Edm.DateTimeOffset'}, endDateTime: {type: 'Edm.DateTimeOffset'} },
  }],
  containers: [GraphServiceContainer]
} as SchemaConfig;
//#endregion