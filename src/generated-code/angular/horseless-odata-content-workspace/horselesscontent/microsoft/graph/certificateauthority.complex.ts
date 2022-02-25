//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
//#endregion

export interface CertificateAuthority {
  //#region ODataApiGen Properties
  isRootAuthority: boolean;
  certificateRevocationListUrl?: string;
  deltaCertificateRevocationListUrl?: string;
  certificate: ArrayBuffer;
  issuer: string;
  issuerSki: string;
  //#endregion
}