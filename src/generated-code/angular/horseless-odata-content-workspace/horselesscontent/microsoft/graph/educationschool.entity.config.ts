//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EducationSchool } from './educationschool.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EducationSchoolEntityConfig = {
  name: 'educationSchool',
  base: 'microsoft.graph.educationOrganization',
  fields: {
    principalEmail: {type: 'Edm.String'},
    principalName: {type: 'Edm.String'},
    externalPrincipalId: {type: 'Edm.String'},
    lowestGrade: {type: 'Edm.String'},
    highestGrade: {type: 'Edm.String'},
    schoolNumber: {type: 'Edm.String'},
    externalId: {type: 'Edm.String'},
    phone: {type: 'Edm.String'},
    fax: {type: 'Edm.String'},
    createdBy: {type: 'graph.identitySet'},
    address: {type: 'graph.physicalAddress'},
    classes: {type: 'graph.educationClass', collection: true, navigation: true},
    users: {type: 'graph.educationUser', collection: true, navigation: true}
  }
} as StructuredTypeConfig<EducationSchool>;
//#endregion