//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EducationRoot } from './educationroot.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EducationRootEntityConfig = {
  name: 'educationRoot',
  base: 'microsoft.graph.entity',
  fields: {
    classes: {type: 'graph.educationClass', collection: true, navigation: true},
    schools: {type: 'graph.educationSchool', collection: true, navigation: true},
    users: {type: 'graph.educationUser', collection: true, navigation: true},
    me: {type: 'graph.educationUser', navigation: true}
  }
} as StructuredTypeConfig<EducationRoot>;
//#endregion