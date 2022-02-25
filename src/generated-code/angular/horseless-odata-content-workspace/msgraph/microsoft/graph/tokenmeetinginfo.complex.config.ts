//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TokenMeetingInfo } from './tokenmeetinginfo.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TokenMeetingInfoComplexConfig = {
  name: 'tokenMeetingInfo',
  base: 'microsoft.graph.meetingInfo',
  fields: {
    token: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<TokenMeetingInfo>;
//#endregion