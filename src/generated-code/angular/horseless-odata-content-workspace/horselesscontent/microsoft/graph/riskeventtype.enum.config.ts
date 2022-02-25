//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RiskEventType } from './riskeventtype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const RiskEventTypeConfig = {
  name: 'riskEventType',
  members: RiskEventType,
  fields: {
    unlikelyTravel: {value: 0},
    anonymizedIPAddress: {value: 1},
    maliciousIPAddress: {value: 2},
    unfamiliarFeatures: {value: 3},
    malwareInfectedIPAddress: {value: 4},
    suspiciousIPAddress: {value: 5},
    leakedCredentials: {value: 6},
    investigationsThreatIntelligence: {value: 7},
    generic: {value: 8},
    adminConfirmedUserCompromised: {value: 9},
    mcasImpossibleTravel: {value: 10},
    mcasSuspiciousInboxManipulationRules: {value: 11},
    investigationsThreatIntelligenceSigninLinked: {value: 12},
    maliciousIPAddressValidCredentialsBlockedIP: {value: 13},
    unknownFutureValue: {value: 14}
  }
} as EnumTypeConfig<RiskEventType>;
//#endregion