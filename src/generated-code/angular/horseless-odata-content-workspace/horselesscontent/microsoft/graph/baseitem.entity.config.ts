//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { BaseItem } from './baseitem.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const BaseItemEntityConfig = {
  name: 'baseItem',
  base: 'microsoft.graph.entity',
  fields: {
    createdBy: {type: 'graph.identitySet'},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    description: {type: 'Edm.String'},
    eTag: {type: 'Edm.String'},
    lastModifiedBy: {type: 'graph.identitySet'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    name: {type: 'Edm.String'},
    parentReference: {type: 'graph.itemReference'},
    webUrl: {type: 'Edm.String'},
    createdByUser: {type: 'graph.user', navigation: true},
    lastModifiedByUser: {type: 'graph.user', navigation: true}
  }
} as StructuredTypeConfig<BaseItem>;
//#endregion