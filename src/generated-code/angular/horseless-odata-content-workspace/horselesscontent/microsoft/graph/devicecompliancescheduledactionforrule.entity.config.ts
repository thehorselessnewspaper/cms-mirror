//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DeviceComplianceScheduledActionForRule } from './devicecompliancescheduledactionforrule.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DeviceComplianceScheduledActionForRuleEntityConfig = {
  name: 'deviceComplianceScheduledActionForRule',
  base: 'microsoft.graph.entity',
  fields: {
    ruleName: {type: 'Edm.String'},
    scheduledActionConfigurations: {type: 'graph.deviceComplianceActionItem', collection: true, navigation: true}
  }
} as StructuredTypeConfig<DeviceComplianceScheduledActionForRule>;
//#endregion