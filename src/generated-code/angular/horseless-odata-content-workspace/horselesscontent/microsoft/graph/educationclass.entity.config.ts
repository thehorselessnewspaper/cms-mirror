//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EducationClass } from './educationclass.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EducationClassEntityConfig = {
  name: 'educationClass',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    mailNickname: {type: 'Edm.String', nullable: false},
    description: {type: 'Edm.String'},
    createdBy: {type: 'graph.identitySet'},
    classCode: {type: 'Edm.String'},
    externalName: {type: 'Edm.String'},
    externalId: {type: 'Edm.String'},
    externalSource: {type: 'graph.educationExternalSource'},
    term: {type: 'graph.educationTerm'},
    schools: {type: 'graph.educationSchool', collection: true, navigation: true},
    members: {type: 'graph.educationUser', collection: true, navigation: true},
    teachers: {type: 'graph.educationUser', collection: true, navigation: true},
    group: {type: 'graph.group', navigation: true}
  }
} as StructuredTypeConfig<EducationClass>;
//#endregion