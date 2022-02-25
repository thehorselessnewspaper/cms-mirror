//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
//#endregion

export interface Attachment extends Entity {
  //#region ODataApiGen Properties
  lastModifiedDateTime?: Date;
  name?: string;
  contentType?: string;
  size: number;
  isInline: boolean;
  //#endregion
}