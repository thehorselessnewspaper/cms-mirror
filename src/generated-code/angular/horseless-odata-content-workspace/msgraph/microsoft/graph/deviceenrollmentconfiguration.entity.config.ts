//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceEnrollmentConfiguration } from './deviceenrollmentconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceEnrollmentConfigurationEntityConfig = {
  name: 'deviceEnrollmentConfiguration',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    priority: {type: 'Edm.Int32', nullable: false},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    version: {type: 'Edm.Int32', nullable: false},
    assignments: {type: 'graph.enrollmentConfigurationAssignment', collection: true, navigation: true}
  }
} as StructuredTypeConfig<DeviceEnrollmentConfiguration>;
//#endregion