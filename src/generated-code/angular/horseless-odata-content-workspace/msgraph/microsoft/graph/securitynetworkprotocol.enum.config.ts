//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SecurityNetworkProtocol } from './securitynetworkprotocol.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const SecurityNetworkProtocolConfig = {
  name: 'securityNetworkProtocol',
  members: SecurityNetworkProtocol,
  fields: {
    ip: {value: 0},
    icmp: {value: 1},
    igmp: {value: 2},
    ggp: {value: 3},
    ipv4: {value: 4},
    tcp: {value: 6},
    pup: {value: 12},
    udp: {value: 17},
    idp: {value: 22},
    ipv6: {value: 41},
    ipv6RoutingHeader: {value: 43},
    ipv6FragmentHeader: {value: 44},
    ipSecEncapsulatingSecurityPayload: {value: 50},
    ipSecAuthenticationHeader: {value: 51},
    icmpV6: {value: 58},
    ipv6NoNextHeader: {value: 59},
    ipv6DestinationOptions: {value: 60},
    nd: {value: 77},
    raw: {value: 255},
    ipx: {value: 1000},
    spx: {value: 1256},
    spxII: {value: 1257},
    unknownFutureValue: {value: 32767},
    unknown: {value: -1}
  }
} as EnumTypeConfig<SecurityNetworkProtocol>;
//#endregion