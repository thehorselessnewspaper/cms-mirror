//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnlineMeetingProviderType } from './onlinemeetingprovidertype.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const OnlineMeetingProviderTypeConfig = {
  name: 'onlineMeetingProviderType',
  members: OnlineMeetingProviderType,
  fields: {
    unknown: {value: 0},
    skypeForBusiness: {value: 1},
    skypeForConsumer: {value: 2},
    teamsForBusiness: {value: 3}
  }
} as EnumTypeConfig<OnlineMeetingProviderType>;
//#endregion