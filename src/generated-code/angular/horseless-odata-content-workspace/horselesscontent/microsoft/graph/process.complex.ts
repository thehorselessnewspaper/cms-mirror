//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProcessIntegrityLevel } from './processintegritylevel.enum';
import { FileHash } from './filehash.complex';
//#endregion

export interface Process {
  //#region ODataApiGen Properties
  accountName?: string;
  commandLine?: string;
  createdDateTime?: Date;
  fileHash?: FileHash;
  integrityLevel?: ProcessIntegrityLevel;
  isElevated?: boolean;
  name?: string;
  parentProcessCreatedDateTime?: Date;
  parentProcessId?: number;
  parentProcessName?: string;
  path?: string;
  processId?: number;
  //#endregion
}