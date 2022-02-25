//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ContactsService } from './contacts.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const ContactsServiceEntitySetConfig = {
  name: 'contacts',
  entityType: 'microsoft.graph.orgContact',
  service: ContactsService
} as EntitySetConfig;
//#endregion