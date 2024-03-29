﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OrgContact } from './orgcontact.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OrgContactEntityConfig = {
  name: 'orgContact',
  base: 'microsoft.graph.directoryObject',
  open: true,
  fields: {
    addresses: {type: 'graph.physicalOfficeAddress', collection: true},
    companyName: {type: 'Edm.String'},
    department: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    givenName: {type: 'Edm.String'},
    jobTitle: {type: 'Edm.String'},
    mail: {type: 'Edm.String'},
    mailNickname: {type: 'Edm.String'},
    onPremisesSyncEnabled: {type: 'Edm.Boolean'},
    onPremisesLastSyncDateTime: {type: 'Edm.DateTimeOffset'},
    onPremisesProvisioningErrors: {type: 'graph.onPremisesProvisioningError', collection: true},
    phones: {type: 'graph.phone', collection: true},
    proxyAddresses: {type: 'Edm.String', nullable: false, collection: true},
    surname: {type: 'Edm.String'},
    manager: {type: 'graph.directoryObject', navigation: true},
    directReports: {type: 'graph.directoryObject', collection: true, navigation: true},
    memberOf: {type: 'graph.directoryObject', collection: true, navigation: true},
    transitiveMemberOf: {type: 'graph.directoryObject', collection: true, navigation: true}
  }
} as StructuredTypeConfig<OrgContact>;
//#endregion