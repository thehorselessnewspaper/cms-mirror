//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CertificateBasedAuthConfiguration } from './certificatebasedauthconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CertificateBasedAuthConfigurationEntityConfig = {
  name: 'certificateBasedAuthConfiguration',
  base: 'microsoft.graph.entity',
  fields: {
    certificateAuthorities: {type: 'graph.certificateAuthority', nullable: false, collection: true}
  }
} as StructuredTypeConfig<CertificateBasedAuthConfiguration>;
//#endregion