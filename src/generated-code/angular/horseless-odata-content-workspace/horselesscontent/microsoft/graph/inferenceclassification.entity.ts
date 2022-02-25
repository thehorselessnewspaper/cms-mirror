//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { InferenceClassificationOverride } from './inferenceclassificationoverride.entity';
//#endregion

export interface InferenceClassification extends Entity {
  //#region ODataApiGen Properties
  overrides?: InferenceClassificationOverride[];
  //#endregion
}