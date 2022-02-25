//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from '../entity.entity';
import { Endpoint } from './endpoint.complex';
import { FailureInfo } from './failureinfo.complex';
import { Media } from './media.complex';
//#endregion

export interface Segment extends Entity {
  //#region ODataApiGen Properties
  startDateTime: Date;
  endDateTime: Date;
  caller?: Endpoint;
  callee?: Endpoint;
  failureInfo?: FailureInfo;
  media?: Media[];
  //#endregion
}