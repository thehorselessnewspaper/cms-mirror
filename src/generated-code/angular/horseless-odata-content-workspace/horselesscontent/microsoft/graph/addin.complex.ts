//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { KeyValue } from './keyvalue.complex';
//#endregion

export interface AddIn {
  //#region ODataApiGen Properties
  id?: string;
  type: string;
  properties: KeyValue[];
  //#endregion
}