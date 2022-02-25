//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EducationOrganization } from './educationorganization.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EducationOrganizationEntityConfig = {
  name: 'educationOrganization',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    description: {type: 'Edm.String'},
    externalSource: {type: 'graph.educationExternalSource'}
  }
} as StructuredTypeConfig<EducationOrganization>;
//#endregion