﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ManagedAppFlaggedReason } from './managedappflaggedreason.enum';
import { MobileAppIdentifier } from './mobileappidentifier.complex';
import { ManagedAppPolicy } from './managedapppolicy.entity';
import { ManagedAppOperation } from './managedappoperation.entity';
//#endregion

export interface ManagedAppRegistration extends Entity {
  //#region ODataApiGen Properties
  createdDateTime: Date;
  lastSyncDateTime: Date;
  applicationVersion?: string;
  managementSdkVersion?: string;
  platformVersion?: string;
  deviceType?: string;
  deviceTag?: string;
  deviceName?: string;
  flaggedReasons: ManagedAppFlaggedReason;
  userId?: string;
  appIdentifier?: MobileAppIdentifier;
  version?: string;
  appliedPolicies?: ManagedAppPolicy[];
  intendedPolicies?: ManagedAppPolicy[];
  operations?: ManagedAppOperation[];
  //#endregion
}