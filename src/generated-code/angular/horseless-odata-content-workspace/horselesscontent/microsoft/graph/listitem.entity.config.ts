//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ListItem } from './listitem.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ListItemEntityConfig = {
  name: 'listItem',
  base: 'microsoft.graph.baseItem',
  fields: {
    contentType: {type: 'graph.contentTypeInfo'},
    sharepointIds: {type: 'graph.sharepointIds'},
    analytics: {type: 'graph.itemAnalytics', navigation: true},
    driveItem: {type: 'graph.driveItem', navigation: true},
    fields: {type: 'graph.fieldValueSet', navigation: true},
    versions: {type: 'graph.listItemVersion', collection: true, navigation: true}
  }
} as StructuredTypeConfig<ListItem>;
//#endregion