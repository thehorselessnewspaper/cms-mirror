//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { InvitationsService } from './invitations.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const InvitationsServiceEntitySetConfig = {
  name: 'invitations',
  entityType: 'microsoft.graph.invitation',
  service: InvitationsService
} as EntitySetConfig;
//#endregion