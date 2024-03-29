﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { NetworkConnection } from './networkconnection.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const NetworkConnectionComplexConfig = {
  name: 'networkConnection',
  fields: {
    applicationName: {type: 'Edm.String'},
    destinationAddress: {type: 'Edm.String'},
    destinationDomain: {type: 'Edm.String'},
    destinationLocation: {type: 'Edm.String'},
    destinationPort: {type: 'Edm.String'},
    destinationUrl: {type: 'Edm.String'},
    direction: {type: 'graph.connectionDirection'},
    domainRegisteredDateTime: {type: 'Edm.DateTimeOffset'},
    localDnsName: {type: 'Edm.String'},
    natDestinationAddress: {type: 'Edm.String'},
    natDestinationPort: {type: 'Edm.String'},
    natSourceAddress: {type: 'Edm.String'},
    natSourcePort: {type: 'Edm.String'},
    protocol: {type: 'graph.securityNetworkProtocol'},
    riskScore: {type: 'Edm.String'},
    sourceAddress: {type: 'Edm.String'},
    sourceLocation: {type: 'Edm.String'},
    sourcePort: {type: 'Edm.String'},
    status: {type: 'graph.connectionStatus'},
    urlParameters: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<NetworkConnection>;
//#endregion