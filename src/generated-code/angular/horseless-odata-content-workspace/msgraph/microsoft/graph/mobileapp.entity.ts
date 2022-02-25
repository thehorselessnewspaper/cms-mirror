//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { MobileAppPublishingState } from './mobileapppublishingstate.enum';
import { MimeContent } from './mimecontent.complex';
import { MobileAppCategory } from './mobileappcategory.entity';
import { MobileAppAssignment } from './mobileappassignment.entity';
//#endregion

export interface MobileApp extends Entity {
  //#region ODataApiGen Properties
  displayName?: string;
  description?: string;
  publisher?: string;
  largeIcon?: MimeContent;
  createdDateTime: Date;
  lastModifiedDateTime: Date;
  isFeatured: boolean;
  privacyInformationUrl?: string;
  informationUrl?: string;
  owner?: string;
  developer?: string;
  notes?: string;
  publishingState: MobileAppPublishingState;
  categories?: MobileAppCategory[];
  assignments?: MobileAppAssignment[];
  //#endregion
}