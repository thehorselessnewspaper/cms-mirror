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
import { ManagedAppRegistration } from './managedappregistration.entity';
import { DeviceAppManagement } from './deviceappmanagement.entity';
import { ManagedEBook } from './managedebook.entity';
import { MobileApp } from './mobileapp.entity';
import { MobileAppCategory } from './mobileappcategory.entity';
import { ManagedDeviceMobileAppConfiguration } from './manageddevicemobileappconfiguration.entity';
import { VppToken } from './vpptoken.entity';
import { ManagedAppPolicy } from './managedapppolicy.entity';
import { IosManagedAppProtection } from './iosmanagedappprotection.entity';
import { AndroidManagedAppProtection } from './androidmanagedappprotection.entity';
import { DefaultManagedAppProtection } from './defaultmanagedappprotection.entity';
import { TargetedManagedAppConfiguration } from './targetedmanagedappconfiguration.entity';
import { MdmWindowsInformationProtectionPolicy } from './mdmwindowsinformationprotectionpolicy.entity';
import { WindowsInformationProtectionPolicy } from './windowsinformationprotectionpolicy.entity';
import { ManagedAppStatus } from './managedappstatus.entity';
//#endregion

@Injectable()
export class DeviceAppManagementService extends ODataSingletonService<DeviceAppManagement> {
  constructor(client: ODataClient) {
    super(client, 'deviceAppManagement', 'microsoft.graph.deviceAppManagement');
  }

  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}