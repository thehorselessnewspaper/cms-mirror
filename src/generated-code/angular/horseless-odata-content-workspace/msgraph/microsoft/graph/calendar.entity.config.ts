//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Calendar } from './calendar.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CalendarEntityConfig = {
  name: 'calendar',
  base: 'microsoft.graph.entity',
  fields: {
    name: {type: 'Edm.String'},
    color: {type: 'graph.calendarColor'},
    changeKey: {type: 'Edm.String'},
    canShare: {type: 'Edm.Boolean'},
    canViewPrivateItems: {type: 'Edm.Boolean'},
    canEdit: {type: 'Edm.Boolean'},
    owner: {type: 'graph.emailAddress'},
    allowedOnlineMeetingProviders: {type: 'graph.onlineMeetingProviderType', collection: true},
    defaultOnlineMeetingProvider: {type: 'graph.onlineMeetingProviderType'},
    isTallyingResponses: {type: 'Edm.Boolean'},
    isRemovable: {type: 'Edm.Boolean'},
    singleValueExtendedProperties: {type: 'graph.singleValueLegacyExtendedProperty', collection: true, navigation: true},
    multiValueExtendedProperties: {type: 'graph.multiValueLegacyExtendedProperty', collection: true, navigation: true},
    calendarPermissions: {type: 'graph.calendarPermission', collection: true, navigation: true},
    events: {type: 'graph.event', collection: true, navigation: true},
    calendarView: {type: 'graph.event', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Calendar>;
//#endregion