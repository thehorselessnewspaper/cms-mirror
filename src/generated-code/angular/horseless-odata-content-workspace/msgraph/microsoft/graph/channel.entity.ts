//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { DriveItem } from './driveitem.entity';
import { ChatMessage } from './chatmessage.entity';
import { TeamsTab } from './teamstab.entity';
//#endregion

export interface Channel extends Entity {
  //#region ODataApiGen Properties
  displayName: string;
  description?: string;
  email?: string;
  webUrl?: string;
  messages?: ChatMessage[];
  tabs?: TeamsTab[];
  filesFolder?: DriveItem;
  //#endregion
}