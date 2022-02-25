//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedEBook } from './managedebook.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedEBookEntityConfig = {
  name: 'managedEBook',
  base: 'microsoft.graph.entity',
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    description: {type: 'Edm.String'},
    publisher: {type: 'Edm.String'},
    publishedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    largeCover: {type: 'graph.mimeContent'},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    informationUrl: {type: 'Edm.String'},
    privacyInformationUrl: {type: 'Edm.String'},
    assignments: {type: 'graph.managedEBookAssignment', collection: true, navigation: true},
    installSummary: {type: 'graph.eBookInstallSummary', navigation: true},
    deviceStates: {type: 'graph.deviceInstallState', collection: true, navigation: true},
    userStateSummary: {type: 'graph.userInstallStateSummary', collection: true, navigation: true}
  }
} as StructuredTypeConfig<ManagedEBook>;
//#endregion