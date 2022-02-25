//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ApplePushNotificationCertificate } from './applepushnotificationcertificate.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ApplePushNotificationCertificateEntityConfig = {
  name: 'applePushNotificationCertificate',
  base: 'microsoft.graph.entity',
  fields: {
    appleIdentifier: {type: 'Edm.String'},
    topicIdentifier: {type: 'Edm.String'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    expirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    certificate: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ApplePushNotificationCertificate>;
//#endregion