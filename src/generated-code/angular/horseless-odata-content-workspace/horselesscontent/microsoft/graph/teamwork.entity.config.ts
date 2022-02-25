//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Teamwork } from './teamwork.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TeamworkEntityConfig = {
  name: 'teamwork',
  base: 'microsoft.graph.entity',
  fields: {
    workforceIntegrations: {type: 'graph.workforceIntegration', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Teamwork>;
//#endregion