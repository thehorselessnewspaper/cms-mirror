//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DirectoryObject } from './directoryobject.entity';
import { SettingTemplateValue } from './settingtemplatevalue.complex';
//#endregion

export interface GroupSettingTemplate extends DirectoryObject {
  //#region ODataApiGen Properties
  displayName?: string;
  description?: string;
  values: SettingTemplateValue[];
  //#endregion
}