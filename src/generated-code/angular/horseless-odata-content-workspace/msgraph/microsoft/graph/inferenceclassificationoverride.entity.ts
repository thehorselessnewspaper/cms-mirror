//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { InferenceClassificationType } from './inferenceclassificationtype.enum';
import { EmailAddress } from './emailaddress.complex';
//#endregion

export interface InferenceClassificationOverride extends Entity {
  //#region ODataApiGen Properties
  classifyAs?: InferenceClassificationType;
  senderEmailAddress?: EmailAddress;
  //#endregion
}