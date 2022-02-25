//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CertificateAuthority } from './certificateauthority.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CertificateAuthorityComplexConfig = {
  name: 'certificateAuthority',
  fields: {
    isRootAuthority: {type: 'Edm.Boolean', nullable: false},
    certificateRevocationListUrl: {type: 'Edm.String'},
    deltaCertificateRevocationListUrl: {type: 'Edm.String'},
    certificate: {type: 'Edm.Binary', nullable: false},
    issuer: {type: 'Edm.String', nullable: false},
    issuerSki: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<CertificateAuthority>;
//#endregion