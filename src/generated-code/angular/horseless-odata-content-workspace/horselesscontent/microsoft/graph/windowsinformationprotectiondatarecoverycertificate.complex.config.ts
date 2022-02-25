//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsInformationProtectionDataRecoveryCertificate } from './windowsinformationprotectiondatarecoverycertificate.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsInformationProtectionDataRecoveryCertificateComplexConfig = {
  name: 'windowsInformationProtectionDataRecoveryCertificate',
  fields: {
    subjectName: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    expirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    certificate: {type: 'Edm.Binary'}
  }
} as StructuredTypeConfig<WindowsInformationProtectionDataRecoveryCertificate>;
//#endregion