//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Person } from './person.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PersonEntityConfig = {
  name: 'person',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String'},
    givenName: {type: 'Edm.String'},
    surname: {type: 'Edm.String'},
    birthday: {type: 'Edm.String'},
    personNotes: {type: 'Edm.String'},
    isFavorite: {type: 'Edm.Boolean'},
    scoredEmailAddresses: {type: 'graph.scoredEmailAddress', collection: true},
    phones: {type: 'graph.phone', collection: true},
    postalAddresses: {type: 'graph.location', collection: true},
    websites: {type: 'graph.website', collection: true},
    jobTitle: {type: 'Edm.String'},
    companyName: {type: 'Edm.String'},
    yomiCompany: {type: 'Edm.String'},
    department: {type: 'Edm.String'},
    officeLocation: {type: 'Edm.String'},
    profession: {type: 'Edm.String'},
    personType: {type: 'graph.personType'},
    userPrincipalName: {type: 'Edm.String'},
    imAddress: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Person>;
//#endregion