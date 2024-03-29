﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ConnectionDirection } from './connectiondirection.enum';
import { ConnectionStatus } from './connectionstatus.enum';
import { SecurityNetworkProtocol } from './securitynetworkprotocol.enum';
//#endregion

export interface NetworkConnection {
  //#region ODataApiGen Properties
  applicationName?: string;
  destinationAddress?: string;
  destinationDomain?: string;
  destinationLocation?: string;
  destinationPort?: string;
  destinationUrl?: string;
  direction?: ConnectionDirection;
  domainRegisteredDateTime?: Date;
  localDnsName?: string;
  natDestinationAddress?: string;
  natDestinationPort?: string;
  natSourceAddress?: string;
  natSourcePort?: string;
  protocol?: SecurityNetworkProtocol;
  riskScore?: string;
  sourceAddress?: string;
  sourceLocation?: string;
  sourcePort?: string;
  status?: ConnectionStatus;
  urlParameters?: string;
  //#endregion
}