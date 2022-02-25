//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Subscription } from './subscription.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SubscriptionEntityConfig = {
  name: 'subscription',
  base: 'microsoft.graph.entity',
  fields: {
    resource: {type: 'Edm.String', nullable: false},
    changeType: {type: 'Edm.String', nullable: false},
    clientState: {type: 'Edm.String'},
    notificationUrl: {type: 'Edm.String', nullable: false},
    expirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    applicationId: {type: 'Edm.String'},
    creatorId: {type: 'Edm.String'},
    latestSupportedTlsVersion: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Subscription>;
//#endregion