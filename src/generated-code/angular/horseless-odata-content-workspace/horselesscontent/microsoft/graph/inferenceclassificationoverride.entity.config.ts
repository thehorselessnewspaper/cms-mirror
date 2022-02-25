//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { InferenceClassificationOverride } from './inferenceclassificationoverride.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const InferenceClassificationOverrideEntityConfig = {
  name: 'inferenceClassificationOverride',
  base: 'microsoft.graph.entity',
  fields: {
    classifyAs: {type: 'graph.inferenceClassificationType'},
    senderEmailAddress: {type: 'graph.emailAddress'}
  }
} as StructuredTypeConfig<InferenceClassificationOverride>;
//#endregion