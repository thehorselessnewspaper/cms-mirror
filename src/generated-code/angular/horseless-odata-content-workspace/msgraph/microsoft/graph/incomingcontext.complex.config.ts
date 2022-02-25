//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IncomingContext } from './incomingcontext.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IncomingContextComplexConfig = {
  name: 'incomingContext',
  fields: {
    sourceParticipantId: {type: 'Edm.String'},
    observedParticipantId: {type: 'Edm.String'},
    onBehalfOf: {type: 'graph.identitySet'},
    transferor: {type: 'graph.identitySet'}
  }
} as StructuredTypeConfig<IncomingContext>;
//#endregion