//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { IosDeviceFeaturesConfiguration } from './iosdevicefeaturesconfiguration.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const IosDeviceFeaturesConfigurationEntityConfig = {
  name: 'iosDeviceFeaturesConfiguration',
  base: 'microsoft.graph.appleDeviceFeaturesConfigurationBase',
  fields: {
    assetTagTemplate: {type: 'Edm.String'},
    lockScreenFootnote: {type: 'Edm.String'},
    homeScreenDockIcons: {type: 'graph.iosHomeScreenItem', collection: true},
    homeScreenPages: {type: 'graph.iosHomeScreenPage', collection: true},
    notificationSettings: {type: 'graph.iosNotificationSettings', collection: true}
  }
} as StructuredTypeConfig<IosDeviceFeaturesConfiguration>;
//#endregion