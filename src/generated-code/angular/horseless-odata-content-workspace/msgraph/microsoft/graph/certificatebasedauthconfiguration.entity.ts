//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { CertificateAuthority } from './certificateauthority.complex';
//#endregion

export interface CertificateBasedAuthConfiguration extends Entity {
  //#region ODataApiGen Properties
  certificateAuthorities: CertificateAuthority[];
  //#endregion
}