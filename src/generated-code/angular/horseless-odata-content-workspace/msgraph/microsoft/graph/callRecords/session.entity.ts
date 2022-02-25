//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from '../entity.entity';
import { Modality } from './modality.enum';
import { Endpoint } from './endpoint.complex';
import { FailureInfo } from './failureinfo.complex';
import { Segment } from './segment.entity';
//#endregion

export interface Session extends Entity {
  //#region ODataApiGen Properties
  modalities: Modality;
  startDateTime: Date;
  endDateTime: Date;
  caller?: Endpoint;
  callee?: Endpoint;
  failureInfo?: FailureInfo;
  segments?: Segment[];
  //#endregion
}