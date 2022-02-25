//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Endpoint } from './endpoint.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EndpointEntityConfig = {
  name: 'endpoint',
  base: 'microsoft.graph.directoryObject',
  open: true,
  fields: {
    capability: {type: 'Edm.String', nullable: false},
    providerId: {type: 'Edm.String'},
    providerName: {type: 'Edm.String'},
    uri: {type: 'Edm.String', nullable: false},
    providerResourceId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Endpoint>;
//#endregion