//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Entity } from './entity.entity';
import { SettingValue } from './settingvalue.complex';
//#endregion

export interface GroupSetting extends Entity {
  //#region ODataApiGen Properties
  displayName?: string;
  templateId?: string;
  values: SettingValue[];
  //#endregion
}