//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { Thumbnail } from './thumbnail.complex';
//#endregion

export interface ThumbnailSet extends Entity {
  //#region ODataApiGen Properties
  large?: Thumbnail;
  medium?: Thumbnail;
  small?: Thumbnail;
  source?: Thumbnail;
  //#endregion
}