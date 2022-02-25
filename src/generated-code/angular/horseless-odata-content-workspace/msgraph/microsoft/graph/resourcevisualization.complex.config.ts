//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ResourceVisualization } from './resourcevisualization.complex';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ResourceVisualizationComplexConfig = {
  name: 'resourceVisualization',
  fields: {
    title: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    mediaType: {type: 'Edm.String'},
    previewImageUrl: {type: 'Edm.String'},
    previewText: {type: 'Edm.String'},
    containerWebUrl: {type: 'Edm.String'},
    containerDisplayName: {type: 'Edm.String'},
    containerType: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ResourceVisualization>;
//#endregion