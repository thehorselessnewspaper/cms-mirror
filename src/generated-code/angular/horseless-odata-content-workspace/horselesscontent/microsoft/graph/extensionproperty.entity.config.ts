//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ExtensionProperty } from './extensionproperty.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ExtensionPropertyEntityConfig = {
  name: 'extensionProperty',
  base: 'microsoft.graph.directoryObject',
  open: true,
  fields: {
    appDisplayName: {type: 'Edm.String'},
    name: {type: 'Edm.String', nullable: false},
    dataType: {type: 'Edm.String', nullable: false},
    isSyncedFromOnPremises: {type: 'Edm.Boolean'},
    targetObjects: {type: 'Edm.String', nullable: false, collection: true}
  }
} as StructuredTypeConfig<ExtensionProperty>;
//#endregion