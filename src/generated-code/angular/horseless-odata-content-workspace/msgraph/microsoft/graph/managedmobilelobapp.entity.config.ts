//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ManagedMobileLobApp } from './managedmobilelobapp.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ManagedMobileLobAppEntityConfig = {
  name: 'managedMobileLobApp',
  base: 'microsoft.graph.managedApp',
  fields: {
    committedContentVersion: {type: 'Edm.String'},
    fileName: {type: 'Edm.String'},
    size: {type: 'Edm.Int64', nullable: false},
    contentVersions: {type: 'graph.mobileAppContent', collection: true, navigation: true}
  }
} as StructuredTypeConfig<ManagedMobileLobApp>;
//#endregion