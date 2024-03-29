﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Site } from './site.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SiteEntityConfig = {
  name: 'site',
  base: 'microsoft.graph.baseItem',
  fields: {
    error: {type: 'graph.publicError'},
    displayName: {type: 'Edm.String'},
    root: {type: 'graph.root'},
    sharepointIds: {type: 'graph.sharepointIds'},
    siteCollection: {type: 'graph.siteCollection'},
    analytics: {type: 'graph.itemAnalytics', navigation: true},
    columns: {type: 'graph.columnDefinition', collection: true, navigation: true},
    contentTypes: {type: 'graph.contentType', collection: true, navigation: true},
    drive: {type: 'graph.drive', navigation: true},
    drives: {type: 'graph.drive', collection: true, navigation: true},
    items: {type: 'graph.baseItem', collection: true, navigation: true},
    lists: {type: 'graph.list', collection: true, navigation: true},
    sites: {type: 'graph.site', collection: true, navigation: true},
    onenote: {type: 'graph.onenote', navigation: true}
  }
} as StructuredTypeConfig<Site>;
//#endregion