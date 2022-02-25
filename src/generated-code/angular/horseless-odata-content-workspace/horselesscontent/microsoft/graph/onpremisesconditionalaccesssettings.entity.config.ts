//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OnPremisesConditionalAccessSettings } from './onpremisesconditionalaccesssettings.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OnPremisesConditionalAccessSettingsEntityConfig = {
  name: 'onPremisesConditionalAccessSettings',
  base: 'microsoft.graph.entity',
  fields: {
    enabled: {type: 'Edm.Boolean', nullable: false},
    includedGroups: {type: 'Edm.Guid', nullable: false, collection: true},
    excludedGroups: {type: 'Edm.Guid', nullable: false, collection: true},
    overrideDefaultRule: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<OnPremisesConditionalAccessSettings>;
//#endregion