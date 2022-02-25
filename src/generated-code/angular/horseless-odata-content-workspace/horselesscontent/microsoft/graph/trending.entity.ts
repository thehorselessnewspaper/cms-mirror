//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { ResourceVisualization } from './resourcevisualization.complex';
import { ResourceReference } from './resourcereference.complex';
//#endregion

export interface Trending extends Entity {
  //#region ODataApiGen Properties
  weight: number;
  resourceVisualization?: ResourceVisualization;
  resourceReference?: ResourceReference;
  lastModifiedDateTime?: Date;
  resource?: Entity;
  //#endregion
}