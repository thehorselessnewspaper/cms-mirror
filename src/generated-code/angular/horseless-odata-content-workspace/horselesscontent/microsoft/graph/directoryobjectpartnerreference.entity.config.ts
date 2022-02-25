//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryObjectPartnerReference } from './directoryobjectpartnerreference.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DirectoryObjectPartnerReferenceEntityConfig = {
  name: 'directoryObjectPartnerReference',
  base: 'microsoft.graph.directoryObject',
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    externalPartnerTenantId: {type: 'Edm.Guid'},
    objectType: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DirectoryObjectPartnerReference>;
//#endregion