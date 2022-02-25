//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Reminder } from './reminder.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ReminderComplexConfig = {
  name: 'reminder',
  fields: {
    eventId: {type: 'Edm.String'},
    eventStartTime: {type: 'graph.dateTimeTimeZone'},
    eventEndTime: {type: 'graph.dateTimeTimeZone'},
    changeKey: {type: 'Edm.String'},
    eventSubject: {type: 'Edm.String'},
    eventLocation: {type: 'graph.location'},
    eventWebLink: {type: 'Edm.String'},
    reminderFireTime: {type: 'graph.dateTimeTimeZone'}
  }
} as StructuredTypeConfig<Reminder>;
//#endregion