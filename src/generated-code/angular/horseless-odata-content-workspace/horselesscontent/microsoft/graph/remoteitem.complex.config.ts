//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RemoteItem } from './remoteitem.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const RemoteItemComplexConfig = {
  name: 'remoteItem',
  fields: {
    createdBy: {type: 'graph.identitySet'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    file: {type: 'graph.file'},
    fileSystemInfo: {type: 'graph.fileSystemInfo'},
    folder: {type: 'graph.folder'},
    image: {type: 'graph.image'},
    id: {type: 'Edm.String'},
    lastModifiedBy: {type: 'graph.identitySet'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    name: {type: 'Edm.String'},
    package: {type: 'graph.package'},
    parentReference: {type: 'graph.itemReference'},
    shared: {type: 'graph.shared'},
    sharepointIds: {type: 'graph.sharepointIds'},
    size: {type: 'Edm.Int64'},
    specialFolder: {type: 'graph.specialFolder'},
    video: {type: 'graph.video'},
    webDavUrl: {type: 'Edm.String'},
    webUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<RemoteItem>;
//#endregion