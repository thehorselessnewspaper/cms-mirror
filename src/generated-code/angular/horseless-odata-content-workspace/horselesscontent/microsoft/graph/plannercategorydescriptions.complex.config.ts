//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlannerCategoryDescriptions } from './plannercategorydescriptions.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PlannerCategoryDescriptionsComplexConfig = {
  name: 'plannerCategoryDescriptions',
  fields: {
    category1: {type: 'Edm.String'},
    category2: {type: 'Edm.String'},
    category3: {type: 'Edm.String'},
    category4: {type: 'Edm.String'},
    category5: {type: 'Edm.String'},
    category6: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PlannerCategoryDescriptions>;
//#endregion