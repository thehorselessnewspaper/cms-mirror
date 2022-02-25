//#region ODataApiGen ODataImports
import {
  EnumTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { WindowsSpotlightEnablementSettings } from './windowsspotlightenablementsettings.enum';
//#endregion

//#region ODataApiGen EnumTypeConfig
export const WindowsSpotlightEnablementSettingsConfig = {
  name: 'windowsSpotlightEnablementSettings',
  members: WindowsSpotlightEnablementSettings,
  fields: {
    notConfigured: {value: 0},
    disabled: {value: 1},
    enabled: {value: 2}
  }
} as EnumTypeConfig<WindowsSpotlightEnablementSettings>;
//#endregion