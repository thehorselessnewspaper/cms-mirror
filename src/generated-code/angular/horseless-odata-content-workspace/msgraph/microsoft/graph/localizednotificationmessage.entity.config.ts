//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LocalizedNotificationMessage } from './localizednotificationmessage.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const LocalizedNotificationMessageEntityConfig = {
  name: 'localizedNotificationMessage',
  base: 'microsoft.graph.entity',
  fields: {
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    locale: {type: 'Edm.String', nullable: false},
    subject: {type: 'Edm.String', nullable: false},
    messageTemplate: {type: 'Edm.String', nullable: false},
    isDefault: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<LocalizedNotificationMessage>;
//#endregion