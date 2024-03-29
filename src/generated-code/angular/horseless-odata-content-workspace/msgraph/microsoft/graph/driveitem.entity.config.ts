﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DriveItem } from './driveitem.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const DriveItemEntityConfig = {
  name: 'driveItem',
  base: 'microsoft.graph.baseItem',
  open: true,
  fields: {
    audio: {type: 'graph.audio'},
    content: {type: 'Edm.Stream'},
    cTag: {type: 'Edm.String'},
    deleted: {type: 'graph.deleted'},
    file: {type: 'graph.file'},
    fileSystemInfo: {type: 'graph.fileSystemInfo'},
    folder: {type: 'graph.folder'},
    image: {type: 'graph.image'},
    location: {type: 'graph.geoCoordinates'},
    package: {type: 'graph.package'},
    photo: {type: 'graph.photo'},
    publication: {type: 'graph.publicationFacet'},
    remoteItem: {type: 'graph.remoteItem'},
    root: {type: 'graph.root'},
    searchResult: {type: 'graph.searchResult'},
    shared: {type: 'graph.shared'},
    sharepointIds: {type: 'graph.sharepointIds'},
    size: {type: 'Edm.Int64'},
    specialFolder: {type: 'graph.specialFolder'},
    video: {type: 'graph.video'},
    webDavUrl: {type: 'Edm.String'},
    workbook: {type: 'graph.workbook', navigation: true},
    analytics: {type: 'graph.itemAnalytics', navigation: true},
    children: {type: 'graph.driveItem', collection: true, navigation: true},
    listItem: {type: 'graph.listItem', navigation: true},
    permissions: {type: 'graph.permission', collection: true, navigation: true},
    subscriptions: {type: 'graph.subscription', collection: true, navigation: true},
    thumbnails: {type: 'graph.thumbnailSet', collection: true, navigation: true},
    versions: {type: 'graph.driveItemVersion', collection: true, navigation: true}
  }
} as StructuredTypeConfig<DriveItem>;
//#endregion