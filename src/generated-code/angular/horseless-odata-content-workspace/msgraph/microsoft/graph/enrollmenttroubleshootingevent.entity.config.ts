//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EnrollmentTroubleshootingEvent } from './enrollmenttroubleshootingevent.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EnrollmentTroubleshootingEventEntityConfig = {
  name: 'enrollmentTroubleshootingEvent',
  base: 'microsoft.graph.deviceManagementTroubleshootingEvent',
  fields: {
    managedDeviceIdentifier: {type: 'Edm.String'},
    operatingSystem: {type: 'Edm.String'},
    osVersion: {type: 'Edm.String'},
    userId: {type: 'Edm.String'},
    deviceId: {type: 'Edm.String'},
    enrollmentType: {type: 'graph.deviceEnrollmentType', nullable: false},
    failureCategory: {type: 'graph.deviceEnrollmentFailureReason', nullable: false},
    failureReason: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<EnrollmentTroubleshootingEvent>;
//#endregion