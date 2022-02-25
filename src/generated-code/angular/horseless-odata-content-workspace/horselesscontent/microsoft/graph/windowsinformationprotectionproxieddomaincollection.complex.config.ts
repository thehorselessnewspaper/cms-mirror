//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsInformationProtectionProxiedDomainCollection } from './windowsinformationprotectionproxieddomaincollection.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const WindowsInformationProtectionProxiedDomainCollectionComplexConfig = {
  name: 'windowsInformationProtectionProxiedDomainCollection',
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    proxiedDomains: {type: 'graph.proxiedDomain', nullable: false, collection: true}
  }
} as StructuredTypeConfig<WindowsInformationProtectionProxiedDomainCollection>;
//#endregion