//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { MobileLobApp } from './mobilelobapp.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const MobileLobAppEntityConfig = {
  name: 'mobileLobApp',
  base: 'microsoft.graph.mobileApp',
  fields: {
    committedContentVersion: {type: 'Edm.String'},
    fileName: {type: 'Edm.String'},
    size: {type: 'Edm.Int64', nullable: false},
    contentVersions: {type: 'graph.mobileAppContent', collection: true, navigation: true}
  }
} as StructuredTypeConfig<MobileLobApp>;
//#endregion