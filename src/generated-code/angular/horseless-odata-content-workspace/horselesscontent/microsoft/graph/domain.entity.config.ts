//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Domain } from './domain.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DomainEntityConfig = {
  name: 'domain',
  base: 'microsoft.graph.entity',
  fields: {
    authenticationType: {type: 'Edm.String', nullable: false},
    availabilityStatus: {type: 'Edm.String'},
    isAdminManaged: {type: 'Edm.Boolean', nullable: false},
    isDefault: {type: 'Edm.Boolean', nullable: false},
    isInitial: {type: 'Edm.Boolean', nullable: false},
    isRoot: {type: 'Edm.Boolean', nullable: false},
    isVerified: {type: 'Edm.Boolean', nullable: false},
    manufacturer: {type: 'Edm.String'},
    model: {type: 'Edm.String'},
    passwordNotificationWindowInDays: {type: 'Edm.Int32'},
    passwordValidityPeriodInDays: {type: 'Edm.Int32'},
    supportedServices: {type: 'Edm.String', nullable: false, collection: true},
    state: {type: 'graph.domainState'},
    serviceConfigurationRecords: {type: 'graph.domainDnsRecord', collection: true, navigation: true},
    verificationDnsRecords: {type: 'graph.domainDnsRecord', collection: true, navigation: true},
    domainNameReferences: {type: 'graph.directoryObject', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Domain>;
//#endregion