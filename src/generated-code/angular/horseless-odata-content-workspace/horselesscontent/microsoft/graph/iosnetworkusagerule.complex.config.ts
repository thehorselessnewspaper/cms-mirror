//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosNetworkUsageRule } from './iosnetworkusagerule.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosNetworkUsageRuleComplexConfig = {
  name: 'iosNetworkUsageRule',
  fields: {
    managedApps: {type: 'graph.appListItem', collection: true},
    cellularDataBlockWhenRoaming: {type: 'Edm.Boolean', nullable: false},
    cellularDataBlocked: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<IosNetworkUsageRule>;
//#endregion